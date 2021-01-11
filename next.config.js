const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withOptimizedImages({
  /* config for next-optimized-images */

  // your config for other plugins or the general next.js here...
});

module.exports = {
    experimental: {
      css: false,
      headers() {
        return [
          {
            source: "/apple-app-site-association",
            headers: [{ key: "Content-Type", value: "application/json" }]
          },
          {
            source: "/.well-known/apple-app-site-association",
            headers: [{ key: "Content-Type", value: "application/json" }]
          }
        ];
      }
    }
};

module.exports = withImages(withCSS({
  webpack(config, options) {
    config.optimization.minimizer = [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
  cssModules: false,
  minified: true
}))

module.exports = withImages(withSass({
  webpack(config, options) {
    config.optimization.minimizer = [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
  cssModules: false,
  minified: true
}))
