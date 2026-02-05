"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../_lib/ThemeProvider";

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-full flex items-center justify-center border hover:scale-[1.03] transition-all duration-200 ease-out relative"
      aria-label="Toggle theme"
    >
      {/* Sun – visible in dark mode */}
      <Sun size={16} className="hidden dark:block absolute" />

      {/* Moon – visible in light mode */}
      <Moon size={16} className="block dark:hidden absolute" />
    </button>
  );
}
