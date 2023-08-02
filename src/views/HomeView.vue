<template>
  <main>
    <TheWelcome />
    <input v-model="text" type="text" />
    <button @click="Connect">建立连接</button>
  </main>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
import Ably from 'ably'
import TheWelcome from '../components/TheWelcome.vue'
const text = shallowRef('')
let realtime
const Connect = () => {
  console.log(text.value)
  fetch('/api/auth?id='+text).then(res => {
    console.log(res)
    // realtime = new Ably.Realtime({
    //   authUrl: '/api/auth',
    //   authMethod: 'POST',
    //   authParams: 
    // })
  })
}
</script>

