<template>
    <div class="container">
        <div class="skill_share">
            <img src="https://via.placeholder.com/300x200" alt="profile picture" class="personal_image">
            <div class="MultiPageCard">
                <button class="button-list">網頁前端</button>
                <button class="button-list">網頁後端</button>
                <button class="button-list">AI實作</button>
                <button class="button-list">其他技術</button>
                <div class="content">
                    我熟練使用 Python、Node.js 和 Java 這些程式語言，擅長用 FAST API 、 Express 等框架開發 API ，資料庫使用過 MySQL、MongoDB，也有用過 Amazon S3、ElasticSearch 來存取資料。
                    <div class="image-row">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                        <img src="https://via.placeholder.com/100" alt="image 2" class="bottom-image">
                        <img src="https://via.placeholder.com/100" alt="image 3" class="bottom-image">
                        <img src="https://via.placeholder.com/100" alt="image 4" class="bottom-image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" name="Content" setup>

</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        margin: auto;
        margin-top: 25px;
    }

    .simple-project {
        border: 1px solid black;
        width: 75%;
        height : 200px
    }

    .skill_share {
        display: flex;
        height: 340px;
        margin-top: 40px;
        width: 1024px;
        margin-left: 140px;
    }

    .personal_image {
        border-radius: 8px;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 50%;
        margin-left: -16px;
    }

    .MultiPageCard {
        height: 100%;
        margin-left: 10px;
        width: 50%;
        border-radius: 8px;
    }

    .button-list {
        height: 50px;
        width: 23%;
        border-radius: 8px;
        margin: 0 5px;
    }

    .content {
        border: 1px solid black;
        height: 82%;
        width: 100%;
        margin-top: 10px;
        border-radius: 8px;
        padding: 10px;
        position: relative;
    }

    .image-row {
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: flex;
        justify-content: space-between;
    }

    .bottom-image {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        margin: 0 5px;
    }
</style>
