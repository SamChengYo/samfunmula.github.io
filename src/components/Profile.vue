<template>
    <div class="intro">
        <img src="https://via.placeholder.com/150" alt="profile picture" class="intro_img">
        <span class="word">程尤欣</span>
    </div>
</template>

<script setup lang="ts" name="Profile">

</script>

<style scoped>
    .intro{
        border: 3px solid rgb(99, 162, 187);
        border-radius: 20px;
        width: 1000px;
        height: 250px;
        margin: auto;
        margin-top: 30px;
        padding: 10px;
        display: flex;
    }
    .intro_img{
        border-radius: 100%;
        width: 110px;
        height: 110px;
    }
    .word{
        font-size: 30px;
        font-family: "華文隸書", "STLiti", cursive;
    }
</style>