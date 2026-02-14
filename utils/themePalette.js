const THEME_STORAGE_KEY = "portfolio-theme-index";

const themes = [
  {
    name: "academic-blue",
    colors: {
      "--color-bg-primary": "#161a1d",
      "--color-text-base": "#d6d9dd",
      "--color-text-strong": "#edf0f2",
      "--color-text-title": "#f5f7f8",
      "--color-accent": "#3f5f7a",
      "--color-accent-soft": "#9ec2df",
      "--color-border-muted": "#3a434a",
      "--color-surface-light": "#20262b",
      "--color-link": "#7fb0da",
      "--color-neon-pink": "#c46a8a",
      "--color-neon-cyan": "#5ca6b6",
    },
  },
  {
    name: "academic-orange",
    colors: {
      "--color-bg-primary": "#1e1a17",
      "--color-text-base": "#e0d7ce",
      "--color-text-strong": "#f2e9de",
      "--color-text-title": "#fbf2e7",
      "--color-accent": "#8a5b3f",
      "--color-accent-soft": "#d7a783",
      "--color-border-muted": "#4a3e37",
      "--color-surface-light": "#27211d",
      "--color-link": "#c88b5a",
      "--color-neon-pink": "#be738a",
      "--color-neon-cyan": "#6ba0a8",
    },
  },
  {
    name: "academic-green",
    colors: {
      "--color-bg-primary": "#171d1a",
      "--color-text-base": "#d6ddd8",
      "--color-text-strong": "#ecf2ee",
      "--color-text-title": "#f4f8f5",
      "--color-accent": "#3f6a56",
      "--color-accent-soft": "#9ec9b1",
      "--color-border-muted": "#3a4740",
      "--color-surface-light": "#202823",
      "--color-link": "#7db695",
      "--color-neon-pink": "#bf748f",
      "--color-neon-cyan": "#67a79a",
    },
  },
  {
    name: "uncw-dark",
    colors: {
      "--color-bg-primary": "#131b22",
      "--color-text-base": "#d9dde2",
      "--color-text-strong": "#eef2f5",
      "--color-text-title": "#f8fafb",
      "--color-accent": "#006fba",
      "--color-accent-soft": "#78bde6",
      "--color-border-muted": "#33424e",
      "--color-surface-light": "#1b2630",
      "--color-link": "#4aa3df",
      "--color-neon-pink": "#bd6c8f",
      "--color-neon-cyan": "#5aa8c5",
    },
  },
];

const hexToRgb = (hex) => {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => `${char}${char}`).join("")
    : normalized;
  const intValue = parseInt(value, 16);
  const r = (intValue >> 16) & 255;
  const g = (intValue >> 8) & 255;
  const b = intValue & 255;
  return `${r}, ${g}, ${b}`;
};

const applyThemeByIndex = (index) => {
  if (typeof window === "undefined") return 0;
  const root = document.documentElement;
  const normalizedIndex = ((index % themes.length) + themes.length) % themes.length;
  const selected = themes[normalizedIndex];

  Object.entries(selected.colors).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });

  root.style.setProperty("--color-accent-rgb", hexToRgb(selected.colors["--color-accent"]));
  localStorage.setItem(THEME_STORAGE_KEY, String(normalizedIndex));
  return normalizedIndex;
};

const loadSavedTheme = () => {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (!saved) return 0;
  const parsed = Number.parseInt(saved, 10);
  if (Number.isNaN(parsed)) return 0;
  return applyThemeByIndex(parsed);
};

const cycleTheme = () => {
  if (typeof window === "undefined") return 0;
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  const current = saved ? Number.parseInt(saved, 10) : 0;
  const next = Number.isNaN(current) ? 1 : current + 1;
  return applyThemeByIndex(next);
};

export { themes, applyThemeByIndex, loadSavedTheme, cycleTheme };
