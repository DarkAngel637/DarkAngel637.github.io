/*
 * @Author: Dark Angel
 * @Date: 2023-03-31 16:36:20
 * @LastEditTime: 2023-04-01 17:45:15
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\config\defaultSettings.ts
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '我的笔记与面试题',
  pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
