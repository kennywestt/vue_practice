<script setup lang="ts">
import TodoComposablePractice from './components/Todos/TodoComposablePractice.vue';
import TodoDependencyPractice from './components/Todos/TodoDependencyPractice.vue';
import TodoLifeCyclePractice from './components/Todos/TodoLifeCyclePractice.vue';
import TodoPractice from './components/Todos/TodoPractice.vue'
</script>

<template>
  <div class="app-layout">
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
