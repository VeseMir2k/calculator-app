/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      "main-bg": "hsl(222, 26%, 31%)",
      "toogle-bg": "hsl(223, 31%, 20%)",
      "keypad-bg": "hsl(223, 31%, 20%)",
      "screen-bg": "hsl(224, 36%, 15%)",
      "key-bg-1": "hsl(225, 21%, 49%)",
      "key-bg-hover-1": "#A2B2E1",
      "key-bg-2": "hsl(6, 63%, 50%)",
      "key-bg-hover-2": "#F96B5B",
      "key-bg-3": "hsl(30, 25%, 89%)",
      "key-bg-hover-3": "hsl(0, 0, 100%)",
      "key-shadow-1": "hsl(224, 28%, 35%)",
      "key-shadow-2": "hsl(6, 70%, 34%)",
      "key-shadow-3": "hsl(28, 16%, 65%)",
      toggle: "hsl(6, 63%, 50%)",
      "text-1": "hsl(0, 0%, 100%)",
      "text-2": "hsl(221, 14%, 31%)",
      "text-3": "hsl(0, 0%, 100%)",
    },
    fontSize: {
      "size-1": ["12px", { letterSpacing: "1px", fontWeight: "700" }],
      "size-2": ["20px", { letterSpacing: "-0.33px", fontWeight: "700" }],
      "size-3": ["28px", { letterSpacing: "-0.47px", fontWeight: "700" }],
      "size-4": ["32px", { letterSpacing: "-0.53px", fontWeight: "700" }],
      "size-5": ["40px", { letterSpacing: "-0.67px", fontWeight: "700" }],
      "size-6": ["56px", { letterSpacing: "-0.93px", fontWeight: "700" }],
    },
    extend: {
      boxShadow: {
        "shadow-1": "inset 0 -4px #B3A497",
        "shadow-2": "inset 0 -4px #414E73",
        "shadow-3": "inset 0 -4px #93261A",
      },
    },
  },
  plugins: [],
};
