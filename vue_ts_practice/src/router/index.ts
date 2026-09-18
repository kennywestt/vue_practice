// router 설정 및 네비케이션 가드

import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/TodoView.vue'
import TodoDetailView from '@/views/TodoDetailView.vue'

const routes : Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/todos',
        name: 'Todo',
        component: TodoView
    },
    {
        // :id 부분이 동적으로 변하는 파라미터
        path: '/todo/:id',
        name: 'TodoDetail',
        component: TodoDetailView,
        meta: {requiresAuth: true} // 로그인 권한 체크
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 네비게이션 가드 (전역 전처리 가드)
router.beforeEach((to, from, next) => {
    console.group(`[Router Guard] ${String(from.name)} -> ${String(to.name)}이동시도`)

    // meta 필드로 인증 필요 여부 확인
    if (to.meta.requiresAuth) {
        const isAuthenticated = true // 테스트 (false로 바꾸면 페이지 진입을 막음)
        if(!isAuthenticated) {
            alert('접근권한x 홈으로 이동합니다.')
            return next({ name: 'Home' })
        }
    }

    next() //통과했을때
})

export default router