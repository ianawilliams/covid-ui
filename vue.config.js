const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/Style/_variables.scss";`
      }
    }
  }
};