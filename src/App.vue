<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
    <router-view />
    <Navbar />
</template>

<style lang="scss">
// blue the me
$blue-primary: #334155;
$blue-secondary: #475569;
$blue-accent: #e47a7e;
$blue-bg: #1b2733;

// dark theme
$dark-primary: #000000;
$dark-secondary: #212121;
$dark-accent: #45119e;
$dark-bg: #0e0e0e;

$next-primary: #262a34;
$next-secondary: #000000;
$next-accent: #b66cff;
$next-bg: #181a20;

// select theme
$primary: $next-primary;
$secondary: $next-secondary;
$accent: $next-accent;
$bg: $next-bg;

.fade-in {
    transition: opacity 0.35s ease-in;
}

html {
    background-color: $bg;
    width: 100%;
    height: 100%;
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

.bg-accent-gradient {
    background: linear-gradient(115deg, #a245ff 0%, #b66cff 51%, #c58aff 100%);
}

.bg-bg {
    background-color: $bg;
}

* {
    -webkit-touch-callout: none !important; // iOS Safari
    -webkit-user-select: none !important; // Safari
    -khtml-user-select: none !important; // Konqueror HTML
    -moz-user-select: none !important; // Old versions of Firefox
    -ms-user-select: none !important; //Internet Explorer/Edge
    user-select: none !important; //Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
}
</style>
