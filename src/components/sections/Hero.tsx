"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#10251d] px-6 pb-16 pt-32 text-white md:px-12 lg:px-20">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
  alt="School campus"
  fill
  className="object-cover opacity-40"
  priority
/>

        <div className="absolute inset-0 bg-gradient-to-t from-[#10251d] via-[#10251d]/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-end">

        <div className="max-w-5xl">

          {/* Small heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm uppercase tracking-[0.25em] text-white/70"
          >
            Tulas International School
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            A modern gurukul
            <br />
            for a changing world.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/70"
          >
            Rooted in Indian values and designed for the future, Tulas
            International School brings together academics, character,
            creativity and life beyond the classroom.
          </motion.p>

          {/* Button */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
          >
            Explore Tulas

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

        </div>
      </div>
    </section>
  );
}