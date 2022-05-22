<script setup>
import { data } from "../data/data.js";
</script>

<template>
    <div class="m-4 text-white">
        <div class="p-4 pt-2 pb-2">
            <h2 class="text-2xl font-medium mb-2">Previous workouts</h2>
            <ul>
                <li class="bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center" v-for="(workout, index) in data">
                    <div class="flex">
                        <div class="flex items-center mr-1">
                            <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                                <FaIcon icon="dumbbell" class="text-base" />
                            </div>
                        </div>
                        <div>
                            <p class="text-gray-400 text-xs">{{ workout.date }}</p>
                            <p class="font-medium">{{ workout.type }}</p>
                        </div>
                    </div>
                    <div class="mr-4">
                        <FaIcon icon="angle-right" @click="$router.push({ name: 'workout', params: { id: index, sender: 'history' } })" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
