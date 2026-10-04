"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    title: "Sports",
    description:
      "Developing teamwork, discipline and confidence through sports and physical activity.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Arts & Creativity",
    description:
      "Giving students space to express themselves through art, music, performance and design.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Leadership",
    description:
      "Building responsibility, communication and leadership skills through real-world experiences.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BeyondAcademics() {
  return (
    <section
      id="beyond"
      className="bg-[#10251d] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/50">
            Beyond Academics
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Discover. Create.
            <br />
            Become more.
          </h2>
        </motion.div>

        {/* Activity cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-medium">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {activity.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}