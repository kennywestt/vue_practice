<script setup lang="ts">
import { ref } from "vue";
import type { Todo } from "../../types/todo";
import TodoItem from "./TodoItem.vue";
import TodoInput from "./TodoInput.vue";

// const todoText = ref<string>("");
// 전체 Todo 목록 상태관리
const todos = ref<Todo[]>([]);

// 자식(TodoInput)이 emit('add', text)로 보낸 신호 수신
const handleAddTodo = (text: string) : void => {
 const newTodo: Todo = {
    id: Date.now(),
    text,
    completed: false
 }
 todos.value.push(newTodo)
}

const handleToggleTodo = (id: number) : void => {
  const target = todos.value.find(t => t.id === id)
  if (target) {
    target.completed = !target.completed
  }
}

const handleDeleteTodo = (id: number) : void => {
    todos.value = todos.value.filter(t => t.id !== id)
}

</script>

<template>
  <main class="container">
    <h2>Vue 3, 타입스크립트 학습</h2>
    <TodoInput @add="handleAddTodo" />
    <ul>
      <TodoItem
      v-for="todoItem in todos"
      :key="todoItem.id"
      :todo="todoItem"
      @toggle="handleToggleTodo"
      @remove="handleDeleteTodo"
      />
    </ul>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

</style>