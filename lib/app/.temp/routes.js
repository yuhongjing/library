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
    name: "v-38fd8ecffec4",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-38fd8ecffec4", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-0a6e99e994136",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-0a6e99e994136", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1aa7678f49069",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-1aa7678f49069", comp.default)
        next()
      })
    }
  },
  {
    name: "v-01ebcfe15e648",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-01ebcfe15e648", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f198d7125108",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-2f198d7125108", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-1532ac2a1e027",
    path: "/blog/command/git.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/git.md").then(comp => {
        Vue.component("v-1532ac2a1e027", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6691cafc973b9",
    path: "/blog/command/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/read.md").then(comp => {
        Vue.component("v-6691cafc973b9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e1bc20654cd6e",
    path: "/blog/command/vscode.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/command/vscode.md").then(comp => {
        Vue.component("v-e1bc20654cd6e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c487f5724c1ee",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-c487f5724c1ee", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a78cd9651ccaf",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-a78cd9651ccaf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9cec326965a22",
    path: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/win10激活.md").then(comp => {
        Vue.component("v-9cec326965a22", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/win10激活.html",
    redirect: "/blog/tools/win10%E6%BF%80%E6%B4%BB.html"
  },
  {
    name: "v-da270cc533e06",
    path: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/移动端调试.md").then(comp => {
        Vue.component("v-da270cc533e06", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/tools/移动端调试.html",
    redirect: "/blog/tools/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E8%B0%83%E8%AF%95.html"
  },
  {
    name: "v-b375472e3e0fe",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-b375472e3e0fe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4441905401568",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-4441905401568", comp.default)
        next()
      })
    }
  },
  {
    name: "v-127dd8fc3dda3",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-127dd8fc3dda3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a92638448f5d",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-0a92638448f5d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cb18f28a6d67c",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-cb18f28a6d67c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-44b910ecc2cb4",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-44b910ecc2cb4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d38e1f3d917b",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-6d38e1f3d917b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-435ebbba24b1",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-435ebbba24b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f3beac414a70e",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-f3beac414a70e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-84860a3304ce3",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-84860a3304ce3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7224ad128c68",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-f7224ad128c68", comp.default)
        next()
      })
    }
  },
  {
    name: "v-adb8637644b06",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-adb8637644b06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ae7d6df34636d",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-ae7d6df34636d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ac5be554500b8",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-ac5be554500b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-46f317188b805",
    path: "/code/webpack/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/webpack/read.md").then(comp => {
        Vue.component("v-46f317188b805", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7c583ecca5367",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-7c583ecca5367", comp.default)
        next()
      })
    }
  },
  {
    name: "v-19217049f64d1",
    path: "/knowledge/backend/php.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/php.md").then(comp => {
        Vue.component("v-19217049f64d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-56593081117bc",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-56593081117bc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cccdc72135135",
    path: "/knowledge/config/eslint.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/eslint.md").then(comp => {
        Vue.component("v-cccdc72135135", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a17fd8b5993e2",
    path: "/knowledge/config/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/config/read.md").then(comp => {
        Vue.component("v-a17fd8b5993e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0314f621e66b1",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-0314f621e66b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a7a4daeb6dad",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-8a7a4daeb6dad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-83c9e5e916423",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-83c9e5e916423", comp.default)
        next()
      })
    }
  },
  {
    name: "v-957f8aceb8509",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-957f8aceb8509", comp.default)
        next()
      })
    }
  },
  {
    name: "v-964df12e18053",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-964df12e18053", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aa8f854f83366",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-aa8f854f83366", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8942c0e76dd78",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-8942c0e76dd78", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eefeefe47671a",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-eefeefe47671a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4acec4d20de01",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-4acec4d20de01", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9afbec7892103",
    path: "/knowledge/web/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/react.md").then(comp => {
        Vue.component("v-9afbec7892103", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bc3988ae6e689",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-bc3988ae6e689", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66d22c7a8daef",
    path: "/knowledge/web/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/vue.md").then(comp => {
        Vue.component("v-66d22c7a8daef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3747d0e0d488f",
    path: "/knowledge/web/webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/webpack.md").then(comp => {
        Vue.component("v-3747d0e0d488f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72451d3e7638e",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-72451d3e7638e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54635819b3818",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-54635819b3818", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f4a4be5d19a1",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-8f4a4be5d19a1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b90daf068d798",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-b90daf068d798", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72f24672b4796",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-72f24672b4796", comp.default)
        next()
      })
    }
  },
  {
    name: "v-650898d8a440f",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-650898d8a440f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c60ecae708274",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-c60ecae708274", comp.default)
        next()
      })
    }
  },
  {
    name: "v-201e81810041",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-201e81810041", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fd9e6e30d900b",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-fd9e6e30d900b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7d08a022c089",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-d7d08a022c089", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8541574ea72b5",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-8541574ea72b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63ade2db95a47",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-63ade2db95a47", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2adadbaeae4a",
    path: "/readbook/technology/cssworld.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/cssworld.md").then(comp => {
        Vue.component("v-2adadbaeae4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50e188dbe89b1",
    path: "/readbook/technology/http.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/http.md").then(comp => {
        Vue.component("v-50e188dbe89b1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a6056d0272e81",
    path: "/readbook/technology/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/readbook/technology/read.md").then(comp => {
        Vue.component("v-a6056d0272e81", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]