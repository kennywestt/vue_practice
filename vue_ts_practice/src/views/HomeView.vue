<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()
const goToTodoDetail = (id: number) => {
    router.push(`/todo/${id}`)
}
</script>

<template>
    <div>
        <h2>메인 홈 페이지</h2>
        <p>Vue Router</p>
        <button @click="goToTodoDetail(100)">100번 Todo 상세 보기(동적이동)</button>
    </div>
</template>