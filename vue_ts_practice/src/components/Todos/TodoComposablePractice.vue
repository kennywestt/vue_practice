<!--
Composable state와 상태 변경 로직을 하나의 독립된 함수로 분리하여
여러 컴포넌트에서 재사용할 수 있도록 만드는
Vue 3 Composition API의 기능

목적 : 컴포넌트 안에 얽혀 있던 비즈니스 로직(데이터 상태, 함수등)
을 외부 .ts 파일(useTodo)로 추출하여 재사용성과 코드 가독성을 높인다
함수 이름은 보통 use로 시작하는 관례 (useTodo, useCounter 등등)
-->
<script setup lang="ts">
import { useTodo } from '../../composables/useTodo.ts';
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

const { todos, addTodo, toggleTodo, removeTodo } = useTodo();

</script>

<template>
    <div class="composable-box">
        <h2>Vue Composables 커스텀 훅</h2>

        <TodoInput @add="addTodo"/>
        <ul>
            <TodoItem
                v-for="todoItem in todos"
                :key="todoItem.id"
                :todo="todoItem"
                @toggle="toggleTodo"
                @remove="removeTodo"
            />
        </ul>
    </div>
</template>