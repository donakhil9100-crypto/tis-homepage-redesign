"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Campus() {
  return (
    <section
      id="campus"
      className="bg-[#f3efe5] px-6 py-24 text-[#10251d] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#10251d]/50">
            Campus Experience
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            A place where
            <br />
            learning comes alive.
          </h2>
        </motion.div>

        {/* Large image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[2rem]"
        >
          <Image
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop"
            alt="Students learning together"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 p-8 text-white md:p-12">
            <p className="max-w-xl text-lg leading-8 text-white/80">
              From classrooms and laboratories to open spaces and collaborative
              environments, every part of the campus is designed to encourage
              curiosity and connection.
            </p>
          </div>

          {/* Floating button */}
          <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#10251d] transition-transform duration-300 group-hover:rotate-45">
            <ArrowDownRight size={24} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}