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
    name: "v-89231d47854c8",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-89231d47854c8", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-04516dc303e56",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-04516dc303e56", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ec7245cfc6e2",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-4ec7245cfc6e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f43f0138d6e3f",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-f43f0138d6e3f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a9b6fa09b728b",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-a9b6fa09b728b", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-73210e8ace43e",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-73210e8ace43e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-16b854a0a39c2",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-16b854a0a39c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f88f55605992",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-f88f55605992", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7cd9e2b7ea184",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-7cd9e2b7ea184", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d87182e87bca",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-5d87182e87bca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e2e5d9f9cb73c",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-e2e5d9f9cb73c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1b1beef17e1d",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-d1b1beef17e1d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4387d0a6ad295",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-4387d0a6ad295", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6fdf3e0822eb9",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-6fdf3e0822eb9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89584bc52d71",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-89584bc52d71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-727061989bd05",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-727061989bd05", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75d3d12b10399",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-75d3d12b10399", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad5c6166b265f",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-ad5c6166b265f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-31bbb006e9686",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-31bbb006e9686", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5c5b176f4f76f",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-5c5b176f4f76f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8cde0fa83ec89",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-8cde0fa83ec89", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1e65c7df48f6c",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-1e65c7df48f6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-420eec1bfd42d",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-420eec1bfd42d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26aa43e84271a",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-26aa43e84271a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-684520fc517d2",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-684520fc517d2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-335f85dc8ed2b",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-335f85dc8ed2b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5bd31120df373",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-5bd31120df373", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0dabc24b2fbe3",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-0dabc24b2fbe3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d64191861968",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-3d64191861968", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68ce41ee7f59f",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-68ce41ee7f59f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-00199bd6e6441",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-00199bd6e6441", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2886e6de7481b",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-2886e6de7481b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a58216fc3b801",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-a58216fc3b801", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88a01e8e42c6c",
    path: "/notebook/http/https.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/https.md").then(comp => {
        Vue.component("v-88a01e8e42c6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-aaef279001d82",
    path: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http协议.md").then(comp => {
        Vue.component("v-aaef279001d82", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http协议.html",
    redirect: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-01ce2c3a6bfc6",
    path: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http报文信息.md").then(comp => {
        Vue.component("v-01ce2c3a6bfc6", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http报文信息.html",
    redirect: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html"
  },
  {
    name: "v-9f2e0b6b6a14a",
    path: "/notebook/http/http%E6%94%BB%E5%87%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http攻击.md").then(comp => {
        Vue.component("v-9f2e0b6b6a14a", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http攻击.html",
    redirect: "/notebook/http/http%E6%94%BB%E5%87%BB.html"
  },
  {
    name: "v-3497ed4c7f3bd",
    path: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http状态码.md").then(comp => {
        Vue.component("v-3497ed4c7f3bd", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http状态码.html",
    redirect: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html"
  },
  {
    name: "v-48f3499b04f0c",
    path: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http追加协议.md").then(comp => {
        Vue.component("v-48f3499b04f0c", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http追加协议.html",
    redirect: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-bc4279467ff52",
    path: "/notebook/http/http%E9%A6%96%E9%83%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http首部.md").then(comp => {
        Vue.component("v-bc4279467ff52", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http首部.html",
    redirect: "/notebook/http/http%E9%A6%96%E9%83%A8.html"
  },
  {
    name: "v-f9d18ac9ec6a6",
    path: "/notebook/http/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/read.md").then(comp => {
        Vue.component("v-f9d18ac9ec6a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dd8ee2ba0262e",
    path: "/notebook/http/webBasic.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/webBasic.md").then(comp => {
        Vue.component("v-dd8ee2ba0262e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7aadad45a9e5e",
    path: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/web服务器.md").then(comp => {
        Vue.component("v-7aadad45a9e5e", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/web服务器.html",
    redirect: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html"
  },
  {
    name: "v-b38085cfeb952",
    path: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/构建web内容的技术.md").then(comp => {
        Vue.component("v-b38085cfeb952", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/构建web内容的技术.html",
    redirect: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html"
  },
  {
    name: "v-f2fffb840f413",
    path: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/用户身份认证.md").then(comp => {
        Vue.component("v-f2fffb840f413", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/用户身份认证.html",
    redirect: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html"
  },
  {
    name: "v-809ba38282f5d",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-809ba38282f5d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-75236e2f74956",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-75236e2f74956", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5df5795dab32f",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-5df5795dab32f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c99d53bfe6dad",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-c99d53bfe6dad", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6fdd5a0041fcd",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-6fdd5a0041fcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-393a7d135d4ff",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-393a7d135d4ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2fd3aad4c917a",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-2fd3aad4c917a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b4721554e6a3b",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-b4721554e6a3b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e47d40b777e1",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-9e47d40b777e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-667802f3996fc",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-667802f3996fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48bce10e6c932",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-48bce10e6c932", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e6937fdc29bad",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-e6937fdc29bad", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]