<script setup>
import { supabase } from "../supabase.js";
import { onMounted, ref, watch } from "vue";

let data = ref(null);

async function sqlStuff() {
    let { data: userData, error } = await supabase.from("UserData").select();
    data.value = userData.find((user) => user.user == supabase.auth.user().id);
}

let show = ref([]);
let dataAssigned = false;
onMounted(() => {
    watch(data, () => {
        if (data != null && !dataAssigned) {
            for (let i = 0; i < data.value.workoutPresetData.presets.length; i++) {
                setTimeout(() => {
                    show.value[i] = true;
                }, i * 75);
            }
            dataAssigned = true;
        }
    });
});

sqlStuff();
</script>

<template>
    <div class="m-4 text-white" v-if="data != null">
        <div class="p-4 pt-2 pb-0">
            <h2 class="text-2xl font-medium mb-2">New Workout</h2>
            <ul>
                <li
                    :class="show[index] ? 'opacity-100' : 'opacity-0'"
                    class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center"
                    v-for="(workout, index) in data.workoutPresetData.presets"
                >
                    <div class="flex">
                        <div class="flex items-center mr-1">
                            <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                                <FaIcon icon="dumbbell" class="text-base" />
                            </div>
                        </div>
                        <div class="flex items-center">
                            <!--<p class="text-gray-400 text-xs">{{ workout.name }}</p>-->
                            <p class="font-medium">{{ workout.name }}</p>
                        </div>
                    </div>
                    <div class="mr-4">
                        <FaIcon icon="angle-right" @click="$router.push({ name: 'edit-workout', params: { id: index } })" />
                    </div>
                </li>
            </ul>
        </div>

        <div class="p-4 pt-0">
            <button
                class="font-semibold inline px-4 py-2 transition duration-100 ease-in-out bg-accent-gradient rounded-xl shadow hover:bg-accent2 focus:border-accent2 focus:ring-2 focus:ring-white focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                @click="$router.push({ name: 'edit-workout' })"
            >
                Custom Workout
            </button>
        </div>
    </div>
</template>

<style scoped></style>
