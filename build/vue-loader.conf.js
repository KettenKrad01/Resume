'use strict';
const utils = require('./utils');
const config = require('../config');
const px2rem = require('postcss-pxtorem');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    postcss: function () {
        return [px2rem({
            rootValue: 120, //iphone6: 23.4375, 1920px: 120
            propList: ['*', '!border*', '!min*']
        })];
    }
};
