module.exports = {
  content: ["./src/**/*.html"], // dossier où tu as tes fichiers HTML
  theme: {
    extend: {
      colors: {
        bg1: "#A0F1BD",
        bg2: "#F9F9F9",
        bg3: "#2E4F21",
        bg4: "#FFFFFF",
        bg5: "#F4F7F5",
        bg6: "#D2F8DC",

        accents1: "#D2F8DC",
        accents2: "#D7D7D7",

        paragraph: "#2E4F21",

        onaccent1: "#FFFFFF",
        onaccent2: "#506349",
        onaccent3: "#7D9276",
        onaccent4: "#D5E4D0",

        divider1: "#2E4F21",
        divider2: "#C7C7C7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        nova: {
          primary: "#2E4F21",
          secondary: "#A0F1BD",
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
