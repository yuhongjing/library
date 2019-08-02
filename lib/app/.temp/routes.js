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
    name: "v-94e7f4689f32f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-94e7f4689f32f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-e59089d049f5f",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-e59089d049f5f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5b9a4befec1d9",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-5b9a4befec1d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d296c4704989b",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-d296c4704989b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5e0b39ed8437c",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-5e0b39ed8437c", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-e8dbc7d2a1b06",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-e8dbc7d2a1b06", comp.default)
        next()
      })
    }
  },
  {
    name: "v-61ae2eb3ae037",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-61ae2eb3ae037", comp.default)
        next()
      })
    }
  },
  {
    name: "v-170b1d42aaeb9",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-170b1d42aaeb9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2ba0fee1f33c1",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-2ba0fee1f33c1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bea4c9248d39e",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-bea4c9248d39e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f93f39a0529e",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-4f93f39a0529e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b8dff50366ed",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-4b8dff50366ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43ea0842c9121",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-43ea0842c9121", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8420e8e160e13",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-8420e8e160e13", comp.default)
        next()
      })
    }
  },
  {
    name: "v-857faf6dc312c",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-857faf6dc312c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ecd65012d4d53",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-ecd65012d4d53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3c3156952b5f9",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-3c3156952b5f9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b5ae38440ddf",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-0b5ae38440ddf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ceec25f6838ea",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-ceec25f6838ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f8a7e848470d9",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-f8a7e848470d9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-163a27dd3b389",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-163a27dd3b389", comp.default)
        next()
      })
    }
  },
  {
    name: "v-900e36e34c2bd",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-900e36e34c2bd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74d6add7f4488",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-74d6add7f4488", comp.default)
        next()
      })
    }
  },
  {
    name: "v-936a286449fe3",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-936a286449fe3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d74f5c96f739d",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-d74f5c96f739d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-edbb954f3fbea",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-edbb954f3fbea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-839864d60e5b6",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-839864d60e5b6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-18d8a2ccd371b",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-18d8a2ccd371b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ecb5124c08332",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-ecb5124c08332", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c7f7f9dc75fc",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-9c7f7f9dc75fc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f83aa46c29cdd",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-f83aa46c29cdd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34c2da70e8a8d",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-34c2da70e8a8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d784ed9afa2e",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-8d784ed9afa2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ad077faad3081",
    path: "/notebook/http/https.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/https.md").then(comp => {
        Vue.component("v-ad077faad3081", comp.default)
        next()
      })
    }
  },
  {
    name: "v-027813cd6f723",
    path: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http协议.md").then(comp => {
        Vue.component("v-027813cd6f723", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http协议.html",
    redirect: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-d00e0b025ef9c",
    path: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http报文信息.md").then(comp => {
        Vue.component("v-d00e0b025ef9c", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http报文信息.html",
    redirect: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html"
  },
  {
    name: "v-59504ef02cbd2",
    path: "/notebook/http/http%E6%94%BB%E5%87%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http攻击.md").then(comp => {
        Vue.component("v-59504ef02cbd2", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http攻击.html",
    redirect: "/notebook/http/http%E6%94%BB%E5%87%BB.html"
  },
  {
    name: "v-a1d15e2d32a03",
    path: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http状态码.md").then(comp => {
        Vue.component("v-a1d15e2d32a03", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http状态码.html",
    redirect: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html"
  },
  {
    name: "v-9276e9683f9e",
    path: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http追加协议.md").then(comp => {
        Vue.component("v-9276e9683f9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http追加协议.html",
    redirect: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-08525b9415102",
    path: "/notebook/http/http%E9%A6%96%E9%83%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http首部.md").then(comp => {
        Vue.component("v-08525b9415102", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http首部.html",
    redirect: "/notebook/http/http%E9%A6%96%E9%83%A8.html"
  },
  {
    name: "v-3972704f33571",
    path: "/notebook/http/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/read.md").then(comp => {
        Vue.component("v-3972704f33571", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c299e8d59faa2",
    path: "/notebook/http/webBasic.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/webBasic.md").then(comp => {
        Vue.component("v-c299e8d59faa2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d3557685c6af",
    path: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/web服务器.md").then(comp => {
        Vue.component("v-3d3557685c6af", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/web服务器.html",
    redirect: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html"
  },
  {
    name: "v-9ad04ebf6f5e8",
    path: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/构建web内容的技术.md").then(comp => {
        Vue.component("v-9ad04ebf6f5e8", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/构建web内容的技术.html",
    redirect: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html"
  },
  {
    name: "v-34e0f9b1c0d86",
    path: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/用户身份认证.md").then(comp => {
        Vue.component("v-34e0f9b1c0d86", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/用户身份认证.html",
    redirect: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html"
  },
  {
    name: "v-c11188b100add",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-c11188b100add", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1147e89bc25c",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-d1147e89bc25c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e2fd90912be2",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-8e2fd90912be2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8569fc729961b",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-8569fc729961b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8d755cac664de",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-8d755cac664de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c5b77075859b4",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-c5b77075859b4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a5b6eed269145",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-a5b6eed269145", comp.default)
        next()
      })
    }
  },
  {
    name: "v-23c9600824948",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-23c9600824948", comp.default)
        next()
      })
    }
  },
  {
    name: "v-befea0831eb77",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-befea0831eb77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2d67e9d8a3cd8",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-2d67e9d8a3cd8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-71e22c30629a9",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-71e22c30629a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d1bcd97b978e",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-6d1bcd97b978e", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]