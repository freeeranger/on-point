<script setup>
import { onMounted, ref } from "vue";

let show = ref([]);

onMounted(() => {
    for(let i = 0; i < 6; i++){
        setTimeout(()=>{
            show.value[i] = true;
        }, i * 75);
    }
});
</script>

<template>
    <div class="m-4 text-white">
        <div class="p-4 pt-2 pb-2">
            <h2 class="text-2xl font-medium mb-2">Options</h2>
            <ul>
                <li :class="show[0] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="user" class="text-base" />
                        </div>
                        <p>Account</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>

                <li :class="show[1] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="palette" class="text-base" />
                        </div>
                        <p>Appearance</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>

                <li :class="show[2] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="clipboard" class="text-base" />
                        </div>
                        <p>Features</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>

                <li :class="show[3] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="bell" class="text-base" />
                        </div>
                        <p>Notifications</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>

                <li :class="show[4] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="lock" class="text-base" />
                        </div>
                        <p>Data & Security</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>

                <li :class="show[5] ? 'opacity-100' : 'opacity-0'" class="fade-in bg-primary p-2 rounded-xl mb-3 flex justify-between drop-shadow-md items-center">
                    <div class="flex items-center">
                        <div class="bg-accent-gradient w-10 h-10 rounded-xl mr-2 flex items-center justify-center">
                            <FaIcon icon="circle-info" />
                        </div>
                        <p>About</p>
                    </div>
                    <div class="mr-4"><FaIcon icon="angle-right" /></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
