<script setup>
import EditExercise from "../components/EditExercise.vue";
import { ref } from "vue";

let workout = ref({
    type: "None",
    date: "2022-01-01",
    exercises: [],
});

function addExercise() {
    workout.value.exercises.push({
        name: "",
        sets: [],
    });
    editExercise(workout.value.exercises.length - 1);
}

function edit() {
    console.log("edit");
}

let currentExercise = ref(0);
let popupVisible = ref(false);

function editExercise(index) {
    popupVisible.value = true;
    currentExercise.value = index;
}
</script>

<template>
    <div class="m-4 text-white">
        <div class="p-4 pt-2">
            <h2 class="text-2xl font-medium mb-2">New workout</h2>
            <ul>
                <li class="bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md">
                    <div class="ml-1">
                        <p><span class="font-semibold">Type:</span> {{ workout.type }}</p>
                    </div>
                    <div class="mr-2">
                        <span @click="edit"><FaIcon icon="pencil" /></span>
                    </div>
                </li>

                <li class="bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md">
                    <div class="ml-1">
                        <p><span class="font-semibold">Date:</span> {{ workout.date }}</p>
                    </div>
                    <div class="mr-2">
                        <span @click="edit"><FaIcon icon="pencil" /></span>
                    </div>
                </li>
            </ul>

            <ul>
                <li class="bg-primary p-2 rounded-xl mt-3 mb-2 flex justify-between drop-shadow-md" v-for="(a, index) in workout.exercises">
                    <div class="ml-1 w-full">
                        <div class="flex justify-between items-center">
                            <p class="font-semibold tracking-wider text-xl mb-1">{{ a.name }}</p>
                            <span @click="editExercise(index)"><FaIcon icon="pencil" class="mr-2 mb-1" /></span>
                        </div>

                        <hr class="border-gray-500 mb-1" />
                        <table class="w-full">
                            <tbody>
                                <tr v-for="(b, index) in a.sets">
                                    <td><span class="text-xs text-gray-300"># </span>{{ index + 1 }}</td>
                                    <td>{{ b.weight }} <span class="text-xs text-gray-300">kg</span></td>
                                    <td>{{ b.reps }} <span class="text-xs text-gray-300">reps</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>

            <button
                class="bg-accent-gradient mt-2 font-semibold inline px-4 py-2 mb-11 transition duration-100 ease-in-out rounded-xl shadow hover:bg-accent focus:border-accent focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                @click="addExercise"
            >
                Add Exercise
            </button>
        </div>
    </div>
    <EditExercise v-if="popupVisible" :data="workout.exercises[currentExercise]" @close-event="() => (popupVisible = false)" />
</template>

<style scoped lang="scss"></style>
