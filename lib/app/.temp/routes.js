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
    name: "v-2f3eb63c1a056",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-2f3eb63c1a056", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-888de72412632",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-888de72412632", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b712714b16ee",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-b712714b16ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68a332fab0b8d",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-68a332fab0b8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-17241dd6dd433",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-17241dd6dd433", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-1925bf55bf2eb",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-1925bf55bf2eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0ff37e1e5225",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-0ff37e1e5225", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b266cc82e9101",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-b266cc82e9101", comp.default)
        next()
      })
    }
  },
  {
    name: "v-11f9232135dc3",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-11f9232135dc3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34af41a8536cd",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-34af41a8536cd", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-8955d313266ce",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-8955d313266ce", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-6a400f3ab4ec9",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-6a400f3ab4ec9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc56dbdefae56",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-cc56dbdefae56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f72e671a461d7",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-f72e671a461d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6d38c12d1404",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-f6d38c12d1404", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1274a58e89f0e",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-1274a58e89f0e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d1927f4803b5",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-1d1927f4803b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51d0547ae7fb",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-51d0547ae7fb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-32630ffe35c78",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-32630ffe35c78", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a980f872eac7",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-1a980f872eac7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7e789ddd94d6",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-f7e789ddd94d6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aac3fe693619b",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-aac3fe693619b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc88185323d8c",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-cc88185323d8c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a889393299d61",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-a889393299d61", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad19a29ef5f1b",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-ad19a29ef5f1b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9ac5c52613417",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-9ac5c52613417", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb3d59d4b3473",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-fb3d59d4b3473", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce9c0110d498f",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-ce9c0110d498f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57941a8df5ebf",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-57941a8df5ebf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e2261ff620ea",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-8e2261ff620ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e370a1685c614",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-e370a1685c614", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1b4335fa7816",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-e1b4335fa7816", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac7aa19aa330e",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-ac7aa19aa330e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-44f1850683df",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-44f1850683df", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57f76e845bfcd",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-57f76e845bfcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-032da7f0d0d4a",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-032da7f0d0d4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e0179570f2177",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-e0179570f2177", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b4a5f5ee0538",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-8b4a5f5ee0538", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74d9de933a491",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-74d9de933a491", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2aa8cf8736962",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-2aa8cf8736962", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83003fa232fca",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-83003fa232fca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae2125b7bab9c",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-ae2125b7bab9c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4dbde82dcf23",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-e4dbde82dcf23", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bfabf8cd89419",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-bfabf8cd89419", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4957d50e7697",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-b4957d50e7697", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7ba2df9a6ed3",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-f7ba2df9a6ed3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40035df8846a8",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-40035df8846a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d341aaf046a69",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-d341aaf046a69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38a4cb2ec0c7b",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-38a4cb2ec0c7b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dadfaee64232b",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-dadfaee64232b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0c0e0fdc96aab",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-0c0e0fdc96aab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b1fafd0ad3f1e",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-b1fafd0ad3f1e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-86a879bff9ff1",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-86a879bff9ff1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c1104e53ff5e8",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-c1104e53ff5e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ddcf64cc5b96d",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-ddcf64cc5b96d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d295c976318f4",
    path: "/readbook/technology/cssworld.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/cssworld.md").then(comp => {
        Vue.component("v-d295c976318f4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6a0db0018e47f",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-6a0db0018e47f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0f7d8bf30b5d8",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-0f7d8bf30b5d8", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]