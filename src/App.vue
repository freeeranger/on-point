<script setup>
    import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class="m-4">
        <div class="bg-gray-100 p-4 pt-2 pb-2 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2">Previous workouts</h2>
            <ul>
                <li class="bg-gray-200 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 1</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>
                
                <li class="bg-gray-200 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 2</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>

                <li class="bg-gray-200 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 3</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>
            </ul>
        </div>

        <br>
        <div class="bg-gray-100 p-4 pt-2 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2">Progress</h2>
            <p>No data</p>
        </div>
    </div>

    <Navbar/>
</template>

<style>
    #app{
        padding: 0;
        margin: 0;
        font-family: 'Poppins';
    }
</style>