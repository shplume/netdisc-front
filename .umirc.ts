import { defineConfig } from '@umijs/max';

export default defineConfig({
  plugins: ['@umijs/plugin-electron'],
  electron: {},
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {},
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
    title: true,
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      title: 'title.login',
      path: '/login',
      component: './Login',
    },
  ],
  npmClient: 'npm',
});
