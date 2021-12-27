const config = require(`./webpack.config.js`);
const styles = require(`./modules/css_prod.js`);
const cleaning = require(`./modules/cleaning.js`);

config.mode = `production`;
config.plugins.push(
  styles.miniCssExtractPlugin,
  cleaning.cleanWebpackPlugin,
);
config.module.rules.push(
  styles.sassRules,
  styles.cssRules,
);

module.exports = config;
