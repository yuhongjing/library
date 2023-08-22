(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{763:function(s,t,a){"use strict";a.r(t);var e=a(28),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器存储"}},[s._v("#")]),s._v(" 浏览器存储")]),s._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[s._v("#")]),s._v(" Cookie")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/20200715185323.png",alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("cookie是由服务器发送给客户端的，用于前端存储少量的信息，以键值对形式存储(key: value)。")])]),s._v(" "),a("li",[a("p",[s._v("客户端请求服务器时，如果服务器需要记录该用户状态，就通过response向客户端浏览器发送了一个Cookie。而客户端浏览器就会把Cookie保存起来。当浏览器再请求服务器时，浏览器将该Cookie一同提交给服务器。服务器检查该Cookie，就可以获取用户状态，保持会话。")])]),s._v(" "),a("li",[a("p",[s._v("cookie是不可跨域的，但是只有在域名不同的情况下，才不支持跨域，忽略协议与端口。例如，"),a("code",[s._v("http://localhost:80/")]),s._v("和"),a("code",[s._v("http://localhost:8080/")]),s._v("的Cookie是共享的，可以通过domain设置域，path设置域下的共享路径。")])]),s._v(" "),a("li",[a("p",[s._v("cookie属性")]),s._v(" "),a("ul",[a("li",[s._v("name表示设置的cookie名也就是key，不能重复，不可更改。")]),s._v(" "),a("li",[s._v("value表示设置的cookie的值。")]),s._v(" "),a("li",[s._v("domain表示cookie绑定的域名，默认绑定当前域，多级域名不可交换cookie，如果设置以点开头的域名，则所有子域名可以访问，如设置"),a("code",[s._v(".baidu.com")]),s._v("，则"),a("code",[s._v("a.baidu.com")]),s._v("可访问其上级域名的cookie。")]),s._v(" "),a("li",[s._v("path表示cookie所能使用的路径，默认'/'路径，只要满足当前匹配路径以及子路径都可以共享cookie。")]),s._v(" "),a("li",[s._v("maxAge表示cookie失效时间，单位秒，正数为失效时间，负数表示当前cookie在浏览器关闭时失效，0表示删除cookie。")]),s._v(" "),a("li",[s._v("secure表示cookie是否使用安全协议传输如HTTPS、SSL，默认不使用，只在HTTPS等安全协议下有效，这个属性并不能对客户端的cookie进行加密，不能保证绝对的安全性。")]),s._v(" "),a("li",[s._v("version当前cookie使用的版本号，0表示遵循Netscape的Cookie规范(多数)，1表示遵循W3C的RFC2109规范(较严格)，默认为0。")]),s._v(" "),a("li",[s._v("same-site规定浏览器不能在跨域请求中携带Cookie，减少CSRF攻击。")]),s._v(" "),a("li",[s._v("HttpOnly如果这个属性设置为true，就不能通过js脚本来获取cookie的值，用来限制非HTTP协议程序接口对客户端Cookie进行访问，可以有效防止XSS(跨站脚本攻击，代码注入攻击)。")])])]),s._v(" "),a("li",[a("p",[s._v("前端通过document.cookie对cookie进行读取操作。")])]),s._v(" "),a("li",[a("p",[s._v("创建cookie就是后端的事情了。")])])]),s._v(" "),a("h2",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" Session")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/yuhongjing/img-folder/master/img/CEF448AD-D262-4B4A-BD4A-13BCBC218F35.png",alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("session表示服务器与客户端的一次会话过程，session对象存储特定用户的属性及配置信息。")]),s._v(" "),a("li",[s._v("当用户在应用程序的Web页之间跳转时，存储在session对象中的变量将不会丢失，而是在整个用户会话中一直存在下去。当客户端关闭会话，或者session超时失效时会话结束。")]),s._v(" "),a("li",[s._v("用户第一次请求服务器的时候，服务器根据用户提交的相关信息，创建对应的session，请求返回时将此session的唯一标识信息sessionID返回给浏览器，浏览器接受到服务器返回的sessionID信息后，会将此信息存入到Cookie中，同时Cookie记录此sessionID属于哪个域名。")]),s._v(" "),a("li",[s._v("当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在Cookie信息，如果存在自动将Cookie信息也发送给服务端，服务端会从Cookie中获取sessionID，再根据sessionID查找对应的session信息，如果没有找到说明用户没有登录或者登录失效，如果找到session证明用户已经登录可执行后面的操作。")]),s._v(" "),a("li",[s._v("session的运行依赖session id，而session id是存在Cookie中的。")])]),s._v(" "),a("h2",{attrs:{id:"cookie与session的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie与session的区别"}},[s._v("#")]),s._v(" cookie与session的区别")]),s._v(" "),a("ul",[a("li",[s._v("cookie数据存放在客户的浏览器上，session数据放在服务器上。")]),s._v(" "),a("li",[s._v("cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session。用户验证这种场合一般会用session。")]),s._v(" "),a("li",[s._v("session保证在服务器，客户端不知道其中的信息；反之，cookie保存在客户端，服务器能够知道其中的信息。")]),s._v(" "),a("li",[s._v("session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie。")]),s._v(" "),a("li",[s._v("session中保存的是对象，cookie中保存的是字符串。")]),s._v(" "),a("li",[s._v("session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的。")]),s._v(" "),a("li",[s._v("session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中。")]),s._v(" "),a("li",[s._v("cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现session的一种方式。")])]),s._v(" "),a("h2",{attrs:{id:"本地存储localstorage与sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地存储localstorage与sessionstorage"}},[s._v("#")]),s._v(" 本地存储localStorage与sessionStorage")]),s._v(" "),a("h3",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[s._v("#")]),s._v(" localStorage")]),s._v(" "),a("ul",[a("li",[s._v("localStorage浏览器API，用于存储本地数据，可持久化，永不过期，除非主动删除。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基本使用")]),s._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'isaac'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 设置b为"isaac"')]),s._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 获取b的值，为"isaac"')]),s._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 获取第0个数据项的键名，此处即为"b"')]),s._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清除b的值")]),s._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 清除当前域名下的所有localStorage数据")]),s._v("\n")])])]),a("ul",[a("li",[s._v("localStorage只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据，一般用于跨页面共享数据。")]),s._v(" "),a("li",[s._v("可通过"),a("code",[s._v("window.addEventListener('storage', function(e) {})")]),s._v("设置localStorage事件监听，当存储区域的内容发生改变时，将会调用回调。")])]),s._v(" "),a("h3",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[s._v("#")]),s._v(" sessionStorage")]),s._v(" "),a("ul",[a("li",[s._v("sessionStorage用于本地存储一个会话(session)中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 存储数据")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("119")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取全部数据")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取指定域名数据")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sessionData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sessionStorage是js对象，也可以使用key的方式来获取值")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除指定键名数据")]),s._v("\nsessionStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("使用方式与localStorage类似。")]),s._v(" "),a("li",[s._v("仅在当前网页会话下有效，关闭页面或浏览器后就会清除。")]),s._v(" "),a("li",[s._v("主要用于存储当前页面独有的数据，不与浏览器其他页面共享。")])]),s._v(" "),a("h3",{attrs:{id:"区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[s._v("#")]),s._v(" 区别")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("数据存储方面")]),s._v(" "),a("ul",[a("li",[s._v("cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递。cookie数据还有路径(path)的概念，可以限制cookie只属于某个路径下。")]),s._v(" "),a("li",[s._v("sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。")])])]),s._v(" "),a("li",[a("p",[s._v("存储数据大小")]),s._v(" "),a("ul",[a("li",[s._v("存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。")]),s._v(" "),a("li",[s._v("sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。")])])]),s._v(" "),a("li",[a("p",[s._v("数据存储有效期")]),s._v(" "),a("ul",[a("li",[s._v("sessionStorage，仅在当前浏览器窗口关闭之前有效；localStorage，始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据。")]),s._v(" "),a("li",[s._v("cookie，只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭。")])])]),s._v(" "),a("li",[a("p",[s._v("作用域不同")]),s._v(" "),a("ul",[a("li",[s._v("sessionStorage在不同的浏览器窗口中不能共享，即便是同一个页面。")]),s._v(" "),a("li",[s._v("localStorage在所有同源窗口中都是共享的，也就是说只要浏览器不关闭，数据仍然存在。")]),s._v(" "),a("li",[s._v("cookie也是在所有同源窗口中都是共享的，浏览器不关闭，数据仍然存在。")])])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("特性")]),s._v(" "),a("th",[s._v("cookie")]),s._v(" "),a("th",[s._v("localStorage")]),s._v(" "),a("th",[s._v("sessionStorage")]),s._v(" "),a("th",[s._v("indexDB")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("数据生命周期")]),s._v(" "),a("td",[s._v("一般由服务器生成，可以设置过期时间")]),s._v(" "),a("td",[s._v("除非被清理，否则一直存在")]),s._v(" "),a("td",[s._v("页面关闭就清理")]),s._v(" "),a("td",[s._v("除非被清除，否则一直存在")])]),s._v(" "),a("tr",[a("td",[s._v("数据存储大小")]),s._v(" "),a("td",[s._v("4K")]),s._v(" "),a("td",[s._v("5M")]),s._v(" "),a("td",[s._v("5M")]),s._v(" "),a("td",[s._v("无限")])]),s._v(" "),a("tr",[a("td",[s._v("与服务端通信")]),s._v(" "),a("td",[s._v("每次都会携带在header中，对于请求性能影响")]),s._v(" "),a("td",[s._v("不参与")]),s._v(" "),a("td",[s._v("不参与")]),s._v(" "),a("td",[s._v("不参与")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);