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
let realtime: Ably.Realtime
let channel: Ably.Types.RealtimeChannelCallbacks
const Connect = () => {
  console.log(text.value);
  (!realtime)&&fetch('/api/auth',
  {
    method: 'post',
    body: JSON.stringify({
      clientId:text.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    console.log(res)
    realtime = new Ably.Realtime({
      authUrl: '/api/auth',
      authMethod: 'POST',
      authParams: res,
    })
    console.log(realtime)
    channel = realtime.channels.get('annonce')
    console.log(channel)
    channel.attach((e) => {
      console.log('"chatroom" exists and is now available globally in every datacenter');
    })
    channel.on('detached', function(stateChange) {
      console.log('detached from the channel ' + channel.name);
    })
    channel.subscribe(function(message) {
      console.log(message);
    });
  })
  channel&&channel.publish('example', text.value);
}
</script>

