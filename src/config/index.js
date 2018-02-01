//项目经历
const projectList = [{
    id: 0,
    name: '银河智投(交易所)',
    date: '2017-11',
    link: '//yh178178.com',
    detail: '/yh',
    dec: '该项目基于React+Mobx+Typescript+Antd开发的一个交易所网站，主要功能是交易，出入金，展示行情数据，图示化数据等。项目使用了mobx状态管理库管理数据，实现多组件数据同步，实时更新；使用typescript增加类型检查，提高开发和维护的效率；使用less提取公共样式，cssModules限制组件样式作用域，实现黑白主题；定制了股票图表；实现路由按需加载。',
    account: 13266705799,
    password: 123456,
}, {
    id: 1,
    name: '银河智投(交易所)',
    date: '2017-11',
    link: '//yh178178.com',
    detail: '/yh',
    dec: '该项目基于React+Mobx+Typescript+Antd开发的一个交易所网站，主要功能是交易，出入金，展示行情数据，图示化数据等。项目使用了mobx状态管理库管理数据，实现多组件数据同步，实时更新；使用typescript增加类型检查，提高开发和维护的效率；使用less提取公共样式，cssModules限制组件样式作用域，实现黑白主题；定制了股票图表；实现路由按需加载。',
    account: 13266705799,
    password: 123456,
}, {
    id: 2,
    name: '银河智投(交易所)',
    date: '2017-11',
    link: '//yh178178.com',
    detail: '/yh',
    dec: '该项目基于React+Mobx+Typescript+Antd开发的一个交易所网站，主要功能是交易，出入金，展示行情数据，图示化数据等。项目使用了mobx状态管理库管理数据，实现多组件数据同步，实时更新；使用typescript增加类型检查，提高开发和维护的效率；使用less提取公共样式，cssModules限制组件样式作用域，实现黑白主题；定制了股票图表；实现路由按需加载。',
    account: 13266705799,
    password: 123456,
}, {
    id: 3,
    name: '银河智投(交易所)',
    date: '2017-11',
    link: '//yh178178.com',
    detail: '/yh',
    dec: '该项目基于React+Mobx+Typescript+Antd开发的一个交易所网站，主要功能是交易，出入金，展示行情数据，图示化数据等。项目使用了mobx状态管理库管理数据，实现多组件数据同步，实时更新；使用typescript增加类型检查，提高开发和维护的效率；使用less提取公共样式，cssModules限制组件样式作用域，实现黑白主题；定制了股票图表；实现路由按需加载。',
    account: 13266705799,
    password: 123456,
} ];
//个人特点
const traitList = [
    '深入前端工程化，拥抱组件化和函数式编程，有dry编程习惯',
    '会总结项目开发和维护的难点痛点，思考解决方案。',
    '认真负责，有较强的学习能力，对新事物有较强的接受能力。',
    '有时间观念，能在规定时间内完成任务。',
    '知乎，github重度使用者，关注前端技术的最新发展，会收听技术大牛的Live.'
];
//技术栈
const skillList = [
    'react',
    'vue',
    'jQuery',
    'html',
    'javascript',
    'typescript',
    'css',
    'less',
    'cssModule',
    'ES6',
    'webpack',
    'ant design',
    'element',
    'echarts',
    'highcharts',
];
//社交链接
const social = [{
    id: 0,
    name: '博客',
    url: '//tossers.github.io',
    icon: '/blog.png',
    text: '//tossers.github.io',
}, {
    id: 1,
    name: 'GitHub',
    url: '//github.com/tossers',
    icon: '/github.png',
    text: '//github.com/tossers'
}, {
    id: 2,
    name: '知乎',
    url: '//www.zhihu.com/people/wo-shi-you-xiang/activities',
    icon: '/zhihu.png',
    text: '//www.zhihu.com/people/wo-shi-you-xiang/activities'
}, {
    id: 3,
    name: '邮箱',
    url: '',
    icon: '/email.png',
    text: '371777394@qq.com'
}, {
    id: 4,
    name: '电话',
    url: '',
    icon: '/phone.png',
    text: '13266705799',
}];
//个人信息
const personalInfo = {
    name: '严超颖',
    sex: '男',
    position: '前端开发工程师',
    birthday: '1994.08',
    university: '深圳大学',
    major: '电子信息工程',
    education: '本科',
    graduation: '2017年',
    english: '六级',
    social,
    skillList,
};
//最后修改时间
const lastUpdate = '2018-02-10';
export default {
    traitList,
    projectList,
    personalInfo,
    lastUpdate,
};
