import Vue from 'vue'
Vue.component("Bit", () => import("/Users/yuhongjing/www/library/docs/.vuepress/components/Bit.vue"))
Vue.component("Foo-Bar", () => import("/Users/yuhongjing/www/library/docs/.vuepress/components/Foo/Bar.vue"))
Vue.component("OtherComponent", () => import("/Users/yuhongjing/www/library/docs/.vuepress/components/OtherComponent.vue"))
Vue.component("demo-1", () => import("/Users/yuhongjing/www/library/docs/.vuepress/components/demo-1.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-bf6128ff179ea",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-bf6128ff179ea", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f941b3d79125e",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-f941b3d79125e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e016d7beb526",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-7e016d7beb526", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bdd67d875aa95",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-bdd67d875aa95", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b854990dfdd97",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-b854990dfdd97", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-35f46aafd3ba7",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-35f46aafd3ba7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81df00328f091",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-81df00328f091", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0016fea3d37cf",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-0016fea3d37cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d777a752f0839",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/other/read.md").then(comp => {
        Vue.component("v-d777a752f0839", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52bdff05229c",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-52bdff05229c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1391372795d92",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-1391372795d92", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-1282779359dc8",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-1282779359dc8", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-32bbed4fc55a3",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-32bbed4fc55a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97f8fed2ac46e",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-97f8fed2ac46e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57868ddb2c044",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-57868ddb2c044", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5aebc23a6741d",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-5aebc23a6741d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e90255acae1ce",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-e90255acae1ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b1bef18e13b5",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-9b1bef18e13b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f05c207885b76",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-f05c207885b76", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d1dcbec77c6d",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-5d1dcbec77c6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-984f865ab1d65",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-984f865ab1d65", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e0468ba4fa59",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-1e0468ba4fa59", comp.default)
        next()
      })
    }
  },
  {
    name: "v-709888a5fc3e7",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-709888a5fc3e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b47486a1124a2",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-b47486a1124a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69c78043cf42f",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-69c78043cf42f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2a745f911f37",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-b2a745f911f37", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eba75cd0af21e",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-eba75cd0af21e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-808ed5b884674",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-808ed5b884674", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4200d2accdc96",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-4200d2accdc96", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1a6a5ef27f19",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-d1a6a5ef27f19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8745f0133db7e",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-8745f0133db7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f81525772182",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-f81525772182", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4232c05ddc2bd",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-4232c05ddc2bd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36ee3424784",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-36ee3424784", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a00ea7d15aebe",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-a00ea7d15aebe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b8851f979f69",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-6b8851f979f69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0fa837832d2fa",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-0fa837832d2fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee3e11ab3aba5",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-ee3e11ab3aba5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5284e6e5ffab7",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-5284e6e5ffab7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-02d68abe8edf3",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-02d68abe8edf3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1618812e1315",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-1618812e1315", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6e0737746fe64",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-6e0737746fe64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c88006dc0cb26",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-c88006dc0cb26", comp.default)
        next()
      })
    }
  },
  {
    name: "v-731d61b7ad7eb",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-731d61b7ad7eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06a4f1a5b44f8",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-06a4f1a5b44f8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-be3d7d95b5d99",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-be3d7d95b5d99", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d03a35b705c25",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-d03a35b705c25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-afe616e404c81",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-afe616e404c81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d51c7787994",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-1d51c7787994", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4f083556f75f",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-d4f083556f75f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96ad1398ca093",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-96ad1398ca093", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83d0ae8021647",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-83d0ae8021647", comp.default)
        next()
      })
    }
  },
  {
    name: "v-73f814f9992f",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-73f814f9992f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6beb5b466db16",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-6beb5b466db16", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ccae60a32864e",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-ccae60a32864e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-baa237078b673",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-baa237078b673", comp.default)
        next()
      })
    }
  },
  {
    name: "v-305b4c4869b99",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-305b4c4869b99", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8afeef8fe5d06",
    path: "/readbook/technology/cssworld.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/cssworld.md").then(comp => {
        Vue.component("v-8afeef8fe5d06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f3ff88b2f8ddc",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-f3ff88b2f8ddc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-552477b4dbeb9",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-552477b4dbeb9", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]