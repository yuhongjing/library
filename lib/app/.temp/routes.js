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
    name: "v-b93764e82effb",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/README.md").then(comp => {
        Vue.component("v-b93764e82effb", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-14dd6f8ff3b88",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-14dd6f8ff3b88", comp.default)
        next()
      })
    }
  },
  {
    name: "v-656ea5af399eb",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-656ea5af399eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3da025a846df2",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/read.md").then(comp => {
        Vue.component("v-3da025a846df2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a989915f4783e",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-a989915f4783e", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-c65160ba969fb",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/git.md").then(comp => {
        Vue.component("v-c65160ba969fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d28f87e275e3",
    path: "/blog/command/iterm2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/iterm2.md").then(comp => {
        Vue.component("v-d28f87e275e3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-973cdf1889f4f",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/read.md").then(comp => {
        Vue.component("v-973cdf1889f4f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb66fb6b865fe",
    path: "/blog/command/vim.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vim.md").then(comp => {
        Vue.component("v-fb66fb6b865fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-684ca003b099f",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-684ca003b099f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bb3e685a97f6",
    path: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/Mac必备应用.md").then(comp => {
        Vue.component("v-2bb3e685a97f6", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/Mac必备应用.html",
    redirect: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html"
  },
  {
    name: "v-c88f4494366ae",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/read.md").then(comp => {
        Vue.component("v-c88f4494366ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9beece07ee2f8",
    path: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/代码产出.md").then(comp => {
        Vue.component("v-9beece07ee2f8", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/代码产出.html",
    redirect: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html"
  },
  {
    name: "v-75a3134bc1b0c",
    path: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/git连接多仓库.md").then(comp => {
        Vue.component("v-75a3134bc1b0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/git连接多仓库.html",
    redirect: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html"
  },
  {
    name: "v-ff85bf54817bf",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-ff85bf54817bf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85d7d5fa3c0c3",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-85d7d5fa3c0c3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-0a324b0b3cd4e",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-0a324b0b3cd4e", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-7e7bf010604c2",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-7e7bf010604c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5fff1478abbd",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-d5fff1478abbd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ecddf898c3863",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-ecddf898c3863", comp.default)
        next()
      })
    }
  },
  {
    name: "v-da263d87703b3",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-da263d87703b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-868fbf2e1b521",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-868fbf2e1b521", comp.default)
        next()
      })
    }
  },
  {
    name: "v-60433e932e9ec",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-60433e932e9ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a09b08622b105",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-a09b08622b105", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e53c192a898ab",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-e53c192a898ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aed3610df6e82",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-aed3610df6e82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02b21acca5e7c",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-02b21acca5e7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9add07745d992",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-9add07745d992", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eb81e7265b9ff",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-eb81e7265b9ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a982ba7520a8b",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-a982ba7520a8b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8dbc9c6879a52",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-8dbc9c6879a52", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e62def801653",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-6e62def801653", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ae0f57b9c442",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-1ae0f57b9c442", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69f42b752a35b",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-69f42b752a35b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04deeace3a653",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-04deeace3a653", comp.default)
        next()
      })
    }
  },
  {
    name: "v-124f66f9f7edf",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-124f66f9f7edf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c2c46c5293ecb",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-c2c46c5293ecb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6a08888c0d8e",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-e6a08888c0d8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26437a03856ca",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-26437a03856ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aeace92a4a278",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-aeace92a4a278", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5f84ac3cd1f2",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-a5f84ac3cd1f2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c5e0e6228e6e9",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-c5e0e6228e6e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-481f5952e805b",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-481f5952e805b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df9cdac1a49c1",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-df9cdac1a49c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-167293054e4a5",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-167293054e4a5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-000e181b9302e",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-000e181b9302e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d23fb434e6933",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-d23fb434e6933", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75aab93cbe348",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-75aab93cbe348", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f390d120d22dc",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-f390d120d22dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2fc4959b08a",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-b2fc4959b08a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dc87efc27936a",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-dc87efc27936a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8665fcb3ac1c5",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-8665fcb3ac1c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3b7c988f67f4",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-b3b7c988f67f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e382b77258db3",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-e382b77258db3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f1ec622ee2d7",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-3f1ec622ee2d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f069fece26e59",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-f069fece26e59", comp.default)
        next()
      })
    }
  },
  {
    name: "v-763ecd8ab63e1",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-763ecd8ab63e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69b3c756dccdf",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-69b3c756dccdf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d6f0204ca5064",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-d6f0204ca5064", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a164c0475046",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-6a164c0475046", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52dab683cf789",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-52dab683cf789", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc4fca440778d",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-cc4fca440778d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab9f6ed7988ad",
    path: "/readbook/literature/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/read.md").then(comp => {
        Vue.component("v-ab9f6ed7988ad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f44271ac92dd",
    path: "/readbook/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/read.md").then(comp => {
        Vue.component("v-6f44271ac92dd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-84077a8545b36",
    path: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/你的灯亮着吗.md").then(comp => {
        Vue.component("v-84077a8545b36", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/你的灯亮着吗.html",
    redirect: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html"
  },
  {
    name: "v-60962f512e73c",
    path: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/微软的梦工厂.md").then(comp => {
        Vue.component("v-60962f512e73c", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/微软的梦工厂.html",
    redirect: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html"
  },
  {
    name: "v-d490dd8d03fd4",
    path: "/readbook/technology/CPrimerPlus.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/CPrimerPlus.md").then(comp => {
        Vue.component("v-d490dd8d03fd4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3cf1a1783555",
    path: "/readbook/technology/css%E4%B8%96%E7%95%8C.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css世界.md").then(comp => {
        Vue.component("v-c3cf1a1783555", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css世界.html",
    redirect: "/readbook/technology/css%E4%B8%96%E7%95%8C.html"
  },
  {
    name: "v-bce645680079",
    path: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css禅意花园.md").then(comp => {
        Vue.component("v-bce645680079", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css禅意花园.html",
    redirect: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html"
  },
  {
    name: "v-6b3e7b1cf7e25",
    path: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javasciprt函数式编程.md").then(comp => {
        Vue.component("v-6b3e7b1cf7e25", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javasciprt函数式编程.html",
    redirect: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html"
  },
  {
    name: "v-a18551dac1024",
    path: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript语言精粹.md").then(comp => {
        Vue.component("v-a18551dac1024", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript语言精粹.html",
    redirect: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html"
  },
  {
    name: "v-f71a157a9722a",
    path: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript高级程序设计.md").then(comp => {
        Vue.component("v-f71a157a9722a", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript高级程序设计.html",
    redirect: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"
  },
  {
    name: "v-627ce21bb141a",
    path: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/js权威指南.md").then(comp => {
        Vue.component("v-627ce21bb141a", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/js权威指南.html",
    redirect: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html"
  },
  {
    name: "v-7182c00e1dfc5",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-7182c00e1dfc5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1f9fb21f7678f",
    path: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/你不知道的javascript.md").then(comp => {
        Vue.component("v-1f9fb21f7678f", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/你不知道的javascript.html",
    redirect: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html"
  },
  {
    name: "v-d7ba761a92db4",
    path: "/readbook/technology/%E5%89%91%E6%8C%87offer.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/剑指offer.md").then(comp => {
        Vue.component("v-d7ba761a92db4", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/剑指offer.html",
    redirect: "/readbook/technology/%E5%89%91%E6%8C%87offer.html"
  },
  {
    name: "v-ce150ff02e2c4",
    path: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/图解http.md").then(comp => {
        Vue.component("v-ce150ff02e2c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/图解http.html",
    redirect: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html"
  },
  {
    name: "v-dac74d3dc0fe2",
    path: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/数据结构与算法分析C语言描述.md").then(comp => {
        Vue.component("v-dac74d3dc0fe2", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/数据结构与算法分析C语言描述.html",
    redirect: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html"
  },
  {
    name: "v-7d6a06e4cbdab",
    path: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/编码隐匿在计算机硬件背后的语言.md").then(comp => {
        Vue.component("v-7d6a06e4cbdab", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    redirect: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html"
  },
  {
    name: "v-adfacff47a0e1",
    path: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/锋利的jquery.md").then(comp => {
        Vue.component("v-adfacff47a0e1", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/锋利的jquery.html",
    redirect: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html"
  },
  {
    name: "v-d79a6abdf816a",
    path: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/高性能的javascript.md").then(comp => {
        Vue.component("v-d79a6abdf816a", comp.default)
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