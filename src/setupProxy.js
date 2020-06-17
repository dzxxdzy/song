/*
 * @Description: 代理转发，解决跨域问题
 * @Author: Song
 * @Date: 2019-09-17 08:53:07
 * @LastEditTime: 2020-06-17 14:24:16
 * @LastEditors: Song
 */
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use('/emall/app', proxy({
        target: 'http://x.x.x.x:8081',
        changeOrigin: true,
        secure: false,
    }));
};