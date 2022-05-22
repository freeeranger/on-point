<script setup>
import { ref } from "vue";
import { supabase } from "../supabase.js";
import { useRouter } from "vue-router";

let email = ref("");
let password = ref("");

let loading = ref(false);

const router = useRouter();

supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
        router.push({ name: "home" });
    }
});

const signup = async () => {
    try {
        loading.value = true;
        const { user, session, error } = await supabase.auth.signUp({
            email: email.value.trim(),
            password: password.value.trim(),
        });
        if (error) throw error;
        router.push({ name: "home" });
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};

const signin = async () => {
    try {
        loading.value = true;
        const { user, session, error } = await supabase.auth.signIn({
            email: email.value.trim(),
            password: password.value.trim(),
        });
        if (error) throw error;
        router.push({ name: "home" });
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="m-4 text-white">
        <div class="p-4 pt-2 pb-2 rounded-lg drop-shadow-md">
            <h2 class="text-2xl font-semibold mb-2">Authenticate</h2>
            <ul>
                <input
                    class="block w-full px-3 py-2 text-white bg-primary transition duration-100 ease-in-out rounded-xl shadow-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="text"
                    placeholder="Email"
                    v-model="email"
                />

                <input
                    class="mt-2 block w-full px-3 py-2 text-white bg-primary transition duration-100 ease-in-out rounded-xl shadow-sm focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                />

                <button
                    class="mt-2 font-semibold inline px-4 py-2 transition duration-100 ease-in-out bg-accent-gradient rounded-xl shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="signup"
                >
                    Sign up
                </button>

                <button
                    class="mt-2 ml-2 font-semibold inline px-4 py-2 transition duration-100 ease-in-out bg-accent-gradient rounded-xl shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="signin"
                >
                    Sign in
                </button>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
