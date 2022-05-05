<script setup>
    import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class="m-4 text-white">
        <div class="bg-slate-700 p-4 pt-2 pb-2 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2">Previous workouts</h2>
            <ul>
                <li class="bg-slate-600 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 1</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>
                
                <li class="bg-slate-600 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 2</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>

                <li class="bg-slate-600 p-2 rounded-md mb-3 flex justify-between">
                    <div><p>Workout 3</p></div>
                    <div class="mr-2"><i class="fa-solid fa-angle-right"/></div>
                </li>
            </ul>
        </div>

        <br>

        <div class="bg-slate-700 p-4 pt-2 rounded-lg">
            <h2 class="text-2xl font-semibold mb-2">Progress</h2>
            <p>No data</p>
        </div>

        <br>

        <div class="accentcolor flex p-3 rounded-lg w-36 justify-between whitespace-nowrap">
            <div><p>New workout</p></div>
            <div><i class="fa-solid fa-plus"/></div>
        </div>
    </div>

    <Navbar/>
</template>

<style>
    body{
        background-color: #1b2733;
    }
    #app{
        padding: 0;
        margin: 0;
        font-family: 'Poppins';
    }

    .accentcolor{
        background-color: #e47a7e;
    }
</style>