<template>
  <div class="community-view">
    <h1 class="page-title">我的游戏社区运营成果</h1>
    <!-- 社区概览区 -->
    <section class="overview-section">
      <h2 class="section-title">社区概览</h2>
      <p class="overview-desc">{{ overview.desc }}</p>
      <div class="overview-info">
        <span>成立时间：{{ overview.founded }}</span>
        <span>定位：{{ overview.position }}</span>
        <span>成员数：{{ overview.members }}</span>
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
const overview = {
  desc: '“玩家之家”是我于2020年创办并持续运营的游戏社区，致力于为玩家提供一个交流、分享与成长的平台。社区以高质量内容和活跃氛围著称，吸引了众多核心玩家和内容创作者。',
  founded: '2020年3月',
  position: '高质量玩家交流平台',
  members: '35000+',
};

const stats = [
  { label: '注册用户', value: '35,000+' },
  { label: '日活跃用户', value: '2,500+' },
  { label: '累计发帖', value: '18,000+' },
  { label: '举办线上活动', value: '40+' },
  { label: '原创内容数', value: '5,000+' },
];

const featuredPosts = [
  {
    title: '年度最佳攻略征集活动回顾',
    author: '小明',
    date: '2023-12-10',
    desc: '本次活动共征集到200余篇高质量攻略，极大丰富了社区内容生态。',
  },
  {
    title: '社区成员原创同人画展',
    author: '阿狸',
    date: '2023-08-22',
    desc: '展示了社区成员的优秀美术创作，促进了玩家间的艺术交流。',
  },
  {
    title: '“开发者面对面”线上访谈',
    author: '官方团队',
    date: '2023-05-15',
    desc: '邀请知名游戏开发者与玩家互动，提升了社区专业影响力。',
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
.overview-desc {
  color: #444;
  font-size: 1.05rem;
  margin-bottom: 10px;
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
