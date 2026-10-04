"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Explore",
    links: ["About", "Academics", "Campus", "Beyond Academics"],
  },
  {
    title: "Connect",
    links: ["Admissions", "Contact", "Visit Campus"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1813] px-6 py-16 text-white md:px-12 lg:px-20">

      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-bold tracking-[0.2em]">
              TULAS
            </p>

            <p className="mt-5 max-w-md text-base leading-7 text-white/50">
              A modern gurukul for a changing world. Education rooted in
              values, designed for the future.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">
                {column.title}
              </p>

              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="w-fit text-white/70 transition hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Tulas International School. All rights reserved.
          </p>

          <p>
            Designed & developed with React.
          </p>
        </div>

      </div>
    </footer>
  );
}