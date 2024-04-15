import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeProvider = {
  theme: "light" | "dark";
  toggleTheme(): void;
};

export const useTheme = create<ThemeProvider>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () => {
        set((values) => ({
          theme: values.theme == "light" ? "dark" : "light",
        }));
      },
    }),
    {
      name: "labville-theme",
    }
  )
);
