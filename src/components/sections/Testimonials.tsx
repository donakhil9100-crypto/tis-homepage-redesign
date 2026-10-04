"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Tulas has given our child the confidence to explore, ask questions and discover new interests.",
    name: "Parent of a TIS Student",
    role: "Parent",
  },
  {
    quote:
      "The balance between academics, activities and personal development makes learning much more meaningful.",
    name: "TIS Student",
    role: "Student",
  },
  {
    quote:
      "The school creates an environment where students are encouraged to think independently and take responsibility.",
    name: "TIS Community",
    role: "Community Member",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#10251d] px-6 py-24 text-white md:px-12 lg:px-20">
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
            Voices of Tulas
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Growing together,
            <br />
            learning together.
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex min-h-[300px] flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-7"
            >
              <div>
                <span className="text-4xl text-white/30">“</span>

                <p className="mt-3 text-lg leading-8 text-white/80">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-white/50">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}