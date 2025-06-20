<template>
  <div class="art-view">
    <h1 class="page-title">美术作品集</h1>
    <div class="art-gallery">
      <div v-for="(art, index) in artworks" :key="index" class="art-item">
        <div class="art-image-wrapper">
          <img :src="art.image" :alt="art.title" class="art-image" />
        </div>
        <h2 class="art-title">{{ art.title }}</h2>
        <p class="art-desc">{{ art.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const artworks = [
  {
    image: require('@/assets/img/art/玛丽.png'),
    title: '玛丽',
    description: '。',
  },
  {
    image: require('@/assets/img/art/玛丽2.png'),
    title: '玛丽2',
    description: '。',
  },
  {
    image: require('@/assets/img/art/王小桃.png'),
    title: '王小桃',
    description: '。',
  },
  {
    image: require('@/assets/img/art/微笑教授.png'),
    title: '微笑教授',
    description: '。',
  },
  {
    image: require('@/assets/img/art/小瞬.png'),
    title: '小瞬',
    description: '。',
  },
  {
    image: require('@/assets/img/art/心奈.png'),
    title: '心奈',
    description: '。',
  },
  {
    image: require('@/assets/img/art/萤雪.png'),
    title: '萤雪',
    description: '。',
  },
  
  
];
</script>

<style scoped>
.art-view {
  max-width: 1000px;
  margin: 40px auto;
  padding: 32px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.page-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 2px;
}
.art-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.art-item {
  width: 300px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 18px 14px 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.art-image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 14px;
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
}
.art-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
.art-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 10px 0 6px 0;
  text-align: center;
}
.art-desc {
  font-size: 0.98rem;
  color: #444;
  text-align: center;
  line-height: 1.6;
}
</style>

