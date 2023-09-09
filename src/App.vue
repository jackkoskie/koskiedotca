<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import NavBar from './components/NavBar.vue'
</script>

<style lang="scss" scoped></style>
