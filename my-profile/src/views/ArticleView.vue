<template>
  <div class="article-view">
    <h1 class="page-title">我的游戏研究论文</h1>
    <div v-for="(paper, index) in papers" :key="index" class="paper-item">
      <h2 class="paper-title">{{ paper.title }}</h2>
      <p class="paper-abstract">{{ paper.abstract }}</p>
      <a
        v-if="paper.link"
        :href="paper.link"
        class="paper-link"
        target="_blank"
        rel="noopener"
        :download="getFileName(paper.link)"
      >
        点击下载文档
      </a>
    </div>
  </div>
</template>

<script setup>
const papers = [
  {
    title: '基于前端框架技术的 meta 游戏设计与开发',
    abstract: '本文探讨了不同游戏机制如何影响玩家的行为选择，结合实验数据分析玩家在不同情境下的决策模式。',
    link: '/paper/基于前端框架技术的 meta 游戏设计与开发.docx',
  },
];

const getFileName = (link) => {
  return link.split('/').pop();
};
</script>

<style scoped>
.article-view {
  max-width: 800px;
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
.paper-item {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ddd;
}
.paper-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.paper-abstract {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}
.paper-link {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 14px;
  background: #3a7afe;
  color: #fff;
  border-radius: 4px;
  font-size: 0.98rem;
  text-decoration: none;
  transition: background 0.2s;
}
.paper-link:hover {
  background: #255ecb;
}
</style>
