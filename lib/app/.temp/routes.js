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
    name: "v-5551f9da2899f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/README.md").then(comp => {
        Vue.component("v-5551f9da2899f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-dfd036fb25fa2",
    path: "/blog/article/BATFighting.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/BATFighting.md").then(comp => {
        Vue.component("v-dfd036fb25fa2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2916a74753f92",
    path: "/blog/article/five-years-plan.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/five-years-plan.md").then(comp => {
        Vue.component("v-2916a74753f92", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79901be8671a6",
    path: "/blog/article/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/read.md").then(comp => {
        Vue.component("v-79901be8671a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c0ff9526cb8c3",
    path: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/article/秋招总结.md").then(comp => {
        Vue.component("v-c0ff9526cb8c3", comp.default)
        next()
      })
    }
  },
  {
    path: "/blog/article/秋招总结.html",
    redirect: "/blog/article/%E7%A7%8B%E6%8B%9B%E6%80%BB%E7%BB%93.html"
  },
  {
    name: "v-bac52526c3bb1",
    path: "/blog/starman/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/starman/read.md").then(comp => {
        Vue.component("v-bac52526c3bb1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-539a942c9aee7",
    path: "/blog/tools/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/blog/tools/read.md").then(comp => {
        Vue.component("v-539a942c9aee7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e15de4634763b",
    path: "/code/loadsh/array.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/array.md").then(comp => {
        Vue.component("v-e15de4634763b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bfd61e9939b81",
    path: "/code/loadsh/collection.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/collection.md").then(comp => {
        Vue.component("v-bfd61e9939b81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-171e60948a388",
    path: "/code/loadsh/date.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/date.md").then(comp => {
        Vue.component("v-171e60948a388", comp.default)
        next()
      })
    }
  },
  {
    name: "v-08d89129dcb0c",
    path: "/code/loadsh/function.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/function.md").then(comp => {
        Vue.component("v-08d89129dcb0c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-798e2298a46c8",
    path: "/code/loadsh/lang.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/lang.md").then(comp => {
        Vue.component("v-798e2298a46c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f3821f0484e03",
    path: "/code/loadsh/math.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/math.md").then(comp => {
        Vue.component("v-f3821f0484e03", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d3192f55fa763",
    path: "/code/loadsh/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/methods.md").then(comp => {
        Vue.component("v-d3192f55fa763", comp.default)
        next()
      })
    }
  },
  {
    name: "v-55c4571d5ac1",
    path: "/code/loadsh/number.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/number.md").then(comp => {
        Vue.component("v-55c4571d5ac1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dcd2d0f6b5545",
    path: "/code/loadsh/object.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/object.md").then(comp => {
        Vue.component("v-dcd2d0f6b5545", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4926c17e203b5",
    path: "/code/loadsh/properties.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/properties.md").then(comp => {
        Vue.component("v-4926c17e203b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6ad2cd601e2e",
    path: "/code/loadsh/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/read.md").then(comp => {
        Vue.component("v-f6ad2cd601e2e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a82723ff5a93",
    path: "/code/loadsh/seq.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/seq.md").then(comp => {
        Vue.component("v-a82723ff5a93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b97496050232e",
    path: "/code/loadsh/string.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/string.md").then(comp => {
        Vue.component("v-b97496050232e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04226e1aa9b79",
    path: "/code/loadsh/util.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/code/loadsh/util.md").then(comp => {
        Vue.component("v-04226e1aa9b79", comp.default)
        next()
      })
    }
  },
  {
    name: "v-45bbe1fc8bf8",
    path: "/knowledge/algorithm/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/algorithm/read.md").then(comp => {
        Vue.component("v-45bbe1fc8bf8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76d718b3a0848",
    path: "/knowledge/backend/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/backend/read.md").then(comp => {
        Vue.component("v-76d718b3a0848", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fb94648efe12",
    path: "/knowledge/database/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/database/read.md").then(comp => {
        Vue.component("v-fb94648efe12", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7090edd4104e8",
    path: "/knowledge/design/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/design/read.md").then(comp => {
        Vue.component("v-7090edd4104e8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f7ba4650e486",
    path: "/knowledge/hard/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/hard/read.md").then(comp => {
        Vue.component("v-3f7ba4650e486", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1511bfa4451",
    path: "/knowledge/network/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/network/read.md").then(comp => {
        Vue.component("v-d1511bfa4451", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d0236483308ff",
    path: "/knowledge/structure/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/structure/read.md").then(comp => {
        Vue.component("v-d0236483308ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-84add707f0708",
    path: "/knowledge/system/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/system/read.md").then(comp => {
        Vue.component("v-84add707f0708", comp.default)
        next()
      })
    }
  },
  {
    name: "v-adf416166312c",
    path: "/knowledge/web/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/css.md").then(comp => {
        Vue.component("v-adf416166312c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-925e2c594b172",
    path: "/knowledge/web/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/html.md").then(comp => {
        Vue.component("v-925e2c594b172", comp.default)
        next()
      })
    }
  },
  {
    name: "v-640fa301464b3",
    path: "/knowledge/web/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/javascript.md").then(comp => {
        Vue.component("v-640fa301464b3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-531ec0fc1ef0a",
    path: "/knowledge/web/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/knowledge/web/read.md").then(comp => {
        Vue.component("v-531ec0fc1ef0a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f0406606dbae2",
    path: "/notebook/http/https.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/https.md").then(comp => {
        Vue.component("v-f0406606dbae2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1c7851039b9b1",
    path: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http协议.md").then(comp => {
        Vue.component("v-1c7851039b9b1", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http协议.html",
    redirect: "/notebook/http/http%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-fcdb75577a905",
    path: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http报文信息.md").then(comp => {
        Vue.component("v-fcdb75577a905", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http报文信息.html",
    redirect: "/notebook/http/http%E6%8A%A5%E6%96%87%E4%BF%A1%E6%81%AF.html"
  },
  {
    name: "v-fed62bb7b93ae",
    path: "/notebook/http/http%E6%94%BB%E5%87%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http攻击.md").then(comp => {
        Vue.component("v-fed62bb7b93ae", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http攻击.html",
    redirect: "/notebook/http/http%E6%94%BB%E5%87%BB.html"
  },
  {
    name: "v-9b37c8d0cf4f2",
    path: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http状态码.md").then(comp => {
        Vue.component("v-9b37c8d0cf4f2", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http状态码.html",
    redirect: "/notebook/http/http%E7%8A%B6%E6%80%81%E7%A0%81.html"
  },
  {
    name: "v-04f842b6f33c4",
    path: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http追加协议.md").then(comp => {
        Vue.component("v-04f842b6f33c4", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http追加协议.html",
    redirect: "/notebook/http/http%E8%BF%BD%E5%8A%A0%E5%8D%8F%E8%AE%AE.html"
  },
  {
    name: "v-ee961b146dd9e",
    path: "/notebook/http/http%E9%A6%96%E9%83%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/http首部.md").then(comp => {
        Vue.component("v-ee961b146dd9e", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/http首部.html",
    redirect: "/notebook/http/http%E9%A6%96%E9%83%A8.html"
  },
  {
    name: "v-19000e64a530d",
    path: "/notebook/http/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/read.md").then(comp => {
        Vue.component("v-19000e64a530d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f331709b196e1",
    path: "/notebook/http/webBasic.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/webBasic.md").then(comp => {
        Vue.component("v-f331709b196e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f33af17ccd3f",
    path: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/web服务器.md").then(comp => {
        Vue.component("v-6f33af17ccd3f", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/web服务器.html",
    redirect: "/notebook/http/web%E6%9C%8D%E5%8A%A1%E5%99%A8.html"
  },
  {
    name: "v-ee315ee1a1d3d",
    path: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/构建web内容的技术.md").then(comp => {
        Vue.component("v-ee315ee1a1d3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/构建web内容的技术.html",
    redirect: "/notebook/http/%E6%9E%84%E5%BB%BAweb%E5%86%85%E5%AE%B9%E7%9A%84%E6%8A%80%E6%9C%AF.html"
  },
  {
    name: "v-ef3acedf32002",
    path: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/http/用户身份认证.md").then(comp => {
        Vue.component("v-ef3acedf32002", comp.default)
        next()
      })
    }
  },
  {
    path: "/notebook/http/用户身份认证.html",
    redirect: "/notebook/http/%E7%94%A8%E6%88%B7%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.html"
  },
  {
    name: "v-87cb7aeae4e9d",
    path: "/notebook/school/css.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/css.md").then(comp => {
        Vue.component("v-87cb7aeae4e9d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbcee3bfebd7c",
    path: "/notebook/school/database.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/database.md").then(comp => {
        Vue.component("v-bbcee3bfebd7c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8bf72cae9c1a9",
    path: "/notebook/school/freamwork.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/freamwork.md").then(comp => {
        Vue.component("v-8bf72cae9c1a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-06a771a6e3f87",
    path: "/notebook/school/html.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/html.md").then(comp => {
        Vue.component("v-06a771a6e3f87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a27611d4dbcab",
    path: "/notebook/school/javascript.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/javascript.md").then(comp => {
        Vue.component("v-a27611d4dbcab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ffcef2bb8a9",
    path: "/notebook/school/module.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/module.md").then(comp => {
        Vue.component("v-4ffcef2bb8a9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3a2b25a28e446",
    path: "/notebook/school/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/network.md").then(comp => {
        Vue.component("v-3a2b25a28e446", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a64ed97827604",
    path: "/notebook/school/nodejs.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/nodejs.md").then(comp => {
        Vue.component("v-a64ed97827604", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7cdf2611879ce",
    path: "/notebook/school/otherknowlage.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/otherknowlage.md").then(comp => {
        Vue.component("v-7cdf2611879ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-591c2cfadf79d",
    path: "/notebook/school/othertools.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/othertools.md").then(comp => {
        Vue.component("v-591c2cfadf79d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-052d46539476c",
    path: "/notebook/school/read.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/read.md").then(comp => {
        Vue.component("v-052d46539476c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8b825c8fc98a8",
    path: "/notebook/school/structure.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("/Users/yuhongjing/www/library/docs/notebook/school/structure.md").then(comp => {
        Vue.component("v-8b825c8fc98a8", comp.default)
        next()
      })
    }
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]