<script setup lang="ts">
import TodoComposablePractice from './components/Todos/TodoComposablePractice.vue';
import TodoDependencyPractice from './components/Todos/TodoDependencyPractice.vue';
import TodoLifeCyclePractice from './components/Todos/TodoLifeCyclePractice.vue';
import TodoPractice from './components/Todos/TodoPractice.vue'
import TodoPinia from './components/Todos/TodoPinia.vue';
import { RouterLink, RouterView } from 'vue-router';
import TodoAxiosPractice from './components/Todos/TodoAxiosPractice.vue';
</script>

<template>
  <main class="app-container">
    <h1>Vue 3 + TypeScript 학습</h1>

    <!-- Todo 실습 컴포넌트 -->
    <TodoPractice />
    <hr />
    <!-- 라이프사이클 실습 컴포넌트 -->
     <TodoLifeCyclePractice />
     <hr />
    <!-- Depedency, injection 실습 컴포넌트 -->
     <TodoDependencyPractice/>
     <hr />
     <TodoComposablePractice/>
     <hr />
     <h1>Vue Router</h1>
     <nav class="nav-bar">
      <RouterLink to="/">홈으로</RouterLink>
      <RouterLink to="/todos">Todo 목록</RouterLink>
      <RouterLink to="/todos/1">1번 Todo 상세</RouterLink>
     </nav>
     <hr />
     <RouterView />
     <hr />
     <TodoPinia />
     <hr />
     <TodoAxiosPractice />
  
    </main>
</template>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.nav-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.nav-bar a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
/* 현재 활성화된 라우트 링크에 자동 부여되는 클래스 */
.nav-bar a.router-link-active {
  color: #42b883;
}
</style>
