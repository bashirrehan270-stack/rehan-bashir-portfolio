import GitHubStats from "./GitHubStats";
import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import {
    Mail,
    ExternalLink,
    Briefcase,
    Code2,
    Sparkles,
    MapPin,
} from "lucide-react";

import portfolioData from "../data/portfolioData";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

function SectionTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            className="mb-12 text-center"
        >
            <p className="mb-2 text-sm uppercase tracking-[0.35em] text-cyan-400">
                {subtitle}
            </p>

            <h2 className="text-4xl font-bold text-white">
                {title}
            </h2>
        </motion.div>
    );
}

function Badge({
    text,
}: {
    text: string;
}) {
    return (
        <span
            className="
      rounded-full
      border
      border-cyan-500/30
      bg-cyan-500/10
      px-3
      py-1
      text-xs
      font-medium
      text-cyan-300
      backdrop-blur-sm
      "
        >
            {text}
        </span>
    );
}

function SocialButton({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
      flex
      items-center
      gap-2
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-5
      py-3
      transition-all
      duration-300
      hover:border-cyan-400
      hover:bg-cyan-500/10
      hover:text-cyan-300
      "
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}

export default function PortfolioView() {
    const data = portfolioData;

    return (
        <main
            className="
      min-h-screen
      bg-[#0B0F19]
      text-white
      "
        >
            <ScrollProgress />
            <Navbar />
            {/* Background */}

            <div className="fixed inset-0 -z-10 overflow-hidden">

                <div
                    className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.10),transparent_30%)]
          "
                />

                <div
                    className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          "
                />
            </div>

            {/* HERO */}

            <section id="hero"
                className="
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-center
        px-6
        py-24
        "
            >
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="grid w-full gap-16 lg:grid-cols-2"
                >
                    {/* LEFT */}

                    <div>

                        <motion.div
                            variants={fadeUp}
                            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              text-cyan-300
              "
                        >
                            <Sparkles size={16} />

                            Open to Opportunities
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="
              text-5xl
              font-black
              leading-tight
              lg:text-7xl
              "
                        >
                            {data.name}
                        </motion.h1>

                        <motion.h2
                            variants={fadeUp}
                            className="
              mt-6
              bg-gradient-to-r
              from-cyan-400
              via-emerald-400
              to-cyan-300
              bg-clip-text
              text-2xl
              font-semibold
              text-transparent
              lg:text-3xl
              "
                        >
                            {data.role}
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-300
              "
                        >
                            {data.hero.description}
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="
              mt-10
              flex
              flex-wrap
              gap-4
              "
                        >
                            <SocialButton
                                href={data.contacts[0].href}
                                icon={<Github size={18} />}
                                label="GitHub"
                            />

                            <SocialButton
                                href={data.contacts[1].href}
                                icon={<Linkedin size={18} />}
                                label="LinkedIn"
                            />

                            <SocialButton
                                href={data.contacts[2].href}
                                icon={<Mail size={18} />}
                                label="Email"
                            />
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-6
              text-slate-400
              "
                        >
                            <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                {data.location}
                            </div>

                            <div className="flex items-center gap-2">
                                <Briefcase size={18} />
                                Python Developer
                            </div>

                            <div className="flex items-center gap-2">
                                <Code2 size={18} />
                                Build Backend Application
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT */}

                    <motion.div
                        variants={fadeUp}
                        className="
            flex
            items-center
            justify-center
            "
                    >
                        <div
                            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-cyan-500/20
              bg-white/5
              p-8
              backdrop-blur-xl
              "
                        >
                            <div
                                className="
                absolute
                -inset-px
                -z-10
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500/20
                via-transparent
                to-emerald-500/20
                blur-xl
                "
                            />

                            <h3 className="text-2xl font-bold">
                                About Me
                            </h3>

                            <p
                                className="
                mt-6
                leading-8
                text-slate-300
                "
                            >
                                {data.about}
                            </p>

                            <div
                                className="
                mt-8
                flex
                flex-wrap
                gap-3
                "
                            >
                                <Badge text="Python" />
                                <Badge text="AI" />
                                <Badge text="Backend" />
                                <Badge text="OOP" />
                                <Badge text="Git" />
                                <Badge text="LangChain" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
            {/* ========================= */}
            {/* EXPERIENCE */}
            {/* ========================= */}

            <section id="experience" className="mx-auto max-w-7xl px-6 pb-24">

                <SectionTitle
                    title="Professional Experience"
                    subtitle="Journey"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Vertical Line */}

                    <div
                        className="
            absolute
            left-4
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-cyan-500
            via-emerald-500
            to-transparent
            lg:left-1/2
            "
                    />

                    {data.experience.map((item, index) => (
                        <motion.div
                            key={item.company}
                            variants={fadeUp}
                            className={`
                relative
                mb-14
                flex
                w-full
                ${index % 2 === 0
                                    ? "lg:justify-start"
                                    : "lg:justify-end"
                                }
              `}
                        >
                            {/* Timeline Dot */}

                            <div
                                className="
                absolute
                left-4
                top-8
                h-5
                w-5
                -translate-x-1/2
                rounded-full
                border-4
                border-[#0B0F19]
                bg-cyan-400
                shadow-[0_0_25px_#22d3ee]
                lg:left-1/2
                "
                            />

                            {/* Card */}

                            <div
                                className="
                ml-12
                w-full
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-white/[0.07]
                lg:ml-0
                lg:w-[46%]
                "
                            >
                                {/* Header */}

                                <div
                                    className="
                  flex
                  flex-wrap
                  items-start
                  justify-between
                  gap-4
                  "
                                >
                                    <div>

                                        <h3 className="text-2xl font-bold">
                                            {item.role}
                                        </h3>

                                        <p
                                            className="
                      mt-2
                      text-cyan-400
                      "
                                        >
                                            {item.company}
                                        </p>

                                    </div>

                                    <span
                                        className="
                    rounded-full
                    border
                    border-emerald-500/30
                    bg-emerald-500/10
                    px-4
                    py-1
                    text-sm
                    text-emerald-300
                    "
                                    >
                                        {item.duration}
                                    </span>
                                </div>

                                {/* Location */}

                                <div
                                    className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  text-slate-400
                  "
                                >
                                    <MapPin size={16} />

                                    {item.location}
                                </div>

                                {/* Responsibilities */}

                                <ul
                                    className="
                  mt-8
                  space-y-4
                  "
                                >
                                    {item.description.map((point) => (
                                        <li
                                            key={point}
                                            className="
                      flex
                      items-start
                      gap-3
                      text-slate-300
                      "
                                        >
                                            <div
                                                className="
                        mt-2
                        h-2
                        w-2
                        rounded-full
                        bg-cyan-400
                        "
                                            />

                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}

                                <div
                                    className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                  "
                                >
                                    {item.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            text={tech}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ========================= */}
            {/* PROJECTS */}
            {/* ========================= */}

            <section id="projects" className="mx-auto max-w-7xl px-6 pb-24">

                <SectionTitle
                    title="Featured Projects"
                    subtitle="Portfolio"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
                >
                    {data.projects.map((project) => (
                        <motion.article
                            key={project.title}
                            variants={fadeUp}
                            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
              "
                        >
                            <div className="relative overflow-hidden rounded-2xl">

                                <img
                                    src={project.images}
                                    alt={project.title}
                                    className="
      h-56
      w-full
      object-cover
      transition
      duration-700
      hover:scale-110
    "
                                />

                                <div
                                    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#0B0F19]
      via-transparent
      to-transparent
    "
                                />

                                {project.featured && (
                                    <span
                                        className="
        absolute
        right-4
        top-4
        rounded-full
        bg-cyan-500
        px-3
        py-1
        text-xs
        font-bold
        text-black
      "
                                    >
                                        Featured
                                    </span>
                                )}

                            </div>
                            {/* Glow */}

                            <div
                                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-emerald-500/10
                "
                            />

                            {/* Featured Badge */}

                            {project.featured && (
                                <span
                                    className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    border
                    border-emerald-500/30
                    bg-emerald-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-widest
                    text-emerald-300
                  "
                                >
                                    Featured
                                </span>
                            )}

                            <div className="relative z-10">

                                <div
                                    className="
                    mb-6
                    inline-flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                  "
                                >
                                    <Code2 size={28} />
                                </div>

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p
                                    className="
                    mt-5
                    leading-7
                    text-slate-300
                  "
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}

                                <div
                                    className="
                    mt-8
                    flex
                    flex-wrap
                    gap-2
                  "
                                >
                                    {project.technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            text={tech}
                                        />
                                    ))}
                                </div>

                                {/* Footer */}

                                <div
                                    className="
                    mt-8
                    flex
                    items-center
                    justify-between
                  "
                                >
                                    <span
                                        className="
                      text-sm
                      text-slate-500
                    "
                                    >
                                        Open Source
                                    </span>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      transition-all
                      duration-300
                      hover:border-cyan-400
                      hover:bg-cyan-500/10
                      hover:text-cyan-300
                    "
                                    >
                                        <Github size={17} />

                                        Source

                                        <ExternalLink size={16} />
                                    </a>
                                </div>

                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>
            <GitHubStats />

            {/* ========================= */}
            {/* SKILLS */}
            {/* ========================= */}

            <section id="skills" className="mx-auto max-w-7xl px-6 pb-24">

                <SectionTitle
                    title="Technical Skills"
                    subtitle="Expertise"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {data.skills.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={fadeUp}
                            className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:-translate-y-1
              "
                        >
                            <h3 className="mb-6 text-xl font-bold">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        text={skill}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ========================= */}
            {/* CERTIFICATIONS */}
            {/* ========================= */}

            <section id="certifications" className="mx-auto max-w-7xl px-6 pb-24">

                <SectionTitle
                    title="Certifications"
                    subtitle="Learning"
                />

                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2"
                >
                    {data.certifications.map((certificate) => (
                        <motion.div
                            key={certificate.title}
                            variants={fadeUp}
                            className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-emerald-400/40
              "
                        >
                            <div className="flex items-center gap-4">

                                <div
                                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-500/10
                    text-emerald-400
                  "
                                >
                                    <Sparkles size={26} />
                                </div>

                                <div>

                                    <h3 className="text-lg font-semibold">
                                        {certificate.title}
                                    </h3>

                                    <p className="text-slate-400">
                                        {certificate.issuer}
                                    </p>

                                    <p className="mt-1 text-sm text-cyan-400">
                                        {certificate.type}
                                    </p>

                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ========================= */}
            {/* ContactForm */}
            {/* ========================= */}

            <section id="ContactForm" className="mx-auto max-w-5xl px-6 pb-28">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
            rounded-[32px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            via-white/5
            to-emerald-500/10
            p-10
            text-center
            backdrop-blur-xl
          "
                >
                    <h2 className="text-4xl font-bold">
                        Let's Build Something Great
                    </h2>

                    <p
                        className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
                    >
                        I'm actively learning backend development,
                        Python, AI technologies, and modern software
                        engineering. I'm always open to internships,
                        collaboration opportunities, and networking
                        with developers and recruiters.
                    </p>

                    <div
                        className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
                    >
                        <SocialButton
                            href={data.contacts[2].href}
                            icon={<Mail size={18} />}
                            label="Email Me"
                        />

                        <SocialButton
                            href={data.contacts[1].href}
                            icon={<Linkedin size={18} />}
                            label="LinkedIn"
                        />

                        <SocialButton
                            href={data.contacts[0].href}
                            icon={<Github size={18} />}
                            label="GitHub"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ========================= */}
            {/* FOOTER */}
            {/* ========================= */}

            <footer
                className="
          border-t
          border-white/10
          py-10
          text-center
          text-sm
          text-slate-500
        "
            >
                <p>
                    © {new Date().getFullYear()} {data.name}
                </p>

                <p className="mt-2">
                    Built with React, TypeScript,
                    Tailwind CSS & Framer Motion.
                </p>
            </footer>
        </main>
    );
}

