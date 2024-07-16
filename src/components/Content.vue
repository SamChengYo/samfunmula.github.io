<template>
    <div class="container">
        <div class="skill_share">
            <img src="https://via.placeholder.com/300x200" alt="profile picture" class="personal_image">
            <div class="MultiPageCard">
                <button class="button-list" :class="{ active: currentContent === 'frontend' }" @click="showContent('frontend')">網頁前端</button>
                <button class="button-list" :class="{ active: currentContent === 'backend' }" @click="showContent('backend')">網頁後端</button>
                <button class="button-list" :class="{ active: currentContent === 'ai' }" @click="showContent('ai')">AI實作</button>
                <button class="button-list" :class="{ active: currentContent === 'other' }" @click="showContent('other')">其他技術</button>
                <div class="content">
                    <div v-if="currentContent === 'frontend'" class="text-content">
                        我熟練使用 HTML、CSS 和 JavaScript，並且擅長使用 Vue.js 和 React 開發前端應用。
                        <div class="image-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 2" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 3" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 4" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'backend'" class="text-content">
                        我熟練使用 Python、Node.js 和 Java 這些程式語言，擅長用 FAST API 、 Express 等框架開發 API ，資料庫使用過 MySQL、MongoDB，也有用過 Amazon S3、ElasticSearch 來存取資料。
                        <div class="image-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 2" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 4" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'ai'" class="text-content">
                        我有使用 TensorFlow 和 PyTorch 進行深度學習模型訓練的經驗，並且熟悉機器學習的各種技術和方法。
                        <div class="image-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 2" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'other'" class="text-content">
                        我熟悉各種開發工具和技術，包括 Git、Docker、Kubernetes 等，並且有在不同平台上開發應用的經驗。
                        <div class="image-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 2" class="bottom-image">
                            <img src="https://via.placeholder.com/100" alt="image 3" class="bottom-image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact" id="contact">
            <button class="contact-box" @click="navigateTo('https://www.facebook.com/')">Facebook<ion-icon name="logo-facebook" class="contact-icon"></ion-icon></button>
            <button class="contact-box" @click="showAlert('resume')">履歷<ion-icon name="document-outline" class="contact-icon"></ion-icon></button>
            <button class="contact-box" @click="navigateTo('https://github.com/samfunmula')">GitHub<ion-icon name="logo-github" class="contact-icon"></ion-icon></button>
            <button class="contact-box" @click="showAlert('gmail')">Gmail<ion-icon name="mail-outline" class="contact-icon"></ion-icon></button>
            <button class="contact-box" @click="navigateTo('https://www.instagram.com/solitaire_0911/')">IG<ion-icon name="logo-instagram" class="contact-icon"></ion-icon></button>
            <button class="contact-box" @click="navigateTo('https://www.linkedin.com/in/%E5%B0%A4%E6%AC%A3-%E7%A8%8B-a10948225/')">LinkedIn<ion-icon name="logo-linkedin" class="contact-icon"></ion-icon></button>
        </div>
        <br>
        <p>Copyright © 2024 Sam Cheng</p>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    const currentContent = ref('frontend');

    function showContent(content: string) {
        currentContent.value = content;
    }

    function navigateTo(url: string) {
        window.open(url, '_blank');
    }

    function showAlert(type: string) {
        if (type === 'resume') {
            alert('履歷功能尚未實作');
        } else if (type === 'gmail') {
            alert('Gmail : kobejames5566@gmail.com');
        }
    }
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
        height: 200px;
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
        transition: background-color 0.3s, color 0.3s;
    }

    .button-list.active {
        background-color: #a09be7;
        color: white;
    }

    .button-list:hover {
        transform: scale(1.05);
    }

    .content {
        border: 1px solid black;
        height: 82%;
        width: 100%;
        margin-top: 10px;
        border-radius: 8px;
        padding: 10px;
        position: relative;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .text-content {
        font-size: 16px;
        line-height: 1.6;
        color: #333;
        padding: 10px;
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
        transition: transform 0.3s;
    }

    .bottom-image:hover {
        transform: scale(1.1);
    }

    .contact {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
        width: 1024px;
        margin: 40px auto 0;
    }

    .contact-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        border-radius: 8px;
        height: 150px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        background-color: rgb(248, 245, 245);
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }

    .contact-box:hover {
        background-color: rgb(204, 204, 204);
        transform: scale(1.05);
    }

    .contact-icon {
        height: 38px;
        width: 38px;
        margin-left: 5px;
    }

    p {
        text-align: center;
    }
</style>
