import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react"; // optionnel : icônes si tu veux

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 px-4 py-2 rounded-full transition-all bg-mainBlack text-white dark:bg-white dark:text-black shadow hover:scale-105"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
