<template>
    <div class="intro">
        <div class="intro_content">
            <div class="intro_text">
                <img src="https://via.placeholder.com/150" alt="profile picture" class="intro_img">
                <h1 class="word">程尤欣</h1>
                <h5 class="word">國立中山大學 資訊管理學系</h5>
            </div>
            <p>我畢業於中山大學資管系，擅長使用python。我是一個善於溝通協作、負責任和有耐心的人。善於導入Hugging Face上的開源模型，其中包括了大語言模型、影響辨識等。</p>
        </div>
    </div>
</template>
<script setup lang="ts" name="Profile">

</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .intro {
        border: 3px solid rgb(99, 162, 187);
        border-radius: 20px;
        width: 1000px;
        height: 250px;
        margin: auto;
        margin-top: 30px;
        padding: 10px;
        display: flex;
    }
    .intro_img {
        border-radius: 100%;
        width: 110px;
        height: 110px;
        float: left;
    }
    .word {
        font-family: "華文隸書", "STLiti", cursive;
        margin-left: 130px;
        margin-top: 5px;
    }
    .intro_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }
    .intro_text {
        padding: 10px;
        border-radius: 10px;
    }
    .intro_content p {
        font-family: "華文隸書", "STLiti", cursive;
        margin-top: 10px;
        font-size: 20px;
        margin: 0 3px 3px 10px;
    }
</style>
