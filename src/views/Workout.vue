<script setup>
import { data } from '../data/data.js';
import { useRoute } from 'vue-router';

const route = useRoute();

const localData = data.value[route.params.id];
const target = route.params.sender;
</script>

<template>
    <div class="m-4 text-white">
        <div class="bg-primary pt-2 pr-4 pl-4 rounded-t-lg drop-shadow-md">
            <div class="flex justify-between items-center mt-1">
                <div class="flex items-center">
                    <div class="text-xl ml-1 mr-4"><router-link :to="{ name: target }"><i class="fa-solid fa-angle-left" /></router-link></div>
                    <h2 class="text-2xl font-semibold">{{localData.date}}</h2>
                </div>
                <i class="fa-solid fa-pencil" />
            </div>
        </div>

        <div class="bg-primary p-4 pt-0 pb-2 rounded-b-lg drop-shadow-md container">
            <div class="mt-2 ml-1">
                <p><span class="font-semibold">Type:</span> {{localData.type}}</p>
            </div>

            <div>
                <ul>
                    <li class="bg-secondary p-2 rounded-md mt-3 mb-2 flex justify-between drop-shadow-md" v-for="a in localData.workouts">
                        <div class="ml-1 w-full">
                            <p class="font-bold tracking-wider text-xl mb-1">{{a.name}}</p>
                            <hr class="border-slate-500 mb-1" />
                            <table class="w-full">
                                <tbody>
                                    <tr v-for="(b, index) in a.sets">
                                        <td><span class="text-xs text-gray-300"># </span>{{index}}</td>
                                        <td>{{b.weight}} <span class="text-xs text-gray-300">kg</span></td>
                                        <td>{{b.reps}} <span class="text-xs text-gray-300">reps</span></td>
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
.container{
    height: calc(100vh - 3.8rem - 4.6rem);
    overflow: scroll;
}

td {
    padding-bottom: 0.5rem;
    color: white;
}
</style>
