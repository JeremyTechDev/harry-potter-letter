module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        paper: '#e0d3af',
        // Gryffindor
        drd: '#740001', // dark red
        rd: '#ae0001', // red
        yll: '#eeeba3', // yellow
        dyll: '#d3a625', // dark yellow
      },
      fontFamily: {
        harryPotter: ['HarryPotter', 'sans-serif'],
        handwritten: ['Handwritten', 'cursive'],
        spell: ['Spell', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
