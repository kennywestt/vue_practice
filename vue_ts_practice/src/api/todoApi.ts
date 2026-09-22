// axios 인스턴스를 새성하고, REST API 호출 함수를 모아둔다
import axios from "axios";
import type { Todo, ApiTooResponse } from "../types/todo";

// Axios 기본 인스턴스 설정
const api = axios.create({
    baseURL : `https://jsonplaceholder.typicode.com`,
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json'
    }
})

// REST API 요청 함수
export const todoApi = {
    // GET: Todo 목록 조회 (상위 5개만)
    getTodos: async (): Promise<Todo[]> => {
      const response = await api.get<ApiTooResponse[]>(`/todos?_limit=5`)
      return response.data.map((item => ({
        id: item.id,
        text: item.title,
        completed: item.completed
      })))
    },
  
    // POST: 새 Todo 생성
    createTodo: async (text: string): Promise<Todo> => {
      const response = await api.post<ApiTooResponse>(`/todos`, {
        title: text, // JSONPlaceholder는 text 대신 title 필드 사용
        completed: false
      })
      console.log(response.data, `${text} 추가`,)
      
      return {
        id: response.data.id,
        text: response.data.title || text,
        completed: false
      }
      
    },


    // PATCH : Todo 완료 상태 토글
    toggleTodo: async(id: number, completed: boolean): Promise<void> =>{
        await api.patch(`/todos/${id}`, {completed})
        console.log(`할일ID : ${id}, 완료`)
    },

    // DELETE : Todo 삭제
    deleteTodo: async (id:number): Promise<void> => {
        await api.delete(`/todos/${id}`)
        console.log(`할일ID : ${id}, 삭제`)
    }
}

