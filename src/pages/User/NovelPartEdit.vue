<template>
    <div>partEdit</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params['novelId'])
console.log(route.params['partId'])
</script>