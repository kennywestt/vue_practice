import { ref } from "vue";
import type { Todo } from "../types/todo";

export function useTodo() {
    const todos = ref<Todo[]>([])

    const addTodo = (text: string) => {
        if(!text.trim()) return
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false
        }
        todos.value.push(newTodo)
    }

    const toggleTodo = (id: number): void => {
        const target = todos.value.find(t => t.id === id)
        if(target) {
            target.completed = !target.completed
        }
    }

    const removeTodo = (id:number): void => {
        todos.value = todos.value.filter(t => t.id !== id)
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }

}