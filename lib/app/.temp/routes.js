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
    name: "v-b70beb66af06",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-b70beb66af06", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-326db1b81252e",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-326db1b81252e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31e66f927491a",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-31e66f927491a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-20ccf5c383f7",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-20ccf5c383f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fbaaa3fd5c72",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-8fbaaa3fd5c72", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-c3bf7b1433393",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-c3bf7b1433393", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcbea2aa0f2fc",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-dcbea2aa0f2fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c529b752d180c",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-c529b752d180c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-482e7c479abd8",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-482e7c479abd8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03a5b7044d232",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-03a5b7044d232", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9449a0315e36b",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-9449a0315e36b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2b8cfb41d8768",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-2b8cfb41d8768", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e20e735ecb77",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-1e20e735ecb77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-69f4211653e46",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-69f4211653e46", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1b68eac4848e",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-a1b68eac4848e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3b5473fc9f4aa",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-3b5473fc9f4aa", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7bb28b41a56ed",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-7bb28b41a56ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01fcc484b2efc",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-01fcc484b2efc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-94318febd43a2",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-94318febd43a2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d2110c12212d",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-0d2110c12212d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ecf8311ac49cb",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-ecf8311ac49cb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d60a71806003",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-6d60a71806003", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3055e2a814584",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-3055e2a814584", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3734060d404f",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-b3734060d404f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-667d9c3dcba46",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-667d9c3dcba46", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6b3cd47235efe",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-6b3cd47235efe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d6f83ea59ff55",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-d6f83ea59ff55", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46c99c51d904d",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-46c99c51d904d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4553ed59f2084",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-4553ed59f2084", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6672522a0e0e",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-e6672522a0e0e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e477667b128a6",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-e477667b128a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f153ae50a5ef",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-8f153ae50a5ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78120a2520b5e",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-78120a2520b5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-defd622baf4b7",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-defd622baf4b7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b4caf271ea0b",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-0b4caf271ea0b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7380ab54a095",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-b7380ab54a095", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5324b2cff9a0c",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-5324b2cff9a0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a0d2914be132",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-2a0d2914be132", comp.default)
        next()
      })
    }
  },
  {
    name: "v-96b9f07bda3e9",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-96b9f07bda3e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d2442f4c444a1",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-d2442f4c444a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71fa0deb94272",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-71fa0deb94272", comp.default)
        next()
      })
    }
  },
  {
    name: "v-127c94eee666d",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-127c94eee666d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34605b3525017",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-34605b3525017", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5deeb0e48f7f",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-a5deeb0e48f7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a0aed491f53f",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-1a0aed491f53f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-07ecd3323997a",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-07ecd3323997a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68ae69070938b",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-68ae69070938b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4af713ad728cb",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-4af713ad728cb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-db01d1fb04a19",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-db01d1fb04a19", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]