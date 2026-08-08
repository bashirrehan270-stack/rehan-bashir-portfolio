import { FaGithub as Github } from "react-icons/fa";
import { motion } from "framer-motion";
import { Star, GitFork, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubUser {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
  name: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

const USERNAME = "bashirrehan270-stack";

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGitHub() {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );

        const repoResponse = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`
        );

        const userData = await userResponse.json();
        const repoData = await repoResponse.json();

        setUser(userData);
        setRepos(repoData);
      } finally {
        setLoading(false);
      }
    }

    loadGitHub();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-slate-400">
          Loading GitHub profile...
        </p>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-2 text-center text-4xl font-bold">
          GitHub Activity
        </h2>

        <p className="mb-14 text-center text-slate-400">
          Live data from GitHub
        </p>

        {/* Profile */}

        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 md:flex-row">

            <img
              src={user.avatar_url}
              className="h-28 w-28 rounded-full border border-cyan-400"
            />

            <div className="flex-1">

              <h3 className="text-3xl font-bold">
                {user.name}
              </h3>

              <p className="mt-2 text-slate-400">
                github.com/{USERNAME}
              </p>

              <div className="mt-6 flex flex-wrap gap-6">

                <div>
                  <p className="text-3xl font-bold text-cyan-400">
                    {user.public_repos}
                  </p>

                  <p className="text-sm text-slate-400">
                    Repositories
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-cyan-400">
                    {user.followers}
                  </p>

                  <p className="text-sm text-slate-400">
                    Followers
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-cyan-400">
                    {user.following}
                  </p>

                  <p className="text-sm text-slate-400">
                    Following
                  </p>
                </div>

              </div>

            </div>

            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black"
            >
              Visit GitHub
            </a>

          </div>
        </div>

        {/* Repository Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {repos.map((repo) => (
            <motion.a
              whileHover={{ y: -5 }}
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
            >
              <Github className="mb-5 text-cyan-400" />

              <h3 className="font-bold">
                {repo.name}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {repo.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">

                <div className="flex items-center gap-1">
                  <Star size={16} />
                  {repo.stargazers_count}
                </div>

                <div className="flex items-center gap-1">
                  <GitFork size={16} />
                  {repo.forks_count}
                </div>

                <div className="flex items-center gap-1">
                  <BookOpen size={16} />
                  {repo.language}
                </div>

              </div>

            </motion.a>
          ))}

        </div>
      </motion.div>
    </section>
  );
}