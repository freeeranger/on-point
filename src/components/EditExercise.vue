<script setup>
import { ref } from "vue";

let data = ref();

const props = defineProps({
    data: {
        type: Object,
        default: null,
    },
});

const emits = defineEmits(["closeEvent"]);

data.value = props.data;

function addSet() {
    data.value.sets.push({
        weight: "",
        reps: "",
    });
}
</script>

<template>
    <div class="fixed top-0 left-0 full z-10 bg-black bg-opacity-60"></div>

    <div class="text-white fixed m-0 p-0 container z-20">
        <div class="flex justify-center align-center">
            <div class="bg-primary rounded-lg drop-shadow-md m-4 w-full ml-8 mr-8">
                <div class="p-2">
                    <div class="tracking-wider text-xl mb-1 flex">
                        <span class="font-bold">Type:</span>
                        <input
                            class="text-base ml-2 mr-1 w-full inline px-1 py-0 text-white placeholder-gray-400 transition duration-100 ease-in-out bg-secondary rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="text"
                            v-model="data.name"
                        />
                    </div>
                    <hr class="border-slate-500 mb-1" />
                    <div v-for="(a, index) in data.sets">
                        <div class="tracking-wider mb-1">
                            <span class="text-xl font-bold">Set {{ index + 1 }}</span>
                        </div>
                        <div class="tracking-wider relative text-xl mb-1 flex">
                            <span class="font-bold text-base">Weight:</span>
                            <input
                                class="ml-2 text-base mr-1 w-full inline px-1 py-0 text-white placeholder-gray-400 transition duration-100 ease-in-out bg-secondary rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="number"
                                placeholder="95"
                                v-model="data.sets[index].weight"
                            />
                            <p class="absolute right-2 bottom-0.5 text-sm">kg</p>
                        </div>
                        <div class="tracking-wider relative text-xl mt-2 flex mb-4">
                            <span class="font-bold text-base">Reps:</span>
                            <input
                                class="ml-2 text-base mr-1 w-full inline px-1 py-0 text-white placeholder-gray-400 transition duration-100 ease-in-out bg-secondary rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="number"
                                placeholder="5"
                                v-model="data.sets[index].reps"
                            />
                        </div>
                    </div>
                </div>

                <button
                    class="ml-2 mb-2 mt-2 font-semibold inline px-2 py-1 transition duration-100 ease-in-out bg-accent-gradient rounded-md shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="addSet"
                >
                    Add Set
                </button>

                <button
                    class="bg-accent-gradient ml-2 mb-2 mt-2 font-semibold inline px-2 py-1 transition duration-100 ease-in-out rounded-md shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    @click="$emit('closeEvent')"
                >
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.sus {
    display: inline-block;
    position: relative;
    left: -30px;
    vertical-align: middle;
    text-align: right;
}

.full {
    width: 100vw;
    height: 100vh;
}
.container {
    min-width: 100vw;
    min-height: 100vh;

    top: 10%;
    left: 0;
}
</style>
