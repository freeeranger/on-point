<script setup>
import { ref } from "vue";

let data = ref();

const props = defineProps({
    data: {
        type: Object,
        default: null,
    },
});

const emits = defineEmits(["closeEvent", "deleteEvent"]);

data.value = props.data;

function deleteExercise() {}
</script>

<template>
    <div class="fixed top-0 left-0 full z-10 bg-black bg-opacity-60"></div>

    <div class="text-white fixed m-0 p-0 container z-20">
        <div class="flex justify-center align-center">
            <div class="bg-primary rounded-lg drop-shadow-md m-4 w-full ml-8 mr-8">
                <div class="p-2">
                    <div class="tracking-wider text-xl mb-1 flex">
                        <span class="font-bold">Time:</span>
                        <input
                            class="text-base ml-2 mr-1 w-full inline px-1 py-0 text-white placeholder-gray-400 transition duration-100 ease-in-out bg-secondary rounded-md shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="text"
                            v-model="data.time"
                        />
                    </div>
                </div>

                <div class="flex justify-start">
                    <button
                        class="bg-accent-gradient mx-1 mb-2 mt-2 font-semibold inline px-2 py-1 transition duration-100 ease-in-out rounded-md shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="$emit('closeEvent')"
                    >
                        Close
                    </button>
                </div>
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
