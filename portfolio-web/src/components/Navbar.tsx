import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "ContactForm", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0B0F19]/70 px-6 py-4 backdrop-blur-xl">

          <button
            onClick={() => scrollTo("hero")}
            className="text-xl font-black tracking-wide"
          >
            Rehan<span className="text-cyan-400">.</span>
          </button>

          <nav className="hidden gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/resume.pdf"
              className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 transition hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mt-3 rounded-2xl border border-white/10 bg-[#0B0F19]/95 p-6 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left ${
                      active === item.id
                        ? "text-cyan-400"
                        : "text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <a
                  href="/resume.pdf"
                  className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-center"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}