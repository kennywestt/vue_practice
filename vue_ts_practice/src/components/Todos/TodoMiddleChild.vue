<!-- 중간 자식 컴포넌트 
이 TodoMiddleChild 컴포넌트는 theme 데이터를 사용하지 않고,
그저 손자 컴포넌트를 렌더링만 해준다 (Props Drilling 제거 확인용)
-->

<script setup lang="ts">
import TodoDeepGrandChild from './TodoDeepGrandChild.vue';
</script>

<template>
    <div class="middle-child-box">
        <h3>중간 자식 컴포넌트 (Middle Child)</h3>
        <p>이 컴포넌트는 theme Props를 직접 전달받지 않는다</p>
        <TodoDeepGrandChild/>
    </div>
</template>

<style scoped>
.middle-child-box {
  padding: 12px;
  border: 1px dashed #666;
  border-radius: 6px;
  background-color: #f0f0f0;
}
</style>