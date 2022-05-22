<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

let offset = ref(2);

const route = useRoute();
watch(route, () => {
    switch (route.name) {
        case "progress":
            offset.value = 0;
            break;
        case "history":
            offset.value = 1;
            break;
        case "home":
            offset.value = 2;
            break;
        case "new-workout":
            offset.value = 3;
            break;
        case "options":
            offset.value = 4;
            break;
    }
});
</script>

<template>
    <div class="navbar fixed bottom-0 left-0 w-full bg-bg">
        <ul class="text-center h-full flex flex-grow justify-center flex-row items-center text-lg text-white">
            <li class="w-full pt-4 pb-4">
                <FaIcon icon="rocket" class="p-3" @click="$router.push({ name: 'progress' })" />
            </li>
            <li class="w-full pt-4 pb-4">
                <FaIcon icon="dumbbell" class="p-3" @click="$router.push({ name: 'history' })" />
            </li>
            <li class="w-full pt-4 pb-4">
                <FaIcon icon="house" class="p-3" @click="$router.push({ name: 'home' })" />
            </li>
            <li class="w-full pt-4 pb-4">
                <FaIcon icon="circle-plus" class="p-3" @click="$router.push({ name: 'new-workout' })" />
            </li>
            <li class="w-full pt-4 pb-4">
                <FaIcon icon="cog" class="p-3" @click="$router.push({ name: 'options' })" />
            </li>
        </ul>
    </div>

    <div class="bg-accent-gradient w-1/5 h-1 rounded-t-md fixed bottom-0 marker" :style="'left:' + offset * 20 + '%'"></div>
</template>

<style lang="scss" scoped>
.navbar {
    height: 3.8rem;
}

.marker {
    transition: left 0.2s;
}
</style>
