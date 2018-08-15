import Main from '@/views/Main.vue';
import articles from '@/views/article/article-publish.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () =>
        import ('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () =>
        import ('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () =>
        import ('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () =>
        import ('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () =>
        import ('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () =>
        import ('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [{
            path: 'home',
            title: {i18n: 'home'},
            name: 'home_index',
            component: () =>
                import ('@/views/home/home.vue')
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: () =>
                import ('@/views/own-space/own-space.vue')
        },
        // {
        //     path: 'order/:order_id',
        //     title: '订单详情',
        //     name: 'order-info',
        //     component: () =>
        //         import ('@/views/advanced-router/component/order-info.vue')
        // }, // 用于展示动态路由
        {
            path: 'article/artical-modify/:artical_id',
            title: '文章修改',
            name: 'article-changes',
            component: articles
        }, // 文章动态匹配路由
        // {
        //     path: 'shopping',
        //     title: '购物详情',
        //     name: 'shopping',
        //     component: () =>
        //         import ('@/views/advanced-router/component/shopping-info.vue')
        // }, // 用于展示带参路由
        // {
        //     path: 'message',
        //     title: '消息中心',
        //     name: 'message_index',
        //     component: () =>
        //         import ('@/views/message/message.vue')
        // }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/article',
        icon: 'compose',
        name: 'article',
        title: '文章管理',
        component: Main,
        children: [
            {
                path: 'index',
                title: '文章管理',
                name: 'article_index',
                component: () =>
                    import ('@/views/article/article.vue')
            },
            {
                path: 'artical-publish',
                title: '文章发布',
                name: 'artical-publish',
                // icon: 'compose',
                component: articles
            }
        ]
    },
    {
        path: '/image',
        icon: 'images',
        name: 'image',
        title: '图片管理',
        component: Main,
        children: [
            {
                path: 'index',
                title: '图片管理',
                name: 'img_index',
                component: () =>
                    import ('@/views/imgManage/imgManage.vue')
            },
            {
                path: 'imgDetail',
                title: '图片上传',
                name: 'img_upload',
                component: () =>
                    import ('@/views/imgManage/imgUpload.vue')
            }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            {
            path: 'index',
            title: '错误页面',
            name: 'errorpage_index',
            component: () =>
                import ('@/views/error-page/error-page.vue')
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];