<template>
  <div class="profile-view">
    <h1 class="page-title">个人简历</h1>

    <section class="section">
      <h2 class="section-title">工作经历</h2>
      <div v-for="(job, index) in jobs" :key="index" class="item-block">
        <div class="item-header">
          <span class="item-main">{{ job.company }}｜{{ job.position }}</span>
          <span class="item-time">{{ job.period }}</span>
        </div>
        <p class="item-desc">{{ job.description }}</p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">求学经历</h2>
      <div v-for="(edu, index) in educations" :key="index" class="item-block">
        <div class="item-header">
          <span class="item-main">{{ edu.school }}｜{{ edu.degree }}</span>
          <span class="item-time">{{ edu.period }}</span>
        </div>
        <p class="item-desc">{{ edu.description }}</p>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">个人成就</h2>
      <ul class="achievement-list">
        <li v-for="(ach, index) in achievements" :key="index" class="achievement-item">
          {{ ach }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const jobs = [
  {
    company: '某知名互联网公司',
    position: '高级前端开发工程师',
    period: '2021.07 - 至今',
    description: '负责核心产品的前端架构设计与开发，主导多项前端性能优化项目。',
  },
  {
    company: '某科技初创企业',
    position: '前端开发工程师',
    period: '2019.08 - 2021.06',
    description: '参与公司主站和移动端产品的开发，推动前端工程化建设。',
  },
];

const educations = [
  {
    school: '某著名大学',
    degree: '硕士研究生｜计算机科学与技术',
    period: '2017.09 - 2019.07',
    description: '主攻方向为人机交互与游戏设计，发表多篇相关论文。',
  },
  {
    school: '某著名大学',
    degree: '学士｜软件工程',
    period: '2013.09 - 2017.07',
    description: '系统学习软件开发理论与实践，成绩优异。',
  },
];

const achievements = [
  '获得省级优秀毕业生称号',
  '主导开发的项目获得公司年度创新奖',
  '在国际会议发表论文3篇',
  '多次获得团队技术竞赛一等奖',
];
</script>

<style scoped>
.profile-view {
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
.section {
  margin-bottom: 36px;
}
.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 18px;
  border-left: 4px solid #3a7afe;
  padding-left: 12px;
}
.item-block {
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}
.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.item-main {
  font-size: 1.08rem;
  font-weight: 500;
  color: #222;
}
.item-time {
  font-size: 0.95rem;
  color: #888;
}
.item-desc {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}
.achievement-list {
  padding-left: 20px;
}
.achievement-item {
  font-size: 1rem;
  color: #444;
  margin-bottom: 8px;
  list-style-type: disc;
}
</style>
