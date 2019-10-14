import Vue from 'vue'
Vue.component("Bit", () => import("/Users/yuhongjing/www/blog/docs/.vuepress/components/Bit.vue"))
Vue.component("Foo-Bar", () => import("/Users/yuhongjing/www/blog/docs/.vuepress/components/Foo/Bar.vue"))
Vue.component("OtherComponent", () => import("/Users/yuhongjing/www/blog/docs/.vuepress/components/OtherComponent.vue"))
Vue.component("demo-1", () => import("/Users/yuhongjing/www/blog/docs/.vuepress/components/demo-1.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-3cdf4b2d5bdfb",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/README.md").then(comp => {
        Vue.component("v-3cdf4b2d5bdfb", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-0c098d9aa542a",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-0c098d9aa542a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-315446baf3ff5",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-315446baf3ff5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbbe80cb57ce1",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/read.md").then(comp => {
        Vue.component("v-bbbe80cb57ce1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b9f5b49b21134",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-b9f5b49b21134", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-871d7af4740c9",
    path: "/blog/command/Alfred4.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/Alfred4.md").then(comp => {
        Vue.component("v-871d7af4740c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d45801cd268ae",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/git.md").then(comp => {
        Vue.component("v-d45801cd268ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3156382b78028",
    path: "/blog/command/iterm2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/iterm2.md").then(comp => {
        Vue.component("v-3156382b78028", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07630b39a04e6",
    path: "/blog/command/linux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/linux.md").then(comp => {
        Vue.component("v-07630b39a04e6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39122f464d53",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/read.md").then(comp => {
        Vue.component("v-39122f464d53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ce38d492e2ed",
    path: "/blog/command/vim.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vim.md").then(comp => {
        Vue.component("v-9ce38d492e2ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87d4c84ae2519",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-87d4c84ae2519", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ebd8e9e902d9",
    path: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/Mac必备应用.md").then(comp => {
        Vue.component("v-9ebd8e9e902d9", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/Mac必备应用.html",
    redirect: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html"
  },
  {
    name: "v-3056df4fdfa95",
    path: "/blog/other/Vscode%E5%BF%85%E5%A4%87%E6%8F%92%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/Vscode必备插件.md").then(comp => {
        Vue.component("v-3056df4fdfa95", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/Vscode必备插件.html",
    redirect: "/blog/other/Vscode%E5%BF%85%E5%A4%87%E6%8F%92%E4%BB%B6.html"
  },
  {
    name: "v-45eb50d099222",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/read.md").then(comp => {
        Vue.component("v-45eb50d099222", comp.default)
        next()
      })
    }
  },
  {
    name: "v-baefeebafcc3a",
    path: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/代码产出.md").then(comp => {
        Vue.component("v-baefeebafcc3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/代码产出.html",
    redirect: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html"
  },
  {
    name: "v-8351951d641c8",
    path: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/git连接多仓库.md").then(comp => {
        Vue.component("v-8351951d641c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/git连接多仓库.html",
    redirect: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html"
  },
  {
    name: "v-8cd5da6e98236",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-8cd5da6e98236", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a74ac372121b",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-2a74ac372121b", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-16c7530b979b2",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-16c7530b979b2", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-11e4a356b4874",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-11e4a356b4874", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cf24f05063104",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-cf24f05063104", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9891d5440466f",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-9891d5440466f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d4b40137ea42",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-7d4b40137ea42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14bce79fd843d",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-14bce79fd843d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-448eda6f02f9",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-448eda6f02f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32bcdff39c1f4",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-32bcdff39c1f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6282665552331",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-6282665552331", comp.default)
        next()
      })
    }
  },
  {
    name: "v-484f384fc42d5",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-484f384fc42d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-056a97c58f0f2",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-056a97c58f0f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c5c7f231f03b",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-4c5c7f231f03b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2f6c7be426b5",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-e2f6c7be426b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5a99344cb75b3",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-5a99344cb75b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9755953c06cf3",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-9755953c06cf3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b8bbc3845498",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-5b8bbc3845498", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be5d51fe2824a",
    path: "/code/zepto/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/zepto/read.md").then(comp => {
        Vue.component("v-be5d51fe2824a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a7d05a7ee5e88",
    path: "/code/zepto/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/zepto/structure.md").then(comp => {
        Vue.component("v-a7d05a7ee5e88", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3bc5ef63b7e1",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-3bc5ef63b7e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4836f0784f90a",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-4836f0784f90a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6be84c3fa38ff",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-6be84c3fa38ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4da2479eb21",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-e4da2479eb21", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7267c9f0ffe95",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-7267c9f0ffe95", comp.default)
        next()
      })
    }
  },
  {
    name: "v-967d41b56e596",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-967d41b56e596", comp.default)
        next()
      })
    }
  },
  {
    name: "v-00bcbfc2d616d",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-00bcbfc2d616d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2506028dd9ed5",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-2506028dd9ed5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e86e2374550a3",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-e86e2374550a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-148d79664e65d",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-148d79664e65d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aba1ab009fcd3",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-aba1ab009fcd3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b98e3b425e75",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-7b98e3b425e75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ff0c819c075f3",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-ff0c819c075f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0643ccff5564c",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-0643ccff5564c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-39772f99a0d01",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-39772f99a0d01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-859752a0a9c7d",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-859752a0a9c7d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0fdd6da12233",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-e0fdd6da12233", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40256aae9cf12",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-40256aae9cf12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d106ff21413d8",
    path: "/notebook/jsTricks/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/array.md").then(comp => {
        Vue.component("v-d106ff21413d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ed36ccb56d23",
    path: "/notebook/jsTricks/boolean.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/boolean.md").then(comp => {
        Vue.component("v-9ed36ccb56d23", comp.default)
        next()
      })
    }
  },
  {
    name: "v-61712a604130c",
    path: "/notebook/jsTricks/dom.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/dom.md").then(comp => {
        Vue.component("v-61712a604130c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-faa9e7935a7fe",
    path: "/notebook/jsTricks/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/function.md").then(comp => {
        Vue.component("v-faa9e7935a7fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b87e832bb14c",
    path: "/notebook/jsTricks/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/number.md").then(comp => {
        Vue.component("v-8b87e832bb14c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2c091648c5a7a",
    path: "/notebook/jsTricks/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/object.md").then(comp => {
        Vue.component("v-2c091648c5a7a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c96c7f4eadd4",
    path: "/notebook/jsTricks/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/read.md").then(comp => {
        Vue.component("v-9c96c7f4eadd4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0d5551c363d2",
    path: "/notebook/jsTricks/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/jsTricks/string.md").then(comp => {
        Vue.component("v-e0d5551c363d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c8351eff9f9c",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-0c8351eff9f9c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e391896c0ea57",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-e391896c0ea57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0aaaaba1f9fbe",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-0aaaaba1f9fbe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0af2c64437d91",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-0af2c64437d91", comp.default)
        next()
      })
    }
  },
  {
    name: "v-33061399a98f9",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-33061399a98f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65a6587ba8048",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-65a6587ba8048", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0742255a27ec",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-e0742255a27ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81e93bf95377a",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-81e93bf95377a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5843408f5abcb",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-5843408f5abcb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-957bc174ab1d2",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-957bc174ab1d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-44f953c3e9922",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-44f953c3e9922", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b080ebf85b51d",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-b080ebf85b51d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13a35b73f00ed",
    path: "/readbook/literature/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/read.md").then(comp => {
        Vue.component("v-13a35b73f00ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b72a0178c85a",
    path: "/readbook/literature/%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/肖申克的救赎.md").then(comp => {
        Vue.component("v-5b72a0178c85a", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/literature/肖申克的救赎.html",
    redirect: "/readbook/literature/%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E.html"
  },
  {
    name: "v-d0f19d1808ac6",
    path: "/readbook/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/read.md").then(comp => {
        Vue.component("v-d0f19d1808ac6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2286597a216f1",
    path: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/你的灯亮着吗.md").then(comp => {
        Vue.component("v-2286597a216f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/你的灯亮着吗.html",
    redirect: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html"
  },
  {
    name: "v-b3537dc030201",
    path: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/微软的梦工厂.md").then(comp => {
        Vue.component("v-b3537dc030201", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/微软的梦工厂.html",
    redirect: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html"
  },
  {
    name: "v-7313cac15362e",
    path: "/readbook/other/%E8%A8%80%E5%8F%B6%E4%B9%8B%E5%BA%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/言叶之庭.md").then(comp => {
        Vue.component("v-7313cac15362e", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/言叶之庭.html",
    redirect: "/readbook/other/%E8%A8%80%E5%8F%B6%E4%B9%8B%E5%BA%AD.html"
  },
  {
    name: "v-dd87904e9173f",
    path: "/readbook/technology/CPrimerPlus.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/CPrimerPlus.md").then(comp => {
        Vue.component("v-dd87904e9173f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9309a83cec921",
    path: "/readbook/technology/css%E4%B8%96%E7%95%8C.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css世界.md").then(comp => {
        Vue.component("v-9309a83cec921", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css世界.html",
    redirect: "/readbook/technology/css%E4%B8%96%E7%95%8C.html"
  },
  {
    name: "v-542fa5467c7d6",
    path: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css禅意花园.md").then(comp => {
        Vue.component("v-542fa5467c7d6", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css禅意花园.html",
    redirect: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html"
  },
  {
    name: "v-003a6e7ce5b37",
    path: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javasciprt函数式编程.md").then(comp => {
        Vue.component("v-003a6e7ce5b37", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javasciprt函数式编程.html",
    redirect: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html"
  },
  {
    name: "v-aea6bbef26bc7",
    path: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript语言精粹.md").then(comp => {
        Vue.component("v-aea6bbef26bc7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript语言精粹.html",
    redirect: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html"
  },
  {
    name: "v-c2e01018a871",
    path: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript高级程序设计.md").then(comp => {
        Vue.component("v-c2e01018a871", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript高级程序设计.html",
    redirect: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"
  },
  {
    name: "v-74da114beae92",
    path: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/js权威指南.md").then(comp => {
        Vue.component("v-74da114beae92", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/js权威指南.html",
    redirect: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html"
  },
  {
    name: "v-0c94d345e963b",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-0c94d345e963b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2389e6f2e7",
    path: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/你不知道的javascript.md").then(comp => {
        Vue.component("v-e2389e6f2e7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/你不知道的javascript.html",
    redirect: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html"
  },
  {
    name: "v-ec92ef530b21e",
    path: "/readbook/technology/%E5%89%91%E6%8C%87offer.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/剑指offer.md").then(comp => {
        Vue.component("v-ec92ef530b21e", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/剑指offer.html",
    redirect: "/readbook/technology/%E5%89%91%E6%8C%87offer.html"
  },
  {
    name: "v-774c2f1e7a461",
    path: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/图解http.md").then(comp => {
        Vue.component("v-774c2f1e7a461", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/图解http.html",
    redirect: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html"
  },
  {
    name: "v-ccb5837796cf7",
    path: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/数据结构与算法分析C语言描述.md").then(comp => {
        Vue.component("v-ccb5837796cf7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/数据结构与算法分析C语言描述.html",
    redirect: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html"
  },
  {
    name: "v-728f5638b73a3",
    path: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/编码隐匿在计算机硬件背后的语言.md").then(comp => {
        Vue.component("v-728f5638b73a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    redirect: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html"
  },
  {
    name: "v-d5e019958b47f",
    path: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/锋利的jquery.md").then(comp => {
        Vue.component("v-d5e019958b47f", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/锋利的jquery.html",
    redirect: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html"
  },
  {
    name: "v-951c9592bb7",
    path: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/高性能的javascript.md").then(comp => {
        Vue.component("v-951c9592bb7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/高性能的javascript.html",
    redirect: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]