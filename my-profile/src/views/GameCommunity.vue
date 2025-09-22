<template>
  <div class="community-view">
    <h1 class="page-title">我的游戏社区运营成果</h1>
    <!-- 社区概览区 -->
    <section class="overview-section">
      <h2 class="section-title">社区概览</h2>
      <div class="overview-content">
        <img :src="communityLogo" alt="社区 Logo" class="community-logo" />
        <p class="overview-desc">{{ overview.desc }}</p>
      </div>
    </section>
    <!-- 成果数据区 -->
    <section class="stats-section">
      <h2 class="section-title">核心数据</h2>
      <div class="stats-list">
        <div v-for="(stat, idx) in stats" :key="idx" class="stat-card">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>
    <!-- 精选内容区 -->
    <section class="featured-section">
      <h2 class="section-title">精选内容</h2>
      <div class="featured-list">
        <div v-for="(post, idx) in featuredPosts" :key="idx" class="featured-card">
          <div class="featured-title">{{ post.title }}</div>
          <div class="featured-meta">by {{ post.author }} ｜ {{ post.date }}</div>
          <div class="featured-desc">{{ post.desc }}</div>
        </div>
      </div>
    </section>
    <!-- 运营成就区 -->
    <section class="achievements-section">
      <h2 class="section-title">运营成就</h2>
      <ul class="achievements-list">
        <li v-for="(ach, idx) in achievements" :key="idx" class="achievement-item">
          {{ ach }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import communityLogo from '@/assets/帽子社/imgs/帽子社图标128.png';

const overview = {
  desc: `“帽子社”是我于2022年在大学期间创办并持续运营的游戏社区，致力于创立一个可以研究游戏理论，交流游戏设计，分享游戏知识的社区平台。
在中国，很多游戏策划并没有接受过专业的游戏设计教育，他们缺乏对游戏设计理论的了解，也缺乏对游戏设计方法的掌握。
导致很多新手在做游戏的时候会直接从理论入手，而无法学到实际的制作经验。而很多经验丰富的策划，又缺乏对游戏设计理论的了解，导致会被自己的经验所束缚。
因此，我创立了“帽子社”，旨在知行合一，既要研究游戏理论又要着眼于实际的游戏制作。`,
};

const stats = [
  { label: '社区用户', value: '1000+' },
  { label: '哔哩哔哩粉丝数', value: '1000+' },
];

const featuredPosts = [
  {
    title: '游戏本体论研讨会',
    author: '帽子社',
    date: '2023-12-10',
    desc: '本次活动共征集到200余篇高质量攻略，极大丰富了社区内容生态。',
    link: 'https://www.bilibili.com/video/BV1Qy4y1C75N/?spm_id_from=333.337.search-card.all.click&vd_source=1783473789',
  },
  {
    title: 'AI NPC设计',
    author: '帽子社',
    date: '2023-12-10',
    desc: '本次活动共征集到200余篇高质量攻略，极大丰富了社区内容生态。',
    link: 'https://www.bilibili.com/video/BV1Qy4y1C75N/?spm_id_from=333.337.search-card.all.click&vd_source=1783473789',
  },
  
  
];

const achievements = [
  '社区荣获“年度最佳玩家社区”奖',
  '多次举办万人参与的大型线上活动',
  '与知名游戏厂商达成内容合作',
  '社区原创内容被行业媒体多次报道',
  '成员满意度调查连续三年超90%',
];
</script>

<style scoped>
.community-view {
  max-width: 1000px;
  margin: 40px auto;
  padding: 32px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}
.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 2px;
}
.section-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
  border-left: 4px solid #3a7afe;
  padding-left: 10px;
}
.overview-section {
  margin-bottom: 32px;
}
.overview-content {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}
.community-logo {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}
.overview-desc {
  color: #444;
  font-size: 1.05rem;
  line-height: 1.8;
}
.overview-info {
  color: #666;
  font-size: 0.98rem;
  display: flex;
  gap: 24px;
}
.stats-section {
  margin-bottom: 32px;
}
.stats-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.stat-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 18px 28px;
  min-width: 140px;
  text-align: center;
  flex: 1 1 140px;
}
.stat-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: #3a7afe;
  margin-bottom: 6px;
}
.stat-label {
  font-size: 1rem;
  color: #444;
}
.featured-section {
  margin-bottom: 32px;
}
.featured-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.featured-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 16px 20px;
  min-width: 220px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.featured-title {
  font-size: 1.08rem;
  font-weight: 600;
  color: #1a1a1a;
}
.featured-meta {
  font-size: 0.95rem;
  color: #888;
}
.featured-desc {
  font-size: 0.98rem;
  color: #444;
}
.achievements-section {
  margin-bottom: 0;
}
.achievements-list {
  padding-left: 20px;
}
.achievement-item {
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;
  list-style-type: disc;
}
</style>
