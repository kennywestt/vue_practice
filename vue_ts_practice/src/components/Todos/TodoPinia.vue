<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/useTodoStore';

const todoStore = useTodoStore()

// State와 Getters는 storeToRefs를 통해 구조 분해 (반응성 유지)
const { todos, totalCount, completedCount} = storeToRefs(todoStore)

// Actions는 스토어에서 직접 추출
const {addTodo, toggleTodo, removeTodo} = todoStore
const newTodoText = ref('')

const handleAdd = () => {
    addTodo(newTodoText.value)
    newTodoText.value = ''
}
</script>

<template>
    <div class="pinia-box">
        <h2>Pinia 중앙 상태 관리</h2>

        <!-- Getters 활용-->
         <p>전체 할 일: <strong>{{ totalCount }}</strong></p>
         <p>완료 수: <strong>{{ completedCount }}</strong></p>
    </div>

    <div class="input-group">
        <input
        v-model="newTodoText"
        @keyup.enter="handleAdd"
        placeholder="Pinia로 할 일 추가"
        />
        <button @click="handleAdd">추가</button>
        
        <!-- todo 목록 -->
         <ul>
            <li v-for="item in todos" :key="item.id">
                <span
                    :class="{completed: item.completed}"
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
.pinia-box {
  padding: 16px;
  border: 2px solid #2779bd;
  border-radius: 8px;
  margin-top: 16px;
}
.summary {
  display: flex;
  gap: 16px;
  background-color: #f0f4f8;
  padding: 8px 12px;
  border-radius: 4px;
}
.input-group {
  margin: 12px 0;
  display: inline-block;
  gap: 8px;
}
button {
    margin-left: 8px;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
ul{
    margin-top: 10px;
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
