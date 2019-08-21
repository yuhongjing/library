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
    name: "v-f5f6ab0773587",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-f5f6ab0773587", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-c0945771f7139",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-c0945771f7139", comp.default)
        next()
      })
    }
  },
  {
    name: "v-38e3741b0325d",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-38e3741b0325d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6918fd22df44f",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-6918fd22df44f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed13b979d0314",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-ed13b979d0314", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-f57412e2fe29",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-f57412e2fe29", comp.default)
        next()
      })
    }
  },
  {
    name: "v-58d4cc8166d62",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-58d4cc8166d62", comp.default)
        next()
      })
    }
  },
  {
    name: "v-438987dc521ef",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-438987dc521ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f276aa8f4589",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-4f276aa8f4589", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a4712951bf84c",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-a4712951bf84c", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-3f6ce3a875aba",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-3f6ce3a875aba", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-dee8928bea2be",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-dee8928bea2be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f681262e0a4ff",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-f681262e0a4ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b459d46587bd",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-8b459d46587bd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6c8286228c071",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-6c8286228c071", comp.default)
        next()
      })
    }
  },
  {
    name: "v-739f6128b0136",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-739f6128b0136", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b2fa88864802",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-5b2fa88864802", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b625ac7a50e5",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-4b625ac7a50e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-618ee8e386253",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-618ee8e386253", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9b60bd6318345",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-9b60bd6318345", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3688c398cdd69",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-3688c398cdd69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-696501891a531",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-696501891a531", comp.default)
        next()
      })
    }
  },
  {
    name: "v-77b43050b3bb5",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-77b43050b3bb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c598a7b693323",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-c598a7b693323", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d62caec800c01",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-d62caec800c01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1d1e881d55111",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-1d1e881d55111", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cbb2680100569",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-cbb2680100569", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1671bb81ba61f",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-1671bb81ba61f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9103c89980ebf",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-9103c89980ebf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-62036dcae2ba9",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-62036dcae2ba9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-62892b2313efd",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-62892b2313efd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3504246b1cc5b",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-3504246b1cc5b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b0a755ce54e29",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-b0a755ce54e29", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a3439c4dc15e2",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-a3439c4dc15e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f35c7bc171773",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-f35c7bc171773", comp.default)
        next()
      })
    }
  },
  {
    name: "v-85633baaf9e82",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-85633baaf9e82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d0fc6f6617b4",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-0d0fc6f6617b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b8095260cbd61",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-b8095260cbd61", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a2317c2e6f642",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-a2317c2e6f642", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac9e0b6d4c502",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-ac9e0b6d4c502", comp.default)
        next()
      })
    }
  },
  {
    name: "v-515a24bfeaa9",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-515a24bfeaa9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4db60123e626",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-f4db60123e626", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5ae94bfed0bb5",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-5ae94bfed0bb5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-411ac1de517a7",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-411ac1de517a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8bc74d206995d",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-8bc74d206995d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6c525b4d1f65f",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-6c525b4d1f65f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c1c39f712b89",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-1c1c39f712b89", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bcaf1599c29e",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-bcaf1599c29e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-59a3cbf2216fd",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-59a3cbf2216fd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-28af139b477ec",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-28af139b477ec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d8edf353c2276",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-d8edf353c2276", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ffc3d9f7d4a8",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-3ffc3d9f7d4a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-93c99ee9b0474",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-93c99ee9b0474", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f25124621ce1",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-8f25124621ce1", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]