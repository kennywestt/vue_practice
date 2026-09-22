<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {storeToRefs} from 'pinia'
import { useTodoApiStore } from '../../stores/useTodoApiStore';

const todoApiStore = useTodoApiStore()
const {todos, isLoading, error} = storeToRefs(todoApiStore)
const {fetchTodos, addTodo, toggleTodo, removeTodo} = todoApiStore

const newTodoText = ref('')

// 컴포넌트 마운트 시 API 데이터 호출ㄹ
onMounted(() => {
  fetchTodos()  
})

const handleAdd = () => {
    addTodo(newTodoText.value)
    newTodoText.value=''
}
</script>

<template>
<div class="axios-box">
    <h2>Axios + REST API 연동 실습</h2>

    <!-- 입력 폼 -->
    <div class="input-group">
      <input
        v-model="newTodoText"
        @keyup.enter="handleAdd"
        placeholder="서버로 전송할 Todo 입력..."
      />
      <button @click="handleAdd" :disabled="isLoading">추가</button>
    </div>

    <!-- 로딩 상태 표시 -->
    <div v-if="isLoading" class="loading">데이터 처리 중...</div>

    <!-- 에러 메시지 표시 -->
    <div v-if="error" class="error">{{ error }}</div>

    <!-- Todo 목록 -->
    <ul v-if="!isLoading && todos.length > 0">
      <li v-for="item in todos" :key="item.id">
        <span
          :class="{ completed: item.completed }"
          @click="toggleTodo(item.id)"
        >
          {{ item.text }}
        </span>
        <button @click="removeTodo(item.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.axios-box {
  padding: 16px;
  border: 2px solid #e06810;
  border-radius: 8px;
  margin-top: 16px;
}
.input-group {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.loading {
  color: #2b6cb0;
  font-weight: bold;
}
.error {
  color: #c53030;
  background-color: #fff5f5;
  padding: 8px;
  border-radius: 4px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
span {
  cursor: pointer;
}
</style>