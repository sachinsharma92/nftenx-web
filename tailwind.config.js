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
          1: "#1A1616",
          2: "#100D0E",
        },
        secondary: {
          1: "#FFFCED",
          2: "#FFCD4D",
          3: "#E5833C",
        },
        tertiary: {
          1: "#824527",
          2: "#81562E",
          3: "#CEB2A5",
        },
        accent: "#4B1C56",
        teal: "#1C4856",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      fontFamily: {
        'heading-serif': [
          "Recife",
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
