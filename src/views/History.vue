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
            for (let i = 0; i < data.value.workoutData.workouts.length; i++) {
                setTimeout(() => {
                    show.value[i] = true;
                }, i * 75);
            }
            dataAssigned = true;
        }
    });
});

sqlStuff();

const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
</script>

<template>
    <div class="m-4 text-white" v-if="data != null">
        <div class="p-4 pt-2 pb-2">
            <h2 class="text-2xl font-medium mb-2">Previous workouts</h2>
            <ul>
                <li
                    :class="show[index] ? 'opacity-100' : 'opacity-0'"
                    class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center"
                    v-for="(workout, index) in data.workoutData.workouts"
                >
                    <div class="flex">
                        <div class="flex items-center mr-1">
                            <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                                <FaIcon icon="dumbbell" class="text-base" />
                            </div>
                        </div>
                        <div>
                            <p class="text-gray-400 text-xs">{{ workout.date.split("-")[0] + " " + monthNames[workout.date.split("-")[1] - 1] }}</p>
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
