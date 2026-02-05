"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../_lib/ThemeProvider";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { dark, setDark } = useTheme();

  // 1. Define what the server should "see" (Always false to match server HTML)
  const getServerSnapshot = () => false;

  // 2. Define what the client sees (The real value)
  const getSnapshot = () => dark;

  // 3. Define a dummy subscribe function (we rely on the provider for updates, so this can be empty)

  // The Magic Hook:
  // Returns 'false' on server/first-render, and 'true' (if dark) immediately after.
  const isDarkSafe = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-9 h-9 rounded-full flex items-center justify-center border hover:scale-[1.03] transition-all duration-200 ease-out relative"
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <Sun
        size={18}
        className={`absolute transition-all duration-500 ease-in-out ${
          isDarkSafe
            ? "rotate-0 scale-100 opacity-100" // Visible
            : "-rotate-90 scale-0 opacity-0" // Hidden
        }`}
      />

      {/* Moon Icon */}
      <Moon
        size={18}
        className={`absolute transition-all duration-500 ease-in-out ${
          isDarkSafe
            ? "rotate-90 scale-0 opacity-0" // Hidden
            : "rotate-0 scale-100 opacity-100" // Visible
        }`}
      />
    </button>
  );
}
