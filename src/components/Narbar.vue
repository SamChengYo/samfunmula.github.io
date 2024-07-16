<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="#">
        <img src="https://yt3.ggpht.com/yti/ANjgQV-qWGVzevyDMD5MBy0mg2_xiP8GgB8MlvrITD7e7gCRoHM=s88-c-k-c0x00ffffff-no-rj" class="navbar-img">
      </router-link>
      <router-link class="navbar-brand">個人簡介</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          <router-link class="nav-link" to="/project">Project</router-link>
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts" name="Navbar">
</script>

<style scoped>
  .navbar-img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }
</style>
