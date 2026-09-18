<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
// URL 파라미터 : id 참조
const todoId = route.params.id

</script>

<template>
    <div class="detail-box">
        <h3>Todo 상세 페이지</h3>
        <p>전달받은 Todo ID: <strong>{{ todoId }}</strong></p>
    </div>
</template>

<style scoped>
.detail-box {
  padding: 16px;
  border: 1px solid #42b883;
  border-radius: 8px;
}
</style>