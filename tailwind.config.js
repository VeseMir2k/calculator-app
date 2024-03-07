/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      main: "var(--main)",
      toogle: "var(--toogle)",
      dot: "var(--dot)",
      "dot-hover": "var(--dot-hover)",
      keypad: "var(--keypad)",
      screen: "var(--screen)",
      "key-1": "var(--key-1)",
      "key-2": "var(--key-2)",
      "key-3": "var(--key-3)",
      "key-hover-1": "var(--key-hover-1)",
      "key-hover-2": "var(--key-hover-2)",
      "key-hover-3": "var(--key-hover-3)",
      "text-header-screen": "var(--text-header-screen)",
      "text-1": "var(--text-1)",
      "text-2": "var(--text-2)",
      "text-3": "var(--text-3)",
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
        "key-shadow-1": "inset 0 -4px var(--key-shadow-1)",
        "key-shadow-2": "inset 0 -4px var(--key-shadow-2)",
        "key-shadow-3": "inset 0 -4px var(--key-shadow-3)",
      },
    },
  },
  plugins: [],
};
