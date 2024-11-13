<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl mb-4">ログイン</h2>
        <form @submit.prevent="handleLogin" class="w-1/2 flex flex-col gap-4">
            <input v-model="username" type="text" placeholder="ユーザー名" class="p-2 border" />
            <input v-model="password" type="password" placeholder="パスワード" class="p-2 border" />
            <button type="submit" class="p-2 bg-blue-500 text-white">ログイン</button>
        </form>
        <router-link to="/" class="py-2 text-blue-500">ホームページ</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '../services/authService';


export default defineComponent({
    setup() {
        const username = ref('');
        const password = ref('');

        const handleLogin = async () => {
            try {
                const user = { username: username.value, password: password.value };
                await login(user);
                alert('ログインに成功しました');
            } catch (error:any) {
                alert('ログインに失敗しました');
            }
        };

        return {
            username,
            password,
            handleLogin,
        };
    },
});
</script>