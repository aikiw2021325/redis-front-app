<template>
    <div class="flex flex-col items-center">
        <h2 class="text-2xl mb-4">ユーザープロフィール</h2>
        <div v-if="user">
            <p><strong>ユーザー名:</strong> {{ user.username }}</p>
            <p><strong>メール:</strong> {{ user.email }}</p>
            <button @click="handleLogout" class="mt-4 p-2 bg-red-500 text-white">ログアウト</button>
        </div>
        <div v-else>
            <p>ログインしてください。</p>
            <router-link to="/login" class="text-blue-500">ログインページへ</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { getProfile, logout } from '../services/authService'; // ユーザー情報取得とログアウトサービスをインポート
import { useRouter } from 'vue-router';

export default {
    setup() {
        const user = ref(null);
        const router = useRouter();

        // ユーザー情報を取得する
        const fetchUserProfile = async () => {
            try {
                const userData = await getProfile();
                user.value = userData;
            } catch (error) {
                console.log('ユーザー情報の取得に失敗しました', error);
            }
        };

        // ログアウト処理
        const handleLogout = async () => {
            try {
                await logout();
                user.value = null;
                router.push('/login');
            } catch (error) {
                console.log('ログアウトに失敗しました', error);
            }
        };

        onMounted(fetchUserProfile);

        return {
            user,
            handleLogout,
        };
    },
};
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>