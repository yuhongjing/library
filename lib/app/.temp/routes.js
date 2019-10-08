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
    name: "v-638a9434cfe82",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/README.md").then(comp => {
        Vue.component("v-638a9434cfe82", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ba80b5121814f",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-ba80b5121814f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0dcc8b668c784",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-0dcc8b668c784", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b79822c1534",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/read.md").then(comp => {
        Vue.component("v-6b79822c1534", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e89647e4388b",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-1e89647e4388b", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-ec1c6386089d5",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/git.md").then(comp => {
        Vue.component("v-ec1c6386089d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8ee1225a760d",
    path: "/blog/command/iterm2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/iterm2.md").then(comp => {
        Vue.component("v-d8ee1225a760d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-858dcee89d4a2",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/read.md").then(comp => {
        Vue.component("v-858dcee89d4a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-933210320a02e",
    path: "/blog/command/vim.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vim.md").then(comp => {
        Vue.component("v-933210320a02e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28949fd77e28b",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-28949fd77e28b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db26ab7de56e3",
    path: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/Mac必备应用.md").then(comp => {
        Vue.component("v-db26ab7de56e3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/Mac必备应用.html",
    redirect: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html"
  },
  {
    name: "v-426244dc30389",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/read.md").then(comp => {
        Vue.component("v-426244dc30389", comp.default)
        next()
      })
    }
  },
  {
    name: "v-632a260d4cb78",
    path: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/代码产出.md").then(comp => {
        Vue.component("v-632a260d4cb78", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/代码产出.html",
    redirect: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html"
  },
  {
    name: "v-711077d9a6a3",
    path: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/git连接多仓库.md").then(comp => {
        Vue.component("v-711077d9a6a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/git连接多仓库.html",
    redirect: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html"
  },
  {
    name: "v-fa2f0c569e7c6",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-fa2f0c569e7c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-62798648b8601",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-62798648b8601", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-9973b560b3155",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-9973b560b3155", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-fb05c14a904fa",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-fb05c14a904fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e70aced169506",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-e70aced169506", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1a2e208fe5e",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-f1a2e208fe5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed2b15c6fd916",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-ed2b15c6fd916", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e82fa7ab10b19",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-e82fa7ab10b19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7be155083057f",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-7be155083057f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a163025781fa",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-8a163025781fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d64b4b8cd110a",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-d64b4b8cd110a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d58c47250768",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-0d58c47250768", comp.default)
        next()
      })
    }
  },
  {
    name: "v-45ff37c669f31",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-45ff37c669f31", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e8bc47c029c4",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-7e8bc47c029c4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8eccf7610cec1",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-8eccf7610cec1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-41ed79693f4bb",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-41ed79693f4bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-017fae7dd7c2f",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-017fae7dd7c2f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b6fac5c03022",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-9b6fac5c03022", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6dce65f473d39",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-6dce65f473d39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2c26bfa5086c",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-d2c26bfa5086c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a0de3a847d99",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-3a0de3a847d99", comp.default)
        next()
      })
    }
  },
  {
    name: "v-58233e209c131",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-58233e209c131", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1896edfc857e2",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-1896edfc857e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fdaf0a7833bce",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-fdaf0a7833bce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a868467e2d00f",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-a868467e2d00f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-87f657bbf6442",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-87f657bbf6442", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5df594fc47476",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-5df594fc47476", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfd283f15cab5",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-dfd283f15cab5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea935eaf4f28d",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-ea935eaf4f28d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fbf8239a267cc",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-fbf8239a267cc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5cb64586cf91f",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-5cb64586cf91f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-075fc3c2d1408",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-075fc3c2d1408", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c75419e49c277",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-c75419e49c277", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b41e88b44a3f",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-0b41e88b44a3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b09bdd1fe6023",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-b09bdd1fe6023", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4d9c10b897d87",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-4d9c10b897d87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0ba864e4ae9e",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-c0ba864e4ae9e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c7205b74ac2d",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-1c7205b74ac2d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6400a00d688d3",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-6400a00d688d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d47537a1c9df",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-8d47537a1c9df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b7fb7b980c42",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-4b7fb7b980c42", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2e09751c8f0a1",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-2e09751c8f0a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9a0505d3281e",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-f9a0505d3281e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-108fa5fd8436",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-108fa5fd8436", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5f9b5207d13e",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-a5f9b5207d13e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db41627be4544",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-db41627be4544", comp.default)
        next()
      })
    }
  },
  {
    name: "v-612282a32ce19",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-612282a32ce19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-910f22765ac25",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-910f22765ac25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e09011587805",
    path: "/readbook/literature/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/read.md").then(comp => {
        Vue.component("v-e09011587805", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cf8bd8fc0ed48",
    path: "/readbook/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/read.md").then(comp => {
        Vue.component("v-cf8bd8fc0ed48", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cfb4e141c37c2",
    path: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/你的灯亮着吗.md").then(comp => {
        Vue.component("v-cfb4e141c37c2", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/你的灯亮着吗.html",
    redirect: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html"
  },
  {
    name: "v-39c58bcddc90c",
    path: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/微软的梦工厂.md").then(comp => {
        Vue.component("v-39c58bcddc90c", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/微软的梦工厂.html",
    redirect: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html"
  },
  {
    name: "v-841e512a433b9",
    path: "/readbook/technology/CPrimerPlus.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/CPrimerPlus.md").then(comp => {
        Vue.component("v-841e512a433b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6ef51fae955a8",
    path: "/readbook/technology/css%E4%B8%96%E7%95%8C.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css世界.md").then(comp => {
        Vue.component("v-6ef51fae955a8", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css世界.html",
    redirect: "/readbook/technology/css%E4%B8%96%E7%95%8C.html"
  },
  {
    name: "v-a5836edb4a792",
    path: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css禅意花园.md").then(comp => {
        Vue.component("v-a5836edb4a792", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css禅意花园.html",
    redirect: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html"
  },
  {
    name: "v-bb5bac5089797",
    path: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javasciprt函数式编程.md").then(comp => {
        Vue.component("v-bb5bac5089797", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javasciprt函数式编程.html",
    redirect: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html"
  },
  {
    name: "v-ab7fb4c6e0c49",
    path: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript语言精粹.md").then(comp => {
        Vue.component("v-ab7fb4c6e0c49", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript语言精粹.html",
    redirect: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html"
  },
  {
    name: "v-81e6f719000e7",
    path: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript高级程序设计.md").then(comp => {
        Vue.component("v-81e6f719000e7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript高级程序设计.html",
    redirect: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"
  },
  {
    name: "v-479137091d7df",
    path: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/js权威指南.md").then(comp => {
        Vue.component("v-479137091d7df", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/js权威指南.html",
    redirect: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html"
  },
  {
    name: "v-4e15950c1abd1",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-4e15950c1abd1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e45daa5362c45",
    path: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/你不知道的javascript.md").then(comp => {
        Vue.component("v-e45daa5362c45", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/你不知道的javascript.html",
    redirect: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html"
  },
  {
    name: "v-5ca47e7a30f53",
    path: "/readbook/technology/%E5%89%91%E6%8C%87offer.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/剑指offer.md").then(comp => {
        Vue.component("v-5ca47e7a30f53", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/剑指offer.html",
    redirect: "/readbook/technology/%E5%89%91%E6%8C%87offer.html"
  },
  {
    name: "v-18c8c64423e0b",
    path: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/图解http.md").then(comp => {
        Vue.component("v-18c8c64423e0b", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/图解http.html",
    redirect: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html"
  },
  {
    name: "v-b8939df210787",
    path: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/数据结构与算法分析C语言描述.md").then(comp => {
        Vue.component("v-b8939df210787", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/数据结构与算法分析C语言描述.html",
    redirect: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html"
  },
  {
    name: "v-19aaa6fa74d67",
    path: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/编码隐匿在计算机硬件背后的语言.md").then(comp => {
        Vue.component("v-19aaa6fa74d67", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    redirect: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html"
  },
  {
    name: "v-4348f7ce257f9",
    path: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/锋利的jquery.md").then(comp => {
        Vue.component("v-4348f7ce257f9", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/锋利的jquery.html",
    redirect: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html"
  },
  {
    name: "v-e550af8eadb65",
    path: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/高性能的javascript.md").then(comp => {
        Vue.component("v-e550af8eadb65", comp.default)
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