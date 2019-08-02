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
    name: "v-a6aea7ade4078",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-a6aea7ade4078", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-2069a96791024",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-2069a96791024", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce6e8149623d3",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-ce6e8149623d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fcdaac1ddb33b",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-fcdaac1ddb33b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06dcee55b1522",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-06dcee55b1522", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-0c9e92182020f",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-0c9e92182020f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b663713af517",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-7b663713af517", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9f6f2f3b7606",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-f9f6f2f3b7606", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e400660fa118",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-4e400660fa118", comp.default)
        next()
      })
    }
  },
  {
    name: "v-40f739e10a6c2",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-40f739e10a6c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-26558ea3ccdbe",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-26558ea3ccdbe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-05416839af48c",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-05416839af48c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-113cb9b13405d",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-113cb9b13405d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df45e829d1b7f",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-df45e829d1b7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dafddbe527b25",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-dafddbe527b25", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0917f1e895d6f",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-0917f1e895d6f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a206deede57b5",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-a206deede57b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ee29c352483b",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-3ee29c352483b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3cb8ecc6b6eff",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-3cb8ecc6b6eff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78b2e10ffd325",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-78b2e10ffd325", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8cbbd39c16ff2",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-8cbbd39c16ff2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d4888680f336c",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-d4888680f336c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13ff69735152a",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-13ff69735152a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c48289da8c69",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-1c48289da8c69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f59371079d0d",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-8f59371079d0d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3ad93e61b4d4a",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-3ad93e61b4d4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-918cba241d734",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-918cba241d734", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cbe768eb8616b",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-cbe768eb8616b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f344dc57539f",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-f344dc57539f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e06a8d5f655b",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-9e06a8d5f655b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-43a8402e5673e",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-43a8402e5673e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bcd5105042d7",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-2bcd5105042d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ed050e03e4759",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-ed050e03e4759", comp.default)
        next()
      })
    }
  },
  {
    name: "v-035ccf784f22f",
    path: "/notebook/http/https.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/https.md").then(comp => {
        Vue.component("v-035ccf784f22f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c86d749d4414",
    path: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http协议.md").then(comp => {
        Vue.component("v-c86d749d4414", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http协议.html",
    redirect: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-576804dd7484d",
    path: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http报文信息.md").then(comp => {
        Vue.component("v-576804dd7484d", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http报文信息.html",
    redirect: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html"
  },
  {
    name: "v-c853346d80a97",
    path: "/notebook/http/http%E6%94%BB%E5%87%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http攻击.md").then(comp => {
        Vue.component("v-c853346d80a97", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http攻击.html",
    redirect: "/notebook/http/http%E6%94%BB%E5%87%BB.html"
  },
  {
    name: "v-aaab1cacdd701",
    path: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http状态码.md").then(comp => {
        Vue.component("v-aaab1cacdd701", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http状态码.html",
    redirect: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html"
  },
  {
    name: "v-2883e28b17501",
    path: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http追加协议.md").then(comp => {
        Vue.component("v-2883e28b17501", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http追加协议.html",
    redirect: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-20bc8b4631517",
    path: "/notebook/http/http%E9%A6%96%E9%83%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http首部.md").then(comp => {
        Vue.component("v-20bc8b4631517", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http首部.html",
    redirect: "/notebook/http/http%E9%A6%96%E9%83%A8.html"
  },
  {
    name: "v-fe02020ad3cf2",
    path: "/notebook/http/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/read.md").then(comp => {
        Vue.component("v-fe02020ad3cf2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d30e6c356796",
    path: "/notebook/http/webBasic.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/webBasic.md").then(comp => {
        Vue.component("v-7d30e6c356796", comp.default)
        next()
      })
    }
  },
  {
    name: "v-eab4b5127fc73",
    path: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/web服务器.md").then(comp => {
        Vue.component("v-eab4b5127fc73", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/web服务器.html",
    redirect: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html"
  },
  {
    name: "v-7a77f21c0e67f",
    path: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/构建web内容的技术.md").then(comp => {
        Vue.component("v-7a77f21c0e67f", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/构建web内容的技术.html",
    redirect: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html"
  },
  {
    name: "v-a7ca6fb9c67c",
    path: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/用户身份认证.md").then(comp => {
        Vue.component("v-a7ca6fb9c67c", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/用户身份认证.html",
    redirect: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html"
  },
  {
    name: "v-9e1b455b8776b",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-9e1b455b8776b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e012e22354ee7",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-e012e22354ee7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b230bf187f944",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-b230bf187f944", comp.default)
        next()
      })
    }
  },
  {
    name: "v-241dc4964a22d",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-241dc4964a22d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1362623bf4d8",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-1362623bf4d8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5d8b6cdc92266",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-5d8b6cdc92266", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49230a016a945",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-49230a016a945", comp.default)
        next()
      })
    }
  },
  {
    name: "v-252ea55b9ef94",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-252ea55b9ef94", comp.default)
        next()
      })
    }
  },
  {
    name: "v-88697f9ee6a51",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-88697f9ee6a51", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b585fc86a5ea",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-8b585fc86a5ea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a589a8b5aaaef",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-a589a8b5aaaef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ab8665f146402",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-ab8665f146402", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]