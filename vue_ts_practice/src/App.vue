<script setup lang="ts">
import TodoPractice from './components/Todos/TodoPractice.vue'
</script>

<template>
  <div class="app-layout">
    <h1>Vue 3 + TypeScript 학습</h1>

    <!-- Todo 실습 컴포넌트 불러오기 -->
    <TodoPractice />

    <!-- 앞으로 배울 실습 컴포넌트들 -->
  </div>
</template>

<style scoped>
.app-layout {
  /* padding: 20px; */
  /* max-width: 600px; */
  /* margin: 0 auto; */
  display: center;
}
</style>
