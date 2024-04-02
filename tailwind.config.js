/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-login-blue": "#486DEE",
        "custom-login-orange": "#FE8361",
        "custom-login-yellow": "#FFCE00",
      },
    },
  },
  plugins: [],
};
