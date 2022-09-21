const withPWA = require('next-pwa')({
    dest: 'public'
  });
  
module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        mode: 'production',
        fallbacks: {
            image: '/icons/back.svg',
        }
    },
});

module.exports = {
    ...module.exports,
    webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            ...{ topLevelAwait: true }
        };
        return config;
    },
}

