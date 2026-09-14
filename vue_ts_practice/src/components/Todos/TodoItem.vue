<script setup lang="ts">
import type { Todo } from "../../types/todo";

// Props 타입 정의 (부모가 내려주는 데이터)
defineProps<{
    todo : Todo
}>()

// Emits 타입 정의 (부모에게 보낼 신호)
const emit = defineEmits<{
    (e: 'toggle', id: number): void
    (e: 'remove', id: number): void
}>()
</script>

<template>
    <li class="todo-item">
        <span
            @click="emit('toggle', todo.id)"
            :class="{ done: todo.completed }"
        >
            {{ todo.text }}
        </span>
        <button @click="emit('remove', todo.id)" class="del-btn">삭제</button>
    </li>
</template>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}
span {
    cursor: pointer;
}
.done {
    text-decoration: line-through;
    color: #888;
}
.del-btn {
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
}
</style>