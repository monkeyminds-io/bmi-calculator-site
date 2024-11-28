import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      "heading-xl": [
        "4rem",
        {
          lineHeight: "110%",
          letterSpacing: "-0.2rem",
          fontWeight: "600",
        },
      ],
      "heading-l": [
        "3rem",
        {
          lineHeight: "110%",
          letterSpacing: "-0.15rem",
          fontWeight: "600",
        },
      ],
      "heading-m": [
        "1.5rem",
        {
          lineHeight: "110%",
          letterSpacing: "-0.075rem",
          fontWeight: "600",
        },
      ],
      "heading-s": [
        "1.25rem",
        {
          lineHeight: "110%",
          letterSpacing: "-0.0625rem",
          fontWeight: "600",
        },
      ],
      "body-m": [
        "1rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
      "body-m-bold": [
        "1rem",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "body-s": [
        "0.875rem",
        {
          lineHeight: "150%",
          fontWeight: "400",
        },
      ],
    },
    extend: {
      colors: {
        white: "#ffffff",
        text: "#253347",
        brand: "#345ff6",
        "brand-light": "#E1E7FE",
        gray: "#5e6e85",
        "input-border": "#253347",
      },
      borderRadius: {
        hero: "2rem",
      },
      backgroundImage: {
        hero: "linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
        result:
          "linear-gradient(290deg, rgba(214, 230, 254, 0.24) 0%, rgba(214, 252, 254, 0.00) 100%)",
      },
      spacing: {
        "hero-form-top": "68%",
        "hero-bg": "60%",
      },
      boxShadow: {
        form: "16px 32px 56px 0px rgba(143, 174, 207, 0.25);",
        card: "16px 32px 56px 0px rgba(143, 174, 207, 0.25);",
      },
    },
  },
  plugins: [],
} satisfies Config;
