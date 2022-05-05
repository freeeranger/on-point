<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <router-view/>
    <Navbar />
</template>

<style>
body {
    background-color: #1b2733;
}
#app {
    padding: 0;
    margin: 0;
    font-family: "Poppins";
}

.accentcolor {
    background-color: #e47a7e;
}
</style>
