import { defineStore } from "pinia";
import { ref,computed } from 'vue'
import type { Todo } from "@/types/todo";

export const useTodoStore = defineStore('todo', () => {
    // State (반응형 상태)
    const todos = ref<Todo[]>([])

    // Getters (계산된 속성)
    const totalCount = computed(()=> todos.value.length)
    const completedCount = computed(
        () => todos.value.filter((t)=> t.completed).length
    )

    // Actions (상태 변경 및 비동기 로직)
    const addTodo = (text: string): void => {
        if (!text.trim()) return
        todos.value.push({
            id: Date.now(),
            text,
            completed: false
        })
    }

    const toggleTodo = (id: number): void => {
        const target = todos.value.find((t)=> t.id === id)
        if (target) {
            target.completed = !target.completed
        }
    }

    const removeTodo = (id : number): void => {
        todos.value = todos.value.filter((t)=> t.id !== id)
    }

    return {
        todos,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        removeTodo
    }
})