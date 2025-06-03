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
                name: "福建飞宇科技集团有限公司",
                text: "前端开发工程师",
                nb: [
                    "Vue2/3", "ElementUI", "Uniapp", 'Vant', 'Vview'
                ],
                url: "https://admin.shualianpay.net/",
                img: "./images/qingsongfu.jpg",
                content: `<h2>所属行业</h2>
                <p>共享租赁</p>
                <h2>所属部门</h2>
                <p>研发中心</p>
                <h2>岗位名称</h2>
                <p>前端开发工程师</p>
                <h2>工作内容</h2>
                <p>1. 负责使用UniApp技术栈开发和维护商户后台系统，确保系统稳定性和用户体验。</p>
                <p>2. 针对C端产品，运用UniAppX进行跨平台应用开发，实现多端兼容与优化。</p>
                <p>3. 参与前端项目的需求分析，与产品团队紧密合作，确保技术实现符合业务目标。</p>
                <p>4. 持续对现有前端项目进行性能优化，提升页面加载速度和运行效率。</p>
                <p>5. 负责解决项目开发过程中的技术难题，保障项目按时交付。</p>
                <p>6. 编写清晰、规范的代码，并定期进行代码审查，维护代码质量。</p>`
            },
            {
                name: "福建票付通",
                text: "前端开发工程师",
                nb: [
                    "Vue2/3", "ElementUI", "React", 'Electron'
                ],
                url: "https://12301.cc",
                img: "./images/pft.jpg",
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
                name: "健康之路",
                text: "前端开发工程师",
                nb: [
                    "Jquery", "Html5", "CSS"
                ],
                url: "https://yihu.com",
                img: "./images/yihu.jpeg",
                content: `<h2>所属行业</h2>
                <p>专业就诊服务机构 </p>
                <h2>所属部门</h2>
                <p>研发中心UI/UE</p>
                <h2>岗位名称</h2>
                <p>web前端</p>
                <h2>工作内容</h2>
                <p>1. 根据UI设计稿制作页面，js交互设计；</p>
                <p>2. 配合开发公司内部前端框架；</p>`
            },
            {
                name: "福州天铭",
                text: "网页编辑",
                nb: [
                    "Javascript", "Html5", "CSS"
                ],
                url: "https://www.nd.com.cn",
                img: "./images/nd.png",
                content: `<h2>所属行业</h2>
                <p>互联网服务 </p>
                <h2>所属部门</h2>
                <p>91编辑部</p>
                <h2>岗位名称</h2>
                <p>网页编辑</p>
                <h2>工作内容</h2>
                <p>1. 英文游戏官网页面重构</p>
                <p>2. 海外游戏官网优化调整及更新和维护</p>`
            },
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