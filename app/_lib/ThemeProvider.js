"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

// 🔑 runs BEFORE first client render
function resolveInitialTheme() {
  if (typeof window === "undefined") return false;

  const stored = localStorage.getItem("theme");
  if (stored !== null) return stored === "dark";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeProvider({ children }) {
  // ✅ state resolved synchronously
  const [dark, setDark] = useState(resolveInitialTheme);

  // ✅ side-effect ONLY (NO setState)
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
