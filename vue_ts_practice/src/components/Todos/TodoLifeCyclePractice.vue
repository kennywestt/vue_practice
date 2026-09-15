<script setup lang="ts">
import { onMounted, onUpdated, onUnmounted, ref } from 'vue';
const count = ref<number>(0);
const logMessage = ref<string>('');
// 1. Mount 단계 (화면 등장 시)
onMounted(() => {
    console.log('[onMounted] 컴포넌트 화면에 마운트')
    logMessage.value = '컴포넌트 마운트 완료'
})

// 2. Update 단계 (데이터 변경 시)
onUpdated(() => {
    console.log(`[onUpdated] 화면이 갱신 현재, count: ${count.value}`)
})

// 3. UnMounted 단계 (화면 소멸 시)
onUnmounted(() => {
    console.log('[onUnmounted] 컴포넌트 화면에서 제거')
})

const increment = () => {
    count.value++
}
</script>

<template>
    <div class="lifecycle-box">
        <h3>LifeCycle Hooks 연습</h3>
        <p>상태: {{ logMessage }}</p>
        <p>카운터 : <strong>{{ count }}</strong></p>
        <button @click="increment">Count 증가 (Update 발생)</button>
    </div>
</template>

<style scoped>
.lifecycle-box {
  padding: 16px;
  border: 1px solid #42b883;
  border-radius: 8px;
  margin-top: 16px;
  background-color: #f9fbf9;
}
button {
  padding: 6px 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
