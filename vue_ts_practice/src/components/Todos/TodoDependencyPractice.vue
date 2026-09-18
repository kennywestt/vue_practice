<!-- Provide / Inject 연습
 반응형 상태와 상태 변경 함수를 provide를 통해 전체 하위 트리에 배포
 -->

<script setup lang="ts">
import {ref, provide} from 'vue';
import { ThemeKey } from '@/types/injectionKeys';
import TodoMiddleChild from './TodoMiddleChild.vue';

const theme = ref<string>('light');

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
}

// 하위 트리 전체에 데이터 및 함수 주입
provide(ThemeKey, {
    theme,
    toggleTheme
})
</script>

<template>
    <div class="parent-box">
        <h2>Vue 3 Provide / Inject </h2>
        <p>부모의 현재 테마: {{ theme }}</p>
        <TodoMiddleChild/>
    </div>
</template>

<style scoped>
.parent-box {
  padding: 16px;
  border: 2px solid #42b883;
  border-radius: 8px;
  margin-top: 16px;
}
</style>