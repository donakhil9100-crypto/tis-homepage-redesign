"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-[#d9a441] px-6 py-24 text-[#10251d] md:px-12 lg:px-20"
    >
      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[60px] border-[#10251d]/10" />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#10251d]/60">
            Admissions
          </p>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Give your child
            <br />
            a place to grow.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#10251d]/70">
            Discover an education that combines strong academics, meaningful
            experiences and the values needed for a changing world.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full bg-[#10251d] px-7 py-4 font-medium text-white transition hover:scale-105"
            >
              Enquire Now

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#"
              className="rounded-full border border-[#10251d]/30 px-7 py-4 font-medium transition hover:bg-[#10251d]/10"
            >
              Visit Campus
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}