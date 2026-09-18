<!-- 깊은 손자 컴포넌트 
 중간 과정을 거치지 않고 최상위 부모가 provide한 테마 데이터와 함수를
 바로 inject를 통해 주입받아 사용할 수 있다.
-->
<script setup lang="ts">
import { inject } from 'vue';
import { ThemeKey } from '@/types/injectionKeys';

// 상위에서 provide한 데이터 주입 받기
const themeContext = inject(ThemeKey)

if(!themeContext) {
    throw new Error('ThemeKey가 provide 되지 않음')
}

const { theme, toggleTheme } = themeContext
</script>

<template>
    <div class="grand-child-box" :class="theme">
        <h4>깊은 손자 컴포넌트</h4>
        <p>현재 적용된 테마: <strong>{{ theme }}</strong></p>
        <button @click="toggleTheme">손자 컴포넌트에서 테마 변경</button>
    </div>
</template>

<style scoped>
.grand-child-box {
  padding: 12px;
  border-radius: 6px;
  margin-top: 10px;
  transition: all 0.3s;
}
.grand-child-box.light {
  background-color: #ffffff;
  color: #333;
  border: 1px solid #ccc;
}
.grand-child-box.dark {
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
}
button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>