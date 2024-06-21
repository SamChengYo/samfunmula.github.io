<template>
  <Narbar></Narbar>
  <Profile></Profile>
</template>

<script lang="ts">
  import Narbar from './components/Narbar.vue'
  import Profile from './components/Profile.vue'

  export default {
        name: 'App', //組件名
        components:{Narbar,Profile}
    }
</script>

<style>

</style>