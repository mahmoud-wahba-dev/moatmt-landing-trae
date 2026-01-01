tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        error: 'var(--color-error)',
        background: 'var(--color-base-100)',
        foreground: 'var(--color-base-content)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "var(--color-primary)",
          "primary-content": "var(--color-primary-content)",
          "secondary": "var(--color-secondary)",
          "secondary-content": "var(--color-secondary-content)",
          "accent": "var(--color-accent)",
          "accent-content": "var(--color-accent-content)",
          "neutral": "var(--color-neutral)",
          "neutral-content": "var(--color-neutral-content)",
          "base-100": "var(--color-base-100)",
          "base-content": "var(--color-base-content)",
          "info": "var(--color-info)",
          "info-content": "var(--color-info-content)",
          "success": "var(--color-success)",
          "success-content": "var(--color-success-content)",
          "warning": "var(--color-warning)",
          "warning-content": "var(--color-warning-content)",
          "error": "var(--color-error)",
          "error-content": "var(--color-error-content)",
        },
      },
    ],
  },
}
