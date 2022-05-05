<script setup>
import { ref } from "vue";
import { watch } from "vue";
import { useRoute } from "vue-router";

let offset = ref(2);

const route = useRoute();
watch(route, () => {
    if(route.name == "home") {
        offset.value = 2;
    } else if(route.name == "options") {
        offset.value = 4;
    }
});
</script>

<template>
    <div class="navbar fixed bottom-0 left-0 w-full accentcolor rounded-t-2xl">
        <ul class="text-center h-full flex flex-grow justify-center flex-row items-center text-xl text-white">
            <li class="w-full pt-4 pb-4">
                <router-link :to="{name: 'home'}"><i class="fa-solid fa-dumbbell" /></router-link>
            </li>
            <li class="w-full pt-4 pb-4">
                <router-link :to="{name: 'home'}"><i class="fa-solid fa-clipboard" /></router-link>
            </li>
            <li class="w-full pt-4 pb-4 text-2xl">
                <router-link :to="{name: 'home'}"><i class="fa-solid fa-house" /></router-link>
            </li>
            <li class="w-full pt-4 pb-4">
                <router-link :to="{name: 'home'}"><i class="fa-solid fa-rocket" /></router-link>
            </li>
            <li class="w-full pt-4 pb-4">
                <router-link :to="{name: 'options'}"><i class="fa-solid fa-cog" /></router-link>
            </li>
        </ul>
    </div>

    <div class="bg-white w-1/5 h-1 rounded-t-md absolute bottom-0 marker" :style="'left:' + (offset * 20) + '%'"></div>
</template>

<style lang="scss" scoped>
.navbar {
    height: 10vh;
}

.marker{
    transition: left 0.2s;
}
</style>
