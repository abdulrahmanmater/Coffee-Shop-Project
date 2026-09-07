// Theme

export const THEMES = {
    DARK: "dark",
    LIGHT: "light"
};


// Normalize Theme

export function normalizeTheme(
    theme
) {
    return theme === THEMES.LIGHT
        ? THEMES.LIGHT
        : THEMES.DARK;
}


// Apply Theme

export function applyTheme(
    theme
) {
    const normalizedTheme =
        normalizeTheme(theme);

    document.documentElement.dataset.theme =
        normalizedTheme;
}


// Apply User Theme

export function applyUserTheme(
    user
) {
    const theme =
        user?.preferences?.theme;

    applyTheme(theme);
}