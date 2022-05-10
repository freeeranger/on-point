<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <router-view />
    <Navbar />
</template>

<style lang="scss">
// blue theme
$blue-primary: #334155;
$blue-secondary: #475569;
$blue-accent: #e47a7e;
$blue-bg: #1b2733;

// dark theme
$dark-primary: #000000;
$dark-secondary: #212121;
$dark-accent: #45119e;
$dark-bg: #0e0e0e;

// select theme
$primary: $blue-primary;
$secondary: $blue-secondary;
$accent: $blue-accent;
$bg: $blue-bg;

body {
    background-color: $bg;
}
#app {
    padding: 0;
    margin: 0;
    font-family: "Poppins";
}

.bg-primary {
    background-color: $primary;
}

.bg-secondary {
    background-color: $secondary;
}

.bg-accent {
    background-color: $accent;
}
</style>
