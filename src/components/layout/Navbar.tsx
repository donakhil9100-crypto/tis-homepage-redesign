"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Beyond Academics", href: "#beyond" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/30 px-6 py-4 text-white backdrop-blur-xl">
        
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-[0.2em]"
        >
          TULAS
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#admissions"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Admissions
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/10 bg-black/90 p-6 text-white backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-black"
            >
              Admissions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}