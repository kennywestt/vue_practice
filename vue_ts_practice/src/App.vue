<script setup lang="ts">
import { ref } from "vue";
import type { Todo } from "./types/todo";
const todoText = ref<string>("");
const todos = ref<Todo[]>([]);

const addTodo = () : void => {
  if (!todoText.value.trim()) return
  
  const newTodo: Todo = {
    id: Date.now(),
    text: todoText.value,
    completed: false,
  }
  todos.value.push(newTodo);
  todoText.value = "";
}

const toggleTodo = (id: number) : void => {
  const target = todos.value.find(t=> t.id === id)
  if (target) {
    target.completed = !target.completed
  }
}
</script>

<template>
  <main class="container">
    <h2> Vue 3, 타입스크립트 학습</h2>

    <div class="input-box">
      <input
        v-model="todoText"
        @keyup.enter="addTodo"
        placeholder="할 일을 입력하세요"
      />
      <button @click="addTodo">추가</button>
    </div>
    <ul>
      <li v-for="todo in todos"
        :key="todo.id"
        @click="toggleTodo(todo.id)"
        :class="{done: todo.completed}"
      >
        {{ todo.text }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
  .container {
    padding: 20px;
    max-width: 400px;
  }
  .input-box {
    display:flex;
    gap: 8px;
    margin-bottom: 16px;
  }
  input {
    flex:1;
    padding:8px;
  }
  button {
    padding: 8px 16px;
    cursor: pointer;
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
  .done {
    text-decoration: line-through;
    color: #888;
  }
</style>
