"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    label: "Years of Excellence",
  },
  {
    number: "1000+",
    label: "Students",
  },
  {
    number: "50+",
    label: "Clubs & Activities",
  },
  {
    number: "25+",
    label: "Acres of Campus",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#10251d] px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 border-t border-white/20 lg:grid-cols-4">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border-b border-white/20 px-4 py-10 lg:border-b-0 lg:border-r lg:px-8"
          >
            <p className="text-4xl font-semibold md:text-5xl">
              {stat.number}
            </p>

            <p className="mt-3 text-sm text-white/60">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}