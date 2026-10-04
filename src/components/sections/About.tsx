"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f3efe5] px-6 py-24 text-[#10251d] md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#10251d]/60">
            The Tulas Way
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Education that shapes
            <br />
            the whole person.
          </h2>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-8 text-[#10251d]/70">
            At Tulas International School, learning goes beyond textbooks.
            Students are encouraged to think independently, explore their
            interests and develop the confidence to navigate a changing world.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#10251d]/70">
            Our approach combines strong academics with values, creativity,
            collaboration and experiences that help students discover who they
            are and what they can contribute.
          </p>

          <a
            href="#academics"
            className="mt-8 inline-flex rounded-full border border-[#10251d] px-6 py-3 font-medium transition hover:bg-[#10251d] hover:text-white"
          >
            Discover our approach
          </a>
        </motion.div>

      </div>
    </section>
  );
}