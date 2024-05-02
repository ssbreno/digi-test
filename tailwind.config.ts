import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#01080E",
        white: "#FFFFFF",
        black: "#000000",
        header: "#021017",
        "whatsapp-bg": "#CAAD76",
        button: "#9FDDFF",
        inputPlaceholder: "#F4F4F4",
        textInputPlaceholder: "#C2C1C1",

        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          70: "#021639",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      fontSize: {
        xs: "0.55rem",
        sm: "0.65rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "8rem",
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
export default config;

// theme: {
//   colors: {
//     'principal': '#01080E',
//     white:'#FFFFFF',
//     black:'#000000',
//     'header':'#021017',
//     'whatsapp-bg':'#CAAD76'
//   },
//   fontSize: {
//     xs: '0.55rem',
//     sm: '0.65rem',
//     base: '1rem',
//     lg: '1.125rem',
//     xl: '1.25rem',
//     '2xl': '1.5rem',
//     '3xl': '1.875rem',
//     '4xl': '2.25rem',
//     '5xl': '3rem',
//     '6xl': '8rem',
//   },
//   extend: {
//     backgroundImage: {
//       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       "gradient-conic":
//         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//     },
//   },
// },
