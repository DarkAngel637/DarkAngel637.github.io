/*
 * @Author: Dark Angel
 * @Date: 2023-03-31 16:36:20
 * @LastEditTime: 2023-04-01 20:04:15
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\.prettierrc.js
 */
const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  overrides: [
    {
      files: ['*.jpg', '*.jepg'],
      options: {
        parser: 'jpg',
      },
    },
  ],
};
