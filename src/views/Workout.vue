<script setup>
import { useRoute } from "vue-router";
import { supabase } from "../supabase.js";
import { ref } from "vue";

const route = useRoute();

const target = route.params.sender;

let data = ref(null);

async function sqlStuff() {
    let { data: userData, error } = await supabase.from("UserData").select();
    data.value = userData.find((user) => user.user == supabase.auth.user().id).data.workouts[route.params.id];
}

sqlStuff();
</script>

<template>
    <div class="m-4 text-white" v-if="data != null">
        <div class="pt-2 pr-4 pl-4">
            <div class="flex justify-between items-center mt-1">
                <div class="flex items-center">
                    <div class="text-xl ml-1 mr-4">
                        <FaIcon icon="angle-left" @click="$router.push({ name: target })" />
                    </div>
                    <h2 class="text-2xl font-semibold">{{ data.date }}</h2>
                </div>
                <FaIcon icon="pencil" />
            </div>
        </div>

        <div class="p-4 pt-0 pb-2 container">
            <div class="mt-2 ml-1">
                <p><span class="font-semibold">Type:</span> {{ data.type }}</p>
            </div>

            <div>
                <ul>
                    <li class="bg-primary p-2 rounded-xl mt-3 mb-2 flex justify-between drop-shadow-md" v-for="a in data.exercises">
                        <div class="ml-1 w-full">
                            <p class="font-bold tracking-wider text-xl mb-1">{{ a.name }}</p>
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
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 3.8rem - 4.6rem);
    overflow: scroll;
}

td {
    padding-bottom: 0.5rem;
    color: white;
}
</style>
