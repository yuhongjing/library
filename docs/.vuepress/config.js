const navFile = require('./nav.js');
const sideBarFile = require('./sidebar.js');
module.exports = {
  base: '/library/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '余鸿靖的手册小站',
      description: '学而时习之，可以为师矣'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'yuhongjing/library',
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        nav: navFile,
        sidebar: sideBarFile
      }
    }
  }
}
