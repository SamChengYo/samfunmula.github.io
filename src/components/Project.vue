<template>
  <div class="project-page">
    <div class="filters">
      <button v-for="category in categories" :key="category" :class="{ active: category === selectedCategory }" @click="selectCategory(category)">
        {{ category }}
      </button>
    </div>
    <div class="results-count">
      結果數量: {{ filteredProjects.length }}
    </div>
    <div class="project-grid">
      <div v-for="project in filteredProjects" :key="project.title" class="project-card">
        <img :src="project.image" alt="Project Image"  @click="openProject(project.url)" />
        <h3 style="margin-top: 15px;">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
    <!-- <p>Copyright © 2024 Sam Cheng</p> -->
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';

  const categories = ['All', 'Front_End','APP', 'Back_End', 'AI','Extension'];
  const selectedCategory = ref('All');
  const projects = ref([
    {
      title: '租屋網站',
      description: '提供使用者看得懂的內頁查看網站，可判斷胸腔主要標準',
      tags: ['PHP', 'JS', 'HTML','CSS'],
      category: 'Front_End',
      image: 'path/to/image1.png',
      url: 'https://github.com/samfunmula/house_php'
    },
    {
      title: 'Json Repair',
      description: '一個單純的打字遊戲，參考網站「MonkeyType」',
      tags: ['Python'],
      category: 'Back_End',
      image: 'path/to/image2.png',
      url: 'https://github.com/samfunmula/jsam_json_repair'
    },
    {
      title: '人臉打卡系統',
      description: '利用16個Pattern當做作業的概念來做出的一個文字編輯器。',
      tags: ['Python','Yolo','QtPy'],
      category: 'AI',
      image: 'src/assets/face_rec.png',
      url: 'https://github.com/Tim7179/face_recognition_release'
    },
    {
      title: 'VisualCLA',
      description: '資料庫課程作的課堂專案',
      tags: ['Python','HuggingFace'],
      category: 'AI',
      image: 'src/assets/visualcla.png',
      url: 'https://github.com/samfunmula/visualcla'
    },
    {
      title: 'translation',
      description: '會回傳圖片，可作為測試環境時的假圖片。',
      tags: ['Python','HuggingFace'],
      category: 'AI',
      image: 'path/to/image5.png',
      url: 'https://github.com/samfunmula/translation'
    },
    {
      title: 'HackMD_RAG',
      description: '使用fast whisper，即時翻譯音檔。',
      tags: ['Vue','JS', 'HTML','CSS'],
      category: 'Front_End',
      image: 'src/assets/webUI.png',
      url: 'https://github.com/samfunmula/HackMD_RAG'
    },
    {
      title: 'Whisper',
      description: '與 Hack MD API 串接，快速建立和管理你的文案。',
      tags: ['Python','HuggingFace'],
      category: 'AI',
      image: 'path/to/image7.png',
      url: 'https://github.com/samfunmula/fast-whisper'
    },
    {
      title: 'MinIO_API',
      description: '與 Hack MD API 串接，快速建立和管理你的文案。',
      tags: ['Python','FastAPI'],
      category: 'Back_End',
      image: 'src/assets/minio.png',
      url: 'https://github.com/samfunmula/toBucket'
    },
    {
      title: '餐廳評論整合推薦',
      description: '與 Hack MD API 串接，快速建立和管理你的文案。',
      tags: ['Python','React'],
      category: 'APP',
      image: 'src/assets/rest_app.png',
      url: 'https://github.com/Tim7179/face_recognition_release'
    },
    {
      title: 'AI_Comment_Filter',
      description: '與 Hack MD API 串接，快速建立和管理你的文案。',
      tags: ['Extension','Groq','JS'],
      category: 'Extension',
      image: '123.png',
      url: 'https://github.com/samfunmula/ai_comments_filter'      
    }
  ]);

  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
      return projects.value;
    }
    return projects.value.filter(project => project.category === selectedCategory.value);
  });

  const openProject = (url: string) => {
    window.open(url, '_blank');
  };
</script>

<style scoped>
  .project-page {
    padding: 20px;
    text-align: center;
  }
  .filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  button.active {
    background-color: #007bff;
    color: white;
  }
  .results-count {
    text-align: center;
    margin-bottom: 20px;
  }
  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 35px;
    justify-content: center;
  }
  .project-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    height: 370px;
    text-align: left;
    transition: transform 0.3s;
    margin: auto;
    position: relative;
  }
  .project-card:hover {
    transform: scale(1.05);
  }
  .project-card img {
    width: 100%;
    height: 150px;
    border-radius: 10px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    position: absolute;
    bottom: 10px;
    left: 20px;
    right: 20px;
  }
  .tags span {
    background-color: #f1f1f1;
    padding: 5px 10px;
    border-radius: 5px;
  }
</style>
