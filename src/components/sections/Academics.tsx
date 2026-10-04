"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    number: "01",
    title: "Primary School",
    description:
      "Building curiosity, confidence and strong foundations through engaging learning experiences.",
  },
  {
    number: "02",
    title: "Middle School",
    description:
      "Encouraging independent thinking, exploration and deeper understanding across subjects.",
  },
  {
    number: "03",
    title: "Senior School",
    description:
      "Preparing students for higher education while developing leadership, responsibility and purpose.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="bg-[#f3efe5] px-6 py-24 text-[#10251d] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#10251d]/60">
              Academics
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Learning designed for
              <br />
              a changing world.
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-[#10251d]/60">
            Strong foundations, independent thinking and meaningful learning
            experiences prepare students for what comes next.
          </p>
        </motion.div>

        {/* Program cards */}
        <div className="border-t border-[#10251d]/20">
          {programs.map((program, index) => (
            <motion.div
              key={program.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid gap-6 border-b border-[#10251d]/20 py-8 transition-all duration-300 hover:px-4 md:grid-cols-[100px_1fr_1fr_auto] md:items-center"
            >
              <span className="text-sm text-[#10251d]/40">
                {program.number}
              </span>

              <h3 className="text-2xl font-medium md:text-3xl">
                {program.title}
              </h3>

              <p className="max-w-md text-base leading-7 text-[#10251d]/60">
                {program.description}
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#10251d]/30 transition-all duration-300 group-hover:bg-[#10251d] group-hover:text-white">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}