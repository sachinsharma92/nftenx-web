module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#1A1616",
        // secondary: "#FFFCED",
        // tertiary: '#714436'
        primary: {
          1: "#101118",
          2: "#342862",
          3: '#493D5E',
          4: '#08090d',
          'light': '#8389B2',
          'light-2': '#A3ACEC'
        },
        secondary: {
          1: "#FFFCED",
          2: "#8E8861",
          3: "#E5833C",
        },
        tertiary: {
          1: "#824527",
          2: "#81562E",
          3: "#CEB2A5",
        },
        accent: "#4B1C56",
        teal: "#1C4856",
        voilet1: '#A07CFF',
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        levitate: "levitate 6s cubic-bezier(0.37, 0, 0.63, 1) infinite",
        'levitate-slow': "levitate 12s cubic-bezier(0.37, 0, 0.63, 1) infinite",
        'infinite-scroll-left': 'infiniteScrollLeft 15s linear infinite'
      },
      keyframes: {
        levitate: {
          "0%": { transform: "translate(0)" },
          "10%": { transform: "translate(-8px, -8px)" },
          "20%": { transform: "translate(8px, -8px)" },
          "30%": { transform: "translate(-8px, 8px)" },
          "40%": { transform: "translate(8px, 8px)" },
          "50%": { transform: "translate(-8px, -8px)" },
          "60%": { transform: "translate(8px, -8px)" },
          "70%": { transform: "translate(-8px, 8px)" },
          "80%": { transform: "translate(-8px, -8px)" },
          "90%": { transform: "translate(8px, -8px)" },
          "100%": { transform: "translate(0)" },
        },
        infiniteScrollLeft: {
          '100%': {transform: 'translateX(-50%)'},
        },
      },
      fontFamily: {
        "heading-serif": ["reckless", "Recife", "serif"],
        "recife": ["Recife", "serif"],
        "reckless": ["reckless", "serif"],
        "mono": ["Roboto Mono", "mono"],
      },
    },
  },
  plugins: [],
};
