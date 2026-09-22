// Inteface는 객체의 구조와 타입을 정의하는 설계도이다
// 어떤 속성과 메서드를 가져야 하는지 명시

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


export interface ApiTooResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}