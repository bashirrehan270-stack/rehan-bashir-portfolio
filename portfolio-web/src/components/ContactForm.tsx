import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      );

      setSuccess("Message sent successfully!");

      form.reset();
    } catch {
      setSuccess("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-xl
        "
      >
        <h2 className="text-center text-4xl font-bold">
          Contact Me
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Have an internship opportunity or project?
          Let's connect.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative">

              <User
                className="absolute left-4 top-4 text-slate-500"
                size={18}
              />

              <input
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:border-cyan-400
                "
              />

            </div>

            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-slate-500"
                size={18}
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  py-4
                  pl-12
                  pr-4
                  outline-none
                  focus:border-cyan-400
                "
              />

            </div>

          </div>

          <div className="relative">

            <MessageSquare
              className="absolute left-4 top-4 text-slate-500"
              size={18}
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Write your message..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-[#111827]
                py-4
                pl-12
                pr-4
                outline-none
                focus:border-cyan-400
              "
            />

          </div>

          <button
            disabled={loading}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-emerald-500
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
              disabled:opacity-50
            "
          >
            <Send size={18} />

            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-emerald-400">
              {success}
            </p>
          )}

        </form>
      </motion.div>
    </section>
  );
}