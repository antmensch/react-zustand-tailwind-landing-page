import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface themeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
}

type themePersist = (
  config: StateCreator<themeState>,
  options: PersistOptions<themeState>
) => StateCreator<themeState>;

export const useTheme = create<themeState>(
  (persist as unknown as themePersist)(
    (set) => ({
      theme: "light",
      setTheme: (theme) =>
        set(() => ({
          theme: theme,
        })),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    { name: "theme" }
  )
);

interface searchState {
  searchState: "closed" | "open";
  closeSearch: () => void;
  openSearch: () => void;
}

export const useSearch = create<searchState>((set) => ({
  searchState: "closed",
  closeSearch: () =>
    set(() => ({
      searchState: "closed",
    })),
  openSearch: () =>
    set(() => ({
      searchState: "open",
    })),
}));
