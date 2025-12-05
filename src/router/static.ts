export const errorRouter = [
    {
        name: '403',
        path: '/403',
        component: () => import('@/views/error/403.vue'),
        meta: { title: '403页面', unNeedAuth: true },
    },
    {
        name: '404',
        path: '/404',
        component: () => import('@/views/error/404.vue'),
        meta: { title: '404页面', unNeedAuth: true },
    },
    {
        name: '500',
        path: '/500',
        component: () => import('@/views/error/500.vue'),
        meta: { title: '500页面', unNeedAuth: true },
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/error/404.vue'),
        meta: { unNeedAuth: true },
    },
];


// 可用路由
export const staticRouter = [
    // {
    //     path: '/login',
    //     component: () => import('@/views/Login/index.vue'),
    //     meta: { title: '登陆', unNeedAuth: true },
    // },
    {
        // path: '/t-model',
        path: '/', // home page
        component: () => import('@/views/t-model/index.vue'),
        meta: { title: 'T形件全过程曲线计算器', unNeedAuth: true },
    },

]
