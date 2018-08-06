module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BitcoinTutorial' : '',
};

// NOTE: At some point I may need to also add a webpack rule override
//       to tell the babel-loader not to cache things (presumably in node_modules).
//       Some people in the this thread (insert link here...) complained about stuff
//       not updating correctly because of a cache issue.  Here is the next.config.js
//       file that thierryc used (he wrote an example repo of how to deploy to
//       Github Project pages):
//       https://github.com/thierryc/Next-gh-page-example/blob/master/next.config.js
//       Note this section:
        // webpack: (config, { dev }) => {
        //     // Perform customizations to webpack config
        //     // console.log('webpack');
        //     // console.log(config.module.rules, dev);
        //     config.module.rules = config.module.rules.map(rule => {
        //       if(rule.loader === 'babel-loader') {
        //         rule.options.cacheDirectory = false
        //       }
        //       return rule
        //     })
        //     // Important: return the modified config
        //     return config
        //   }


// const {PHASE_EXPORT} = require('next/constants')
// module.exports = (phase, {defaultConfig}) => {
//   const isExporting = phase === PHASE_EXPORT
//   //
//   // https://github.com/zeit/
//   return {
//     assetPrefix: isExporting ? '/{reponame}' : '',
//   }
// }
