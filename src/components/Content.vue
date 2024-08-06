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
                        我熟練使用 HTML、CSS 和 JavaScript，具備全面的前端開發技能。特別是在使用 Vue.js 方面擁有豐富的經驗。此外，我還擅長使用 Bootstrap 和 Tailwind 等 CSS 框架，能夠快速開發具有響應式設計和現代化界面的應用程序。我能夠靈活運用這些工具和技術來實現美觀且高效的用戶界面，並根據需求進行自定義和優化。
                        <div class="image-row">
                            <img src="https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png" alt="image 1" class="bottom-image">
                            <img src="https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg" style="width: 50px;height: 50px;scale: 1.25;" alt="image 2" class="bottom-image">
                            <img src="https://img.favpng.com/24/18/1/javascript-clip-art-openclipart-logo-number-png-favpng-TKTejrUWVBm97kPnKRaWcpQs4.jpg" alt="image 3" style="width: 45px;" class="bottom-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="image 4" class="bottom-image">
                            <img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" alt="image 4" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'backend'" class="text-content">
                        我熟練使用 Python 和 Node.js 這些程式語言，並擅長利用 FastAPI 和 FlaskAPI 等框架來開發高效的 API。對於資料庫，我有使用 MySQL 和 MongoDB 的經驗，並且熟悉如何在不同的場景中選擇合適的資料庫系統。此外，我還有使用 MinIO 來存取資料的經驗，這使我能夠在分佈式環境中高效地處理和存儲大量數據。
                        <div class="image-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/160px-Python-logo-notext.svg.png" alt="image 1" class="bottom-image">
                            <img src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" alt="image 2" class="bottom-image">
                            <img src="https://futuresolutionsonline.co.uk/wp-content/uploads/2023/04/mySQL-logo.png" alt="image 4" class="bottom-image">
                            <img src="https://lh5.googleusercontent.com/proxy/cEIdUslCtwNX_v4e4p8kCcHNoC2sojBxv4M6ahBfNhS2KKQDQ9pRs_nOand8y2W6BoxZa5nXotgHxuRaesshKscFOZHH5nK4jig3" alt="image 4" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'ai'" class="text-content">
                        我擅長於利用 Huggingface 上的各種開源模型進行 AI 實作，擁有豐富的經驗來設計、訓練和調整模型以滿足具體需求。此外，我精通 TensorFlow 和 PyTorch 等深度學習框架，能夠熟練使用這些工具進行大規模模型的開發和部署。也會使用Yolo進行影像辨識。
                        <div class="image-row">
                            <img src="https://workable-application-form.s3.amazonaws.com/advanced/production/61557f91d9510741dc62e7f8/c3635b59-a3d2-444a-b636-a9d0061dcdde" alt="image 1" class="bottom-image">
                            <img src="https://pbs.twimg.com/profile_images/1103339571977248768/FtFnqC38_400x400.png" alt="image 2" class="bottom-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuyoHHKTSgCq1UkTS8Z56cox72_rUDQbB1Dz96_s9rNRORIjMjIOkx9iN6Xr4Xiqov9UQ&usqp=CAU" alt="image 3" class="bottom-image">
                        </div>
                    </div>
                    <div v-if="currentContent === 'other'" class="text-content">
                        我熟悉各種開發工具和技術，包括 Git、Docker、Kubernetes 等，這些技能使我能夠在不同的開發環境中高效地協作和管理項目。我擁有在多種平台上開發應用的經驗，能夠利用容器化技術和集群管理來部署和擴展應用程序。
                        <div class="image-row">
                            <img src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="image 1" class="bottom-image">
                            <img src="https://miro.medium.com/v2/resize:fit:594/1*MLFxdoY6ImiTghX9l0lDTA.png" alt="image 2" class="bottom-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99vkXlOXicRs8PtMeSG4KiyWpULvHdG2QUA&s" alt="image 3" class="bottom-image">
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
