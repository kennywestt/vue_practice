import { todoApi } from '../api/todoApi'
import {defineStore} from 'pinia'
import {ref} from 'vue'
import type { Todo } from '../types/todo'

export const useTodoApiStore = defineStore('todoApi', () => {
    // State
    const todos = ref<Todo[]>([])
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)

    // Actions (비동기 처리, 에러 핸들링)

    // 목록 불러오기
    const fetchTodos = async (): Promise<void> => {
        isLoading.value = true
        error.value = null

        try{
            const data = await todoApi.getTodos()
            todos.value = data.map((item: any) => ({
                id: item.id,
                text: item.title || item.text,
                completed: item.completed
            }))
        } catch (err:any){
            err.value = 'Todo 목록을 불러오는데 실패하였습니다.'
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    // Todo 추가
    const addTodo = async (text: string): Promise<void> => {
        if(!text.trim()) return
        isLoading.value = true

        try {
            const newTodo = await todoApi.createTodo(text)
            todos.value.unshift(newTodo) // 화면 상단에 추가
        } catch (err) {
            error.value = 'Todo 추가 실패'
        } finally {
            isLoading.value = false
        }
    }

    // Todo 완료 토글
    const toggleTodo = async (id: number): Promise<void> => {
        const target = todos.value.find((t)=> t.id === id)
        if (!target) return

        const previousState = target.completed
        target.completed = !previousState // 낙관적 업데이트 (UI 먼저 변경)

        try {
            await todoApi.toggleTodo(id, target.completed)
        } catch (err) {
            target.completed = previousState // 실패 시 ㅝㄴ복
            error.value = "상태 변경에 실패하였습니다."
        }
    }

    const removeTodo = async(id:number): Promise<void> => {
        try {
            await todoApi.deleteTodo(id)
            todos.value = todos.value.filter((t)=>t.id !==id)
        } catch (err) {
            error.value = "삭제를 실패하였습니다"
        }
    }
    
    return {
        todos,
        isLoading,
        error,
        fetchTodos,
        addTodo,
        toggleTodo,
        removeTodo
    }
})