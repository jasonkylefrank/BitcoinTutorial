module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/BitcoinTutorial' : '',
};


// const {PHASE_EXPORT} = require('next/constants')
// module.exports = (phase, {defaultConfig}) => {
//   const isExporting = phase === PHASE_EXPORT
//   //
//   // https://github.com/zeit/
//   return {
//     assetPrefix: isExporting ? '/{reponame}' : '',
//   }
// }
