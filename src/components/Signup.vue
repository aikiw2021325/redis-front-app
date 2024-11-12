<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl mb-4">アカウント作成</h2>
        <form @submit.prevent="handleSignup" class="w-1/2 flex flex-col gap-4">
            <input v-model="username" type="text" placeholder="ユーザー名" class="p-2 border" />
            <input v-model="password" type="password" placeholder="パスワード" class="p-2 border" />
            <input v-model="email" type="mail" placeholder="メールアドレス" class="p-2 border" />
            <button type="submit" class="p-2 bg-green-500 text-white">アカウント作成</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { createUser } from '../services/authService';

export default defineComponent({
    setup() {
        const username = ref('');
        const password = ref('');
        const email = ref('');

        const handleSignup = async () => {
            try {
                const user = { username: username.value, password: password.value, email: email.value };
                await createUser(user);
                alert('アカウントが作成されました');
            } catch (error) {
                alert('アカウント作成に失敗しました');
            }
        };

        return {
            username,
            password,
            email,
            handleSignup,
        };
    },
});
</script>