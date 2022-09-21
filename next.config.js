const withPWA = require('next-pwa')({
    dest: 'public'
  });
  
module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
});

const webpakConfig = {
    webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            ...{ topLevelAwait: true }
        };
        return config;
    },
};

module.exports = Object.assign({}, module.exports, webpakConfig);

