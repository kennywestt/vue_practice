<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits<{
    (e: 'add', text: string): void
}>()

const todoText = ref<string>("")

const handlelAdd = () : void => {
    if (!todoText.value.trim()) return
    emit('add', todoText.value)
    todoText.value = ""
}
</script>

<template>
    <div class="input-box">
        <input
            v-model="todoText"
            @keyup.enter="handlelAdd"
            placeholder="할 일을 입력하세요"
        />
        <button @click="handlelAdd">추가</button>
    </div>
</template>

<style scoped>
.input-box {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}
input {
    flex:1;
    padding: 8px;
}
button {
    padding: 8px 16px;
    cursor: pointer;
}
</style>