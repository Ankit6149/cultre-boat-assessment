"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact Us" },
];

function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const base = "transition-all duration-200";
  const inactive =
    "text-gold-300 hover:text-gold-500 hover:border-b-3 pb-5 mt-2 transtion-all duration-100";
  const active =
    "text-gold-500 border-b-3 pb-5 mt-2 font-medium dark:text-gold-400";

  function getClass(href) {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return `${base} ${isActive ? active : inactive}`;
  }

  return (
    <div className="relative">
      {/* Mobile top actions */}
      <div className="flex items-center gap-3 text-gold-300 lg:hidden">
        <ThemeToggler />

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="w-9 h-9 rounded-full flex items-center justify-center border hover:scale-[1.03] transition-transform duration-200 ease-out"
        >
          <Menu className={open ? "hidden" : "block"} size={18} />
          <X className={open ? "block" : "hidden"} size={18} />
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-9 px-6 lg:text-m xl:text-lg text-gold-300 transition-all duration-300">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className={getClass(href)}>
            {label}
          </Link>
        ))}
        <ThemeToggler />
      </nav>

      {/* Mobile dropdown */}
      <nav
        className={
          "xl:hidden absolute right-0 mt-4 w-56 rounded-xl border bg-charcoal-800 shadow-lg transition-all duration-200 " +
          (open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none")
        }
      >
        <div className="flex flex-col gap-5 px-6 py-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={getClass(href)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
