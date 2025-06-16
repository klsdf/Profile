<template>
  <div class="article-view">
    <h1 class="page-title">我的游戏研究论文</h1>
    <div v-for="(paper, index) in papers" :key="index" class="paper-item">
      <h2 class="paper-title">{{ paper.title }}</h2>
      <p class="paper-abstract">{{ paper.abstract }}</p>
    </div>
  </div>
</template>

<script setup>
const papers = [
  {
    title: '游戏机制与玩家行为的关系研究',
    abstract: '本文探讨了不同游戏机制如何影响玩家的行为选择，结合实验数据分析玩家在不同情境下的决策模式。',
  },
  {
    title: '沉浸感在虚拟现实游戏中的作用',
    abstract: '研究虚拟现实技术提升游戏沉浸感的关键因素，并分析沉浸感对玩家体验的影响。',
  },
  {
    title: '游戏化学习的有效性分析',
    abstract: '通过对比实验，评估游戏化元素在教育场景中的应用效果，探讨其对学习动机和成绩的提升作用。',
  },
];
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
</style>
