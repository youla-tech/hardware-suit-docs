/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

// import ElementUI from 'element-ui'
// import 'element-ui/packages/theme-chalk/lib/index.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import '../.vuepress/public/css/index.css'

export default ({
  Vue, // 当前 VuePress 应用所使用的 Vue 版本
  options, // 根 Vue 实例的选项
  router, // 应用程序的路由实例
  siteData // 网站元数据
}) => {
  // ...使用应用程序级别的增强功能
  Vue.use(Antd)
  Vue.use(VueHighlightJS)
  // import('vue-echarts' /* webpackChunkName: "echarts" */).then((module) => {
  //   Vue.use(moduel.default)
  // })
}