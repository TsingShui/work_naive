import {createRouter, createWebHistory} from 'vue-router'

// 主页 View
const HomePageView = () => import('@/views/HomePageView.vue')
// 主页 Component
const HelloWorld = () => import('@/components/homepage/Content.vue');
const AboutUs = () => import('@/components/homepage/AboutUs.vue');
const Login = () => import('@/components/homepage/Login.vue');
// 大厅 View
const PlaygroundView = () => import('@/views/PlaygroundView.vue');
// 大厅 文章页
const Posts = () => import('@/components/playground/Posts.vue')

// 书写 View
const WriteView = () => import('@/components/write/WriteSkt.vue');


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // Home Pages
            path: '/', redirect: '/home',
            component: HomePageView,
            children: [
                {
                    path: 'home',
                    component: HelloWorld
                },
                {
                    path: 'about-us',
                    component: AboutUs
                },
                {
                    path: 'login',
                    component: Login
                }
                ,
            ]
        },
        // 大厅 Pages
        {
            path: '/playground', redirect: '/playground/posts',
            component: PlaygroundView,
            children: [
                {
                    path: '/playground/posts',
                    component: Posts
                }
                ,
                {
                    path: '/playground/write',
                    component: WriteView
                }
            ]
        },

    ]
})

export default router
