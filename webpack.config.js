/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-15 22:03:46
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-15 22:05:07
 */
const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist')
    },
    mode: 'production'
}