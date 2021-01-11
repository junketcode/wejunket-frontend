module.exports = {
  theme: {
    minHeight: {
      "0": "700px"
    },
    fontFamily: {
      sans: ["din-2014", "sans-serif"],
    },
    color: {
      red: {
        100: "#EA3844"
      }
    }
  },
  variants: {},
  plugins: [
    require("tailwindcss-animatecss")({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
      variants: ["responsive"],
    }),
  ],
};
