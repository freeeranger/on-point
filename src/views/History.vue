<script setup>
import {data} from '../data/data.js';
</script>

<template>
    <div class="m-4 text-white">
        <div class="bg-primary p-4 pt-2 pb-2 rounded-lg drop-shadow-md">
            <h2 class="text-2xl font-semibold mb-2">Previous workouts</h2>
            <ul>
                <li class="bg-secondary p-2 rounded-md mb-3 flex justify-between drop-shadow-md" v-for="(workout, index) in data">
                    <div class="ml-1"><p><span class="font-semibold">{{workout.date}}:</span> {{workout.type}}</p></div>
                    <div class="mr-2"><router-link :to="{ name: 'workout', params: {id: index, sender: 'history'} }"><i class="fa-solid fa-angle-right" /></router-link></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
