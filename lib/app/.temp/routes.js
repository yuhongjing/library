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
    name: "v-090d0f856c1e1",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/README.md").then(comp => {
        Vue.component("v-090d0f856c1e1", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-036fd6063c7a2",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-036fd6063c7a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69f80321e7e8",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-69f80321e7e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe847126ddec8",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/read.md").then(comp => {
        Vue.component("v-fe847126ddec8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7e3db7fc04d3",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-d7e3db7fc04d3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-df6cfc1ec7ed7",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/git.md").then(comp => {
        Vue.component("v-df6cfc1ec7ed7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8fb35ea0275c",
    path: "/blog/command/iterm2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/iterm2.md").then(comp => {
        Vue.component("v-d8fb35ea0275c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2258144bfdb9c",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/read.md").then(comp => {
        Vue.component("v-2258144bfdb9c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3c2eb60daef47",
    path: "/blog/command/vim.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vim.md").then(comp => {
        Vue.component("v-3c2eb60daef47", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8bb74c5c179c",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-b8bb74c5c179c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42f4036a18cb7",
    path: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/Mac必备应用.md").then(comp => {
        Vue.component("v-42f4036a18cb7", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/Mac必备应用.html",
    redirect: "/blog/other/Mac%E5%BF%85%E5%A4%87%E5%BA%94%E7%94%A8.html"
  },
  {
    name: "v-2d45b78b2b13c",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/read.md").then(comp => {
        Vue.component("v-2d45b78b2b13c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d140bd349c926",
    path: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/代码产出.md").then(comp => {
        Vue.component("v-d140bd349c926", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/代码产出.html",
    redirect: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html"
  },
  {
    name: "v-aea00c243a6a3",
    path: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/git连接多仓库.md").then(comp => {
        Vue.component("v-aea00c243a6a3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/git连接多仓库.html",
    redirect: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html"
  },
  {
    name: "v-dd978206fa254",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-dd978206fa254", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49daf455692e6",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-49daf455692e6", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-88e610c3c0a0d",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-88e610c3c0a0d", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-c51aff0c15dd7",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-c51aff0c15dd7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e72602cabb28e",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-e72602cabb28e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3fbad44a7a32",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-c3fbad44a7a32", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4ff79d0730a3",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-f4ff79d0730a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aee02b4aa5cd5",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-aee02b4aa5cd5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3e50529edb5a",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-d3e50529edb5a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7060106ff1953",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-7060106ff1953", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ad8d7b384411",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-0ad8d7b384411", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a780c3d027e5",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-7a780c3d027e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8f3d10feb1a8",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-f8f3d10feb1a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ec5062101fcd",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-4ec5062101fcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-430a7bdfe6dd9",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-430a7bdfe6dd9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8512fa14f5b2",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-c8512fa14f5b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1dafcd3360691",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-1dafcd3360691", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18092ecfe8507",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-18092ecfe8507", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d967f0b773e1c",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-d967f0b773e1c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ecf52667b4dc",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-0ecf52667b4dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc8e20a8d3fb5",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-bc8e20a8d3fb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3dcd84d99e465",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-3dcd84d99e465", comp.default)
        next()
      })
    }
  },
  {
    name: "v-899d81cb7561c",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-899d81cb7561c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7710a954f774d",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-7710a954f774d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c4bb931cf5e9",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-4c4bb931cf5e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4330223ee4dc",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-e4330223ee4dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6992ddebabbce",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-6992ddebabbce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e7169f133c38",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-7e7169f133c38", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9429bb0378cd2",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-9429bb0378cd2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04a822235fa71",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-04a822235fa71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-35a87e87471c1",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-35a87e87471c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-882b4e2e17559",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-882b4e2e17559", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e625f8b3df7e",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-e625f8b3df7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee7a051e6b073",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-ee7a051e6b073", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a83d2d38fd18d",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-a83d2d38fd18d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f0bb6b64dc3e2",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-f0bb6b64dc3e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-62e67a09a795",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-62e67a09a795", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06b7635365eb1",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-06b7635365eb1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac2959d19b087",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-ac2959d19b087", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b268a9f4427af",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-b268a9f4427af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4c366c785afde",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-4c366c785afde", comp.default)
        next()
      })
    }
  },
  {
    name: "v-598a017d72f34",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-598a017d72f34", comp.default)
        next()
      })
    }
  },
  {
    name: "v-024bef64808f6",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-024bef64808f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-605222bc75809",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-605222bc75809", comp.default)
        next()
      })
    }
  },
  {
    name: "v-216b786571ca5",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-216b786571ca5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82fd456c45444",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-82fd456c45444", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6265d9fecf349",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-6265d9fecf349", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85b8b748850f1",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-85b8b748850f1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7f220e6ebb87",
    path: "/readbook/literature/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/read.md").then(comp => {
        Vue.component("v-b7f220e6ebb87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-685e4e6a1bbf1",
    path: "/readbook/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/read.md").then(comp => {
        Vue.component("v-685e4e6a1bbf1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3aa4370c743dd",
    path: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/你的灯亮着吗.md").then(comp => {
        Vue.component("v-3aa4370c743dd", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/你的灯亮着吗.html",
    redirect: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html"
  },
  {
    name: "v-e0e0fa22576c4",
    path: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/微软的梦工厂.md").then(comp => {
        Vue.component("v-e0e0fa22576c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/微软的梦工厂.html",
    redirect: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html"
  },
  {
    name: "v-9a12d4248ddc7",
    path: "/readbook/technology/CPrimerPlus.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/CPrimerPlus.md").then(comp => {
        Vue.component("v-9a12d4248ddc7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a7859be1cc3a",
    path: "/readbook/technology/css%E4%B8%96%E7%95%8C.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css世界.md").then(comp => {
        Vue.component("v-1a7859be1cc3a", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css世界.html",
    redirect: "/readbook/technology/css%E4%B8%96%E7%95%8C.html"
  },
  {
    name: "v-52689660afc28",
    path: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css禅意花园.md").then(comp => {
        Vue.component("v-52689660afc28", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css禅意花园.html",
    redirect: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html"
  },
  {
    name: "v-84c2ca389f835",
    path: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javasciprt函数式编程.md").then(comp => {
        Vue.component("v-84c2ca389f835", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javasciprt函数式编程.html",
    redirect: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html"
  },
  {
    name: "v-53667bc0d6912",
    path: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript语言精粹.md").then(comp => {
        Vue.component("v-53667bc0d6912", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript语言精粹.html",
    redirect: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html"
  },
  {
    name: "v-d4f85bff97412",
    path: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript高级程序设计.md").then(comp => {
        Vue.component("v-d4f85bff97412", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript高级程序设计.html",
    redirect: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"
  },
  {
    name: "v-e7591cc74d078",
    path: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/js权威指南.md").then(comp => {
        Vue.component("v-e7591cc74d078", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/js权威指南.html",
    redirect: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html"
  },
  {
    name: "v-d48571814aafb",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-d48571814aafb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a4ac0882662a",
    path: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/你不知道的javascript.md").then(comp => {
        Vue.component("v-2a4ac0882662a", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/你不知道的javascript.html",
    redirect: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html"
  },
  {
    name: "v-67def415fea83",
    path: "/readbook/technology/%E5%89%91%E6%8C%87offer.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/剑指offer.md").then(comp => {
        Vue.component("v-67def415fea83", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/剑指offer.html",
    redirect: "/readbook/technology/%E5%89%91%E6%8C%87offer.html"
  },
  {
    name: "v-9eb1a0bbff8d9",
    path: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/图解http.md").then(comp => {
        Vue.component("v-9eb1a0bbff8d9", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/图解http.html",
    redirect: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html"
  },
  {
    name: "v-f98fe57bcd521",
    path: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/数据结构与算法分析C语言描述.md").then(comp => {
        Vue.component("v-f98fe57bcd521", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/数据结构与算法分析C语言描述.html",
    redirect: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html"
  },
  {
    name: "v-57a91df88c9fc",
    path: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/编码隐匿在计算机硬件背后的语言.md").then(comp => {
        Vue.component("v-57a91df88c9fc", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    redirect: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html"
  },
  {
    name: "v-fa2cb12822cf4",
    path: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/锋利的jquery.md").then(comp => {
        Vue.component("v-fa2cb12822cf4", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/锋利的jquery.html",
    redirect: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html"
  },
  {
    name: "v-29b1270ee7a2e",
    path: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/高性能的javascript.md").then(comp => {
        Vue.component("v-29b1270ee7a2e", comp.default)
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