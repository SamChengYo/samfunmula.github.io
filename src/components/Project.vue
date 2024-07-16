<template>
  <div class="project-page">
    <div class="filters">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: category === selectedCategory }"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>
    <div class="results-count">
      結果數量: {{ filteredProjects.length }}
    </div>
    <div class="project-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.title" 
        class="project-card"
      >
        <img :src="project.image" alt="Project Image" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const categories = ['All', 'Front_End', 'APP', 'Back_End', 'AI', 'Extension'];
const selectedCategory = ref('All');
const projects = ref([
  {
    title: 'ETT網站 (純前端)',
    description: '提供使用者看得懂的內頁查看網站，可判斷胸腔主要標準',
    tags: ['Vue', 'JS', 'HTML'],
    image: 'path/to/image1.png'
  },
  {
    title: '打字遊戲',
    description: '一個單純的打字遊戲，參考網站「MonkeyType」',
    tags: ['Vue', 'JS', 'HTML', 'SCSS'],
    image: 'path/to/image2.png'
  },
  {
    title: '文字編輯器',
    description: '利用16個Pattern當做作業的概念來做出的一個文字編輯器。',
    tags: ['Java'],
    image: 'path/to/image3.png'
  },
  {
    title: '線上購物系統',
    description: '資料庫課程作的課堂專案',
    tags: ['HTML', 'PHP', 'CSS'],
    image: 'path/to/image4.png'
  },
  {
    title: '假圖片伺服器',
    description: '會回傳圖片，可作為測試環境時的假圖片。',
    tags: ['JS'],
    image: 'path/to/image5.png'
  },
  {
    title: '即時語音轉文字',
    description: '使用fast whisper，即時翻譯音檔。',
    tags: ['Python'],
    image: 'path/to/image6.png'
  },
  {
    title: 'getNoteAPI',
    description: '與 Hack MD API 串接，快速建立和管理你的文案。',
    tags: ['Python'],
    image: 'path/to/image7.png'
  },
  {
    title: 'llm_extension',
    description: 'Chrome Extension 插會 LLM（大語言模型），快速分析新聞資料。',
    tags: ['HTML', 'CSS', 'JS'],
    image: 'path/to/image8.png'
  },
  {
    title: 'todoList',
    description: '使用 django 開發的 todoList 待辦事項，可新增，刪除，完成任務。',
    tags: ['HTML', 'CSS', 'Python'],
    image: 'path/to/image9.png'
  }
]);

const selectCategory = (category: string) => {
  selectedCategory.value = category;
};

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects.value;
  }
  return projects.value.filter(project => 
    project.tags.includes(selectedCategory.value)
  );
});
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
}
.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.project-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tags span {
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
