/*
 * @Author: Dark Angel
 * @Date: 2023-03-31 16:36:20
 * @LastEditTime: 2023-04-02 19:57:41
 * @LastEditors: Dark Angel
 * @Description: 干就完事了!
 * @FilePath: \DarkAngel637.github.io\config\routes.ts
 */
export default [
  // 登录页
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  //
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   // access: 'canAdmin',// 默认权限(也就是不调用接口的时候)可以设置access 字段,t同时对应 access.ts 返回的值
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    name: 'mynote',
    icon: 'DashboardOutlined',
    component: './Mynote',
    path: '/mynote',
  },
  {
    name: 'interview',
    icon: 'DashboardOutlined',
    component: './interviewDoc',
    path: '/interview',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
