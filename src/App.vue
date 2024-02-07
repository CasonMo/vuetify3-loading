<script setup>
import {getCurrentInstance, ref} from 'vue'
const {proxy} = getCurrentInstance()
proxy.$loading.show()
// proxy.$loading.hide()

let range = ref({ start: null, end: null })

// variant options: 'underlined' | 'outlined' | 'filled' | 'solo' | 'plain'
</script>

<template>
  <v-app id="app">
  </v-app>
</template>

<style scoped>
</style>
