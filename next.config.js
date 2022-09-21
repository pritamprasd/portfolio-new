const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
    pwa: {
        dest: "public",
        runtimeCaching,
    },
});

const webpakConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        config.experiments = {
            ...config.experiments,
            ...{ topLevelAwait: true }
        };
        return config;
    },
};

module.exports = Object.assign({}, module.exports, webpakConfig);

