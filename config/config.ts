/*
 * @Author: Dark Angel
 * @Date: 2023-03-31 16:36:20
 * @LastEditTime: 2023-04-02 23:07:30
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\config\config.ts
 */
// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  outputPath: 'docs',
  // Fast Refresh 热更新
  fastRefresh: {},
  // openAPI: [
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     // 或者使用在线的版本
  //     // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
  //     schemaPath: join(__dirname, 'oneapi.json'),
  //     mock: false,
  //   },
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //     projectName: 'swagger',
  //   },
  // ],
  nodeModulesTransform: { type: 'none' },
  mfsu: {},
  webpack5: {},
  chainWebpack(config) {
    config.module
      .rule('file')
      .test(/\.(pdf|svg|docx|doc)$/)
      .use('file-loader?name=[path][name].[ext]')
      .loader('file-loader')
      .end();
  },
  exportStatic: {},
});
