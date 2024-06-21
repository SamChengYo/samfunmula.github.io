<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://yt3.ggpht.com/yti/ANjgQV-qWGVzevyDMD5MBy0mg2_xiP8GgB8MlvrITD7e7gCRoHM=s88-c-k-c0x00ffffff-no-rj" class = 'navbar-img'>
        </a>
        <a class="navbar-brand" href="#">Profile</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Project</a>
            <a class="nav-link" href="#" @click="console1">Contact</a>
          </div>
        </div>
      </div>
    </nav>
</template>
  
<script setup lang="ts" name="Narbar">
  function console1() {
    console.log('Contact');
  }
</script>
  
<style scoped>
  .navbar-img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
  }
</style>
  