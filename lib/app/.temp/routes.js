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
    name: "v-fad78e98a818b",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-fad78e98a818b", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-93fd4a6f1182a",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-93fd4a6f1182a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cf3997863d5bd",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-cf3997863d5bd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38d103f9f6945",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-38d103f9f6945", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26c57c8df0d78",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-26c57c8df0d78", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-3e12b357dfcaf",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-3e12b357dfcaf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81a1c8d2a0c06",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-81a1c8d2a0c06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-142c765c02aa3",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-142c765c02aa3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-21bca51ac004f",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-21bca51ac004f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d503b5f81acb5",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-d503b5f81acb5", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-07e58ad69d4ca",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-07e58ad69d4ca", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-c624111e7fe12",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-c624111e7fe12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40a5acfc22cb",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-40a5acfc22cb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d0da0d9d2a83",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-8d0da0d9d2a83", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56a8c5b497edb",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-56a8c5b497edb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa1572b72ea81",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-aa1572b72ea81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb2ccbc7eaf39",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-fb2ccbc7eaf39", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b6c0270acdc1",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-0b6c0270acdc1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-147e4996d042d",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-147e4996d042d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-97e3f4d89691c",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-97e3f4d89691c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee74f39813408",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-ee74f39813408", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dd71e919bef7d",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-dd71e919bef7d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a0e5992b3da8",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-a0e5992b3da8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef1780341d9cb",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-ef1780341d9cb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-880cc28c85c5c",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-880cc28c85c5c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f9e8ab0f7e91",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-6f9e8ab0f7e91", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cf4e52ef7e83f",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-cf4e52ef7e83f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d6dc202da75c",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-5d6dc202da75c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d33e945dcb72",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-2d33e945dcb72", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fcb4ebe34385f",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-fcb4ebe34385f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7f663f6c27b",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-d7f663f6c27b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fc49a0c943d27",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-fc49a0c943d27", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae2e851f3e5fc",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-ae2e851f3e5fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8ad1298456642",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-8ad1298456642", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18c427d20668f",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-18c427d20668f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b62fbbe5864d9",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-b62fbbe5864d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6a8409071671",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-e6a8409071671", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0de6487a4686a",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-0de6487a4686a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad803f1674a5c",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-ad803f1674a5c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1553971d66133",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-1553971d66133", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ea6d76f93e54b",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-ea6d76f93e54b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-47d75cd6c037",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-47d75cd6c037", comp.default)
        next()
      })
    }
  },
  {
    name: "v-371f5cb04ca8e",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-371f5cb04ca8e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a9089d773961f",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-a9089d773961f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3123467ddcb56",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-3123467ddcb56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b8d56525642c",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-9b8d56525642c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c76d9ee4e749",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-7c76d9ee4e749", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc92c82afc26d",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-cc92c82afc26d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d81c0eb67a7cf",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-d81c0eb67a7cf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b5e5c216b0fc",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-3b5e5c216b0fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7b4deb5fede",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-f7b4deb5fede", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e77c899939feb",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-e77c899939feb", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]