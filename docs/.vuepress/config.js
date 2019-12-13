const navFile = require('./nav.js');
const sideBarFile = require('./sidebar.js');
module.exports = {
  base: '/library/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '余鸿靖的手册小站',
      description: '小站目前有231篇文章共226862字，继续努力'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'yuhongjing/library',
    sidebarDepth: 2,
    lastUpdated: '最近更新时间',
    editLinks: false,
    docsDir: 'docs',
    searchMaxSuggestions: 10,
    smoothScroll: true,
    locales: {
      '/': {
        nav: navFile,
        sidebar: sideBarFile
      }
    }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容更新',
        buttonText: '刷新'
      }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
      selector: '.theme-default-content :not(a) > img',
      options: {
        margin: 16
      }
    },
    '@vuepress/nprogress': true
  }
}
