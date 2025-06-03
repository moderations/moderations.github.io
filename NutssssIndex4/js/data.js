export default {
    index: {
        title: "你好，我是",
        me: [
            "杨蒙辉",
            "Web前端开发工程师"
        ],
        bg: "./images/bg.jpg",
        subTitle: "即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气",
        contact: [{
                name: "Blog",
                icon: "fa-wordpress",
                link: "https://moderations.github.io/index.html"
            },
            {
                name: "Email",
                icon: "fa-envelope",
                link: "mailto:40919157@qq.com"
            },
            // {
            //     name: "Gitee",
            //     icon: "fa-github",
            //     link: "https://gitee.com/n0ts"
            // },
            {
                name: "QQ",
                icon: "fa-qq",
                link: "https://wpa.qq.com/msgrd?v=3&uin=40919157&site=qq&menu=yes"
            }
        ],
        loadMore: {
            text: "了解更多",
            class: "resume2"
        }
    },
    about: {
        title: "关于我",
        laozi: {
            img: "./images/me.jpg",
            content: `<span></span>我叫<b>杨蒙辉</b>，今年44岁，于2004年毕业于北京理工大学，所学专业为电子科学与技术，2011年开始接触前端开发，至今已有10多年的前端开发经验。<br>
            <span></span>个人优势：<br>
            <p>1. 拥有深厚的多年前端开发经验，精通各类前端技术和工具。</p>
            <p>2. 熟练掌握Vue.js框架，能够高效实现复杂的前端界面开发。</p>
            <p>3. 丰富的electron+vue客户端软件开发经验，使用websocket等技术同硬件设备交互经验。</p>
            <p>4. 熟悉Bootstrap、WeUI、Element UI及Vant等主流前端框架，能够根据项目需求灵活选用。</p>
            <p>5. 具备小程序开发的专业技能，能够独立完成小程序的设计与实现。</p>
            <p>6. 掌握前端模块化开发方法，有效提升代码的可维护性和复用性。</p>
            <p>7. 能够快速适应新技术，持续学习和实践最新的前端开发趋势与技术。</p>
            `
        },
        // ability: [{
        //         icon: "fa-html5",
        //         title: "前端",
        //         subTitle: "HTML，CSS，Js，Vue...",
        //         color: "#ff4757",
        //         bfb: "80%"
        //     },
        //     {
        //         icon: "fa-code",
        //         title: "后端",
        //         subTitle: "ASP.NET，.NET Core，Node.js...",
        //         color: "#ffa502",
        //         bfb: "80%"
        //     },
        //     {
        //         icon: "fa-linux",
        //         title: "Linux",
        //         subTitle: "Nginx，Apache，基础操作...",
        //         color: "#1e90ff",
        //         bfb: "50%"
        //     },
        //     {
        //         icon: "fa-photo",
        //         title: "设计",
        //         subTitle: "Photoshop，CorelDRAW...",
        //         color: "#2ed573",
        //         bfb: "80%"
        //     }
        // ],
        loadMore: {
            text: "继续浏览",
            class: "resume3"
        }
    },
    project: {
        title: "我的工作经历",
        list: [{
                name: "福建票付通",
                text: "前端开发工程师",
                nb: [
                    "Vue2/3", "ElementUI", "React"
                ],
                // url: "https://gitee.com/n0ts/tucao",
                // img: "./images/tucao1.png",
                content: `<h2>所属行业</h2>
                <p>旅游saas</p>
                <h2>所属部门</h2>
                <p>研发中心前端组</p>
                <h2>岗位名称</h2>
                <p>前端开发工程师</p>
                <h2>工作内容</h2>
                <p>1. 根据UI设计的高保真原型，负责前端页面的精确制作与交互功能的实现，确保与后端接口的无缝对接和数据的有效渲染。</p>
                <p>2. 运用Webpack等现代构建工具，提升开发效率，优化项目结构，保障代码质量与性能。</p>
                <p>3. 负责微信小程序的独立开发，包括界面设计、功能实现及性能优化，满足移动端用户需求。</p>
                <p>4. 利用Vue.js结合Element UI框架，高效构建后台管理界面，提升用户交互体验，使用vue+vant开发移动端商城应用，使用vue+electron开发客户端软件，实现pc硬件和软件交互。</p>
                <p>5. 通过React.js搭配Ant Design框架，开发企业级平台页面，注重界面美观性与操作便捷性。</p>
                <p>6. 使用uniapp维护小程序。</p>
                <p>7. 参与前端项目的需求分析与模块划分，协同团队推进项目进度，确保按时交付高质量代码。</p>
                <p>8. 主动进行代码审查，与团队成员共同维护代码质量，推动最佳实践的实施。</p>`
            },
            {
                name: "小黑屋商城",
                text: "类似于淘宝，实现了电商该有的功能",
                nb: [
                    "Vue", "ElementUI", "MinitUI", "Redis", "SSM", "JAVA", "Mysql"
                ],
                url: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2020年11月2日 – 2020年12月1日，3人/29天</p>
                <h2>开发工具</h2>
                <p>IDEA、Visual Code、MySQL、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>小黑屋商城是一个综合性的B2C平台，类似京东商城、天猫商城。会员可以在商城浏览商品、下订单，以及参加各种活动。管理员、运营可以在平台后台管理系统中管理商品、订单、会员等。</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登陆注册、找回密码、验证码；</p>
                <p>2、	首页：轮播图热点展示、商品分类展示、商品展示；</p>
                <p>3、	商品详情：图片轮流展示、图片放大镜、商品信息展示、打折与原价展示、添加购物车与购买、评论分类展示、二维码分享、热销展示；</p>
                <p>4、	购物车：购物车商品展示、数量修改、商品类型修改、批量管理与购买、删除购物车；</p>
                <p>5、	支付：充值余额、支付宝支付、支付成功/失败展示；</p>
                <p>6、	用户：个人信息管理、地址选择、订单管理、购物车管理、余额管理；</p>
                <h2>项目技术</h2>
                <p>1.	前端分为 PC 与 Mobile 两个客户端，基于 Vue、ElementUI、Mint UI 编写；</p>
                <p>2.	后端采用 Java、SSM 编写 RESTFul API 风格接口；</p>
                <p>3.	前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>4.	图片验证码由后端生成返回Base64并在前端展示，手机验证码则为阿里云短信服务，验证缓存统一放在Redis进行暂存；</p>
                <p>5.	二维码生成采用 QRCode 根据链接进行生成并压缩；</p>
                <p>6.	充值系统基于支付宝沙箱程序模拟真实的支付宝支付验证付款等；</p>
                <p>7.	登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8.	Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                <p>暂无</p>
                <h2>项目职责</h2>
                <p>1、前端功能开发、页面设计；</p>
                <p>2、支付宝支付对接；</p>
                <p>3、Debug测试并修复；</p>`,
            },
            {
                name: "小次郎点餐",
                text: "点餐软件，拥有管理后台与客户界面",
                nb: [
                    "Winform", "SQLServer", "C#"
                ],
                url: "https://gitee.com/n0ts/CSharpOrderFood",
                img: "./images/xcl1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年4月2日 – 2021年5月5日，2人/33天</p>
                <h2>开发工具</h2>
                <p>Visual Studio、SQLServer、Git</p>
                <h2>项目背景</h2>
                <p>本项目是为了满足巨大的餐饮市场中人们对快捷点餐的需求。我们的产品具有的高效、快捷、便利的特点将会为我们带来巨大的市场，我们的产品开发初期主要服务于餐饮行业，后续开发可涉及更广泛的娱乐、生活领域，是一款具备广阔市场前景的应用！</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登录注册、找回密码、密保、验证码；</p>
                <p>2、	客户端：美食分类、购物车、支付充值、订单操作、地址管理、个人信息修改、密码修改、数据可视化；</p>
                <p>3、	服务端：订单管理、美食与分类管理、上下架操作、美食图片上传、用户管理、数据可视化；</p>
                <h2>项目技术</h2>
                <p>1、	使用 Winform 绘制软件界面，C# 便携后台代码；</p>
                <p>2、	使用 SQLServer 作为数据存储，便携 DBHelper 类与数据库进行交互；</p>
                <p>3、	图片验证码使用 Winform GDI+ 绘图生成随机验证码并显示；</p>
                <p>4、	所有密码采用 MD5 加密方式进行存储；</p>
                <p>5、	对所有的前台数据进行XSS注入或为空验证，防止恶意代码或空值造成程序报错；</p>
                <p>6、	许多位置进行了 Try Catch 异常捕获，如发生断网等情况软件会提醒客户而不是报错；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xcl1.png"></li>
                    <li><img src="./images/xcl2.png"></li>
                    <li><img src="./images/xcl3.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、参与原型图设计与 UI 设计，辅助市场调研；</p>
                <p>2、负责数据库设计，模块设计；</p>
                <p>3、客户端与服务端的编程开发；</p>
                <p>4、修复测试人员发现的BUG；</p>`,
            },
            {
                name: "记仇小本本",
                text: "简约到极致的日记记录",
                nb: [
                    "Gitee Issues", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://heng.n0ts.cn/",
                img: "./images/heng1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>单纯的记仇小本本，可用于记录日常生活</p>
                <h2>模块介绍</h2>
                <p>1、	查看记仇；</p>
                <p>2、	发布记仇；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue + ElementUI制作；</p>
                <p>2、	数据存储利用了Gitee Issues进行存储；</p>
                <p>3、	CSS 3D样式模拟书本翻页；</p>
                <p>4、	CSS 绘制书本样式；</p>
                <p>5、	懒加载记仇数据，类似于翻页；</p>
                <p>6、	富文本支持，表情照片视频支持；</p>
                <p>7、	全端响应式自适应；</p>
                <p>8、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/heng1.png"></li>
                    <li><img src="./images/heng2.png"></li>
                    <li><img src="./images/heng3.png"></li>
                </ul>`,
            },
            {
                name: "IceCreem搜索导航",
                text: "好看的导航搜索页",
                nb: [
                    "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://n0ts.gitee.io/icecreamsearch/",
                img: "./images/so.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>1人/2天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	搜索功能；</p>
                <p>2、	搜索引擎切换与添加；</p>
                <p>3、	各类实用网站导航与分类；</p>
                <p>4、	配置本地存储；</p>
                <p>5、	背景图获取 bing 每日壁纸或自定义壁纸；</p>
                <p>6、	搜索结果数量自定义；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	百度搜索结果实时回调；</p>
                <p>3、	bing 每日壁纸回调；</p>
                <p>4、	本地配置存储；</p>
                <p>5、	实用网站分类预览；</p>
                <p>6、	全端响应式自适应；</p>
                <p>7、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <p>暂无</p>`,
            },
            {
                name: "极客之眼官网",
                text: "GeekEyes极客之眼官方网站",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://www.geekeyes.cn/",
                img: "./images/geek1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/8天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman、Gitee API</p>
                <h2>项目背景</h2>
                <p>团队需要，新年新官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页轮播图，介绍；</p>
                <p>2、	关于我们；</p>
                <p>3、	公益活动；</p>
                <p>4、	捐赠人员；</p>
                <p>5、	团队成员；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用Vue制作；</p>
                <p>2、	CSS 中国风科技感设计；</p>
                <p>3、	CSS 按钮赛博朋克电磁风格；</p>
                <p>4、	CSS 推拉门图片风格；</p>
                <p>5、	全端响应式自适应；</p>
                <p>6、	采用CDN加速网站；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/geek1.png"></li>
                    <li><img src="./images/geek2.png"></li>
                    <li><img src="./images/geek3.png"></li>
                    <li><img src="./images/geek4.png"></li>
                </ul>`,
            },
            {
                name: "计算机协会官网",
                text: "给岳阳职院计算机协会写的官网",
                nb: [
                    "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://xxgcteam.com/",
                img: "./images/xxgc1.png",
                content: `<h2>项目类型</h2>
                <p>官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>给好朋友会长做一个计协官网</p>
                <h2>模块介绍</h2>
                <p>1、	首页；</p>
                <p>2、	关于我们；</p>
                <p>3、	历程发展；</p>
                <p>4、	计协干部；</p>
                <p>5、	日常一览；</p>
                <p>6、	加入我们；</p>
                <h2>项目技术</h2>
                <p>1、	前端采用 Vue + ElementUI 制作，后端采用 Node + Mysql 制作；</p>
                <p>2、	轮播图，轮播图的放大效果动效；</p>
                <p>3、	关于我们点击文章功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xxgc1.png"></li>
                    <li><img src="./images/xxgc2.png"></li>
                    <li><img src="./images/xxgc3.png"></li>
                </ul>`,
            },
            {
                name: "NutssssIndex",
                text: "自己的个人主页的系列",
                nb: [
                    "HTML", "CSS", "JS", "Vue", "Vue", "Linux", "SEO", "CDN"
                ],
                url: "https://gitee.com/n0ts/NutssssIndex",
                img: "./images/nuts1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/？天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、Postman</p>
                <h2>项目背景</h2>
                <p>个人练手设计作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/nuts1.png"></li>
                    <li><img src="./images/nuts2.png"></li>
                </ul>`,
            },
            {
                name: "resume",
                text: "送给另一半的",
                nb: [
                    "HTML", "CSS", "Js"
                ],
                url: "https://resume.cn/",
                img: "./images/xhj1.png",
                content: `<h2>项目类型</h2>
                <p>练手单页</p>
                <h2>开发周期</h2>
                <p>1人/10天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git</p>
                <h2>项目背景</h2>
                <p>第一个练手作品</p>
                <h2>项目技术</h2>
                <p>1、	全端响应式自适应；</p>
                <p>2、	简约风格，与众不同；</p>
                <p>3、	背景视差滚动；</p>
                <p>4、	打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/xhj1.png"></li>
                    <li><img src="./images/xhj2.png"></li>
                    <li><img src="./images/xhj3.png"></li>
                    <li><img src="./images/xhj4.png"></li>
                </ul>`,
            },
            {
                name: "1905no1",
                text: "给大学班级做的博客网站",
                nb: [
                    "HTML", "CSS", "Js", "PHP", "Wordpress"
                ],
                url: "https://1905no1.cn/",
                img: "./images/no1.png",
                content: `<h2>项目类型</h2>
                <p>班级官网</p>
                <h2>开发周期</h2>
                <p>1人/4天</p>
                <h2>开发工具</h2>
                <p>Visual Code、Git、WordPress</p>
                <h2>项目背景</h2>
                <p>给班级做一个官网，基于WordPress实现文章发送等功能</p>
                <h2>项目技术</h2>
                <p>1、 全端响应式自适应；</p>
                <p>2、 简约风格，与众不同；</p>
                <p>3、 背景视差滚动；</p>
                <p>4、 打字机效果；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/no1.png"></li>
                    <li><img src="./images/no2.png"></li>
                    <li><img src="./images/no3.png"></li>
                </ul>`,
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "resume4"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "博客",
                context: "https://moderations.github.io/index.html"
            },
            {
                name: "邮箱",
                context: "40919157@qq.com"
            },
            {
                name: "QQ",
                context: "40919157"
            },
            {
                name: "微信",
                context: "Yangmenghui920"
            }
        ]
    }
}