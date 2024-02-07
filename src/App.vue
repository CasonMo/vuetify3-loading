<script setup>
import {getCurrentInstance, ref} from 'vue'
const {proxy} = getCurrentInstance()

function handleShow() {
  proxy.$loading.show()
}

function handleHide() {
  proxy.$loading.hide()
}

let range = ref({ start: null, end: null })

// variant options: 'underlined' | 'outlined' | 'filled' | 'solo' | 'plain'
</script>

<template>
  <v-app id="app">
    <button style="z-index: 99999" @click="handleShow">show button</button>
    <button style="z-index: 99999" @click="handleHide">hide button</button>
  </v-app>
</template>

<style scoped>
</style>
