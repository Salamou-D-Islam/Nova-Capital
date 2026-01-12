tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#F59E0B",
        accent: "#10B981",
        bg: "#F3F4F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        noble: {
          primary: "#1D4ED8",
          secondary: "#F59E0B",
          accent: "#10B981",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
