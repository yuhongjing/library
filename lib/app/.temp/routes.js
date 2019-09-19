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
    name: "v-35d9b7606c3fa",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/README.md").then(comp => {
        Vue.component("v-35d9b7606c3fa", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-680cf80d6179f",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-680cf80d6179f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2fe793213a2e",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-a2fe793213a2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6cf357aecbebb",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/read.md").then(comp => {
        Vue.component("v-6cf357aecbebb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c990ade48dfd",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-7c990ade48dfd", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-e45ee056a31fa",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/git.md").then(comp => {
        Vue.component("v-e45ee056a31fa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9f78e4779cd59",
    path: "/blog/command/iterm2.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/iterm2.md").then(comp => {
        Vue.component("v-9f78e4779cd59", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c16f07112afe",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/read.md").then(comp => {
        Vue.component("v-7c16f07112afe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7878c8cf544c6",
    path: "/blog/command/vim.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vim.md").then(comp => {
        Vue.component("v-7878c8cf544c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f1cca3f106ab5",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-f1cca3f106ab5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d9a9dc475d6c",
    path: "/blog/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/read.md").then(comp => {
        Vue.component("v-6d9a9dc475d6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5a37bab4edc7",
    path: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/other/代码产出.md").then(comp => {
        Vue.component("v-a5a37bab4edc7", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/other/代码产出.html",
    redirect: "/blog/other/%E4%BB%A3%E7%A0%81%E4%BA%A7%E5%87%BA.html"
  },
  {
    name: "v-9495eac62c37b",
    path: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/git连接多仓库.md").then(comp => {
        Vue.component("v-9495eac62c37b", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/git连接多仓库.html",
    redirect: "/blog/tools/git%E8%BF%9E%E6%8E%A5%E5%A4%9A%E4%BB%93%E5%BA%93.html"
  },
  {
    name: "v-e08f4deaeba8e",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-e08f4deaeba8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c35ec2b11c29",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-7c35ec2b11c29", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-b81a85c7a530d",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-b81a85c7a530d", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-75a45074dea6a",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-75a45074dea6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ebee19a0bc9cf",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-ebee19a0bc9cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a31066577c346",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-a31066577c346", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e60180156177a",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-e60180156177a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f973b72a37def",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-f973b72a37def", comp.default)
        next()
      })
    }
  },
  {
    name: "v-52dad67e2a734",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-52dad67e2a734", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9026ebcab746b",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-9026ebcab746b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bb282944ed935",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-bb282944ed935", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0a4363336dbf",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-c0a4363336dbf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28a235c616e18",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-28a235c616e18", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d42cac077792",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-0d42cac077792", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fe9d633aa86d9",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-fe9d633aa86d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b68d8c7767fa2",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-b68d8c7767fa2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a22bf7e818c",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-7a22bf7e818c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b2dca680814d",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-7b2dca680814d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5186b192ed75",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-5186b192ed75", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78f751b7720c5",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-78f751b7720c5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a0017727fdef4",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-a0017727fdef4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-95e540a1a7337",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-95e540a1a7337", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b85b0e68c0fe",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-6b85b0e68c0fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24b0005d9887c",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-24b0005d9887c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c02c3bf2f3742",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-c02c3bf2f3742", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a65189f2adcd5",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-a65189f2adcd5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2f7f570b9e8a",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-a2f7f570b9e8a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3de2188095919",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-3de2188095919", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f12f1271b35f6",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-f12f1271b35f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2cb4897e2eaa",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-f2cb4897e2eaa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c7bc9d82f8538",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-c7bc9d82f8538", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f43001c2fc6b6",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-f43001c2fc6b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-42a10828af555",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-42a10828af555", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e55c4bdd7bdd9",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-e55c4bdd7bdd9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-944d7819570e1",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-944d7819570e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-011752a7955d",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-011752a7955d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f40d84f8c8685",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-f40d84f8c8685", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c68e6cb5b81f",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-9c68e6cb5b81f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6daef36a9fcf2",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-6daef36a9fcf2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2dc10ac1e9096",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-2dc10ac1e9096", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5c5a7515101d1",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-5c5a7515101d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fadcb438e147",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-8fadcb438e147", comp.default)
        next()
      })
    }
  },
  {
    name: "v-67e7ddaab1359",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-67e7ddaab1359", comp.default)
        next()
      })
    }
  },
  {
    name: "v-36e9042c42539",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-36e9042c42539", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0dfb5fd48ce32",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-0dfb5fd48ce32", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aee49198a3b72",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-aee49198a3b72", comp.default)
        next()
      })
    }
  },
  {
    name: "v-248954ef6f124",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-248954ef6f124", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5a50a80e2cbbb",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-5a50a80e2cbbb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2e4abc0fc08eb",
    path: "/readbook/literature/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/literature/read.md").then(comp => {
        Vue.component("v-2e4abc0fc08eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7e615de0fa79a",
    path: "/readbook/other/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/read.md").then(comp => {
        Vue.component("v-7e615de0fa79a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13134669694b3",
    path: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/你的灯亮着吗.md").then(comp => {
        Vue.component("v-13134669694b3", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/你的灯亮着吗.html",
    redirect: "/readbook/other/%E4%BD%A0%E7%9A%84%E7%81%AF%E4%BA%AE%E7%9D%80%E5%90%97.html"
  },
  {
    name: "v-c8754c9236cc3",
    path: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/other/微软的梦工厂.md").then(comp => {
        Vue.component("v-c8754c9236cc3", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/other/微软的梦工厂.html",
    redirect: "/readbook/other/%E5%BE%AE%E8%BD%AF%E7%9A%84%E6%A2%A6%E5%B7%A5%E5%8E%82.html"
  },
  {
    name: "v-24550cd223973",
    path: "/readbook/technology/CPrimerPlus.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/CPrimerPlus.md").then(comp => {
        Vue.component("v-24550cd223973", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b286e141c9",
    path: "/readbook/technology/css%E4%B8%96%E7%95%8C.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css世界.md").then(comp => {
        Vue.component("v-4b286e141c9", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css世界.html",
    redirect: "/readbook/technology/css%E4%B8%96%E7%95%8C.html"
  },
  {
    name: "v-f39ed2472903e",
    path: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/css禅意花园.md").then(comp => {
        Vue.component("v-f39ed2472903e", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/css禅意花园.html",
    redirect: "/readbook/technology/css%E7%A6%85%E6%84%8F%E8%8A%B1%E5%9B%AD.html"
  },
  {
    name: "v-fe4b479a589e8",
    path: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javasciprt函数式编程.md").then(comp => {
        Vue.component("v-fe4b479a589e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javasciprt函数式编程.html",
    redirect: "/readbook/technology/javasciprt%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.html"
  },
  {
    name: "v-2698f9ed2be4e",
    path: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript语言精粹.md").then(comp => {
        Vue.component("v-2698f9ed2be4e", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript语言精粹.html",
    redirect: "/readbook/technology/javascript%E8%AF%AD%E8%A8%80%E7%B2%BE%E7%B2%B9.html"
  },
  {
    name: "v-aac3c70452eba",
    path: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/javascript高级程序设计.md").then(comp => {
        Vue.component("v-aac3c70452eba", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/javascript高级程序设计.html",
    redirect: "/readbook/technology/javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.html"
  },
  {
    name: "v-b4a7201ecc1d9",
    path: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/js权威指南.md").then(comp => {
        Vue.component("v-b4a7201ecc1d9", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/js权威指南.html",
    redirect: "/readbook/technology/js%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.html"
  },
  {
    name: "v-01cbede21fd59",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-01cbede21fd59", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b6f89750de699",
    path: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/你不知道的javascript.md").then(comp => {
        Vue.component("v-b6f89750de699", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/你不知道的javascript.html",
    redirect: "/readbook/technology/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84javascript.html"
  },
  {
    name: "v-fb4c9e9ba6809",
    path: "/readbook/technology/%E5%89%91%E6%8C%87offer.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/剑指offer.md").then(comp => {
        Vue.component("v-fb4c9e9ba6809", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/剑指offer.html",
    redirect: "/readbook/technology/%E5%89%91%E6%8C%87offer.html"
  },
  {
    name: "v-dc637ead6b012",
    path: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/图解http.md").then(comp => {
        Vue.component("v-dc637ead6b012", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/图解http.html",
    redirect: "/readbook/technology/%E5%9B%BE%E8%A7%A3http.html"
  },
  {
    name: "v-c88d7cc7a2c1b",
    path: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/数据结构与算法分析C语言描述.md").then(comp => {
        Vue.component("v-c88d7cc7a2c1b", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/数据结构与算法分析C语言描述.html",
    redirect: "/readbook/technology/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E5%88%86%E6%9E%90C%E8%AF%AD%E8%A8%80%E6%8F%8F%E8%BF%B0.html"
  },
  {
    name: "v-102fa0c0a49b9",
    path: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/编码隐匿在计算机硬件背后的语言.md").then(comp => {
        Vue.component("v-102fa0c0a49b9", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/编码隐匿在计算机硬件背后的语言.html",
    redirect: "/readbook/technology/%E7%BC%96%E7%A0%81%E9%9A%90%E5%8C%BF%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A1%AC%E4%BB%B6%E8%83%8C%E5%90%8E%E7%9A%84%E8%AF%AD%E8%A8%80.html"
  },
  {
    name: "v-7bcc03643c7d7",
    path: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/锋利的jquery.md").then(comp => {
        Vue.component("v-7bcc03643c7d7", comp.default)
        next()
      })
    }
  },
  {
    path: "/readbook/technology/锋利的jquery.html",
    redirect: "/readbook/technology/%E9%94%8B%E5%88%A9%E7%9A%84jquery.html"
  },
  {
    name: "v-82e7ddf79398d",
    path: "/readbook/technology/%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/blog/docs/readbook/technology/高性能的javascript.md").then(comp => {
        Vue.component("v-82e7ddf79398d", comp.default)
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