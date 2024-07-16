<template>
  <Narbar></Narbar>
  <Profile></Profile>
  <Content></Content>
</template>

<script lang="ts">
  import Narbar from './components/Narbar.vue'
  import Profile from './components/Profile.vue'
  import Content from './components/Content.vue';

  export default {
        name: 'App', //組件名
        components:{Narbar,Profile,Content}
    }
</script>

<style>

</style>