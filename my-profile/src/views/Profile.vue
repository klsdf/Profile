<template>
  <div class="profile-game-card">
    <div class="profile-main">
      <!-- 左侧立绘区域 -->
      <div class="profile-portrait">
        <img :src="portraitUrl" alt="个人立绘" class="portrait-img" />
      </div>
      <!-- 右侧个人信息区域 -->
      <div class="profile-info">
        <h1 class="profile-name">{{ profile.name }}</h1>
        <div class="profile-title">{{ profile.title }}</div>
        <div class="profile-section">
          <div class="section-label">{{ $t('profile.educationLabel') }}</div>
          <div class="section-content">
            <div v-for="(edu, idx) in educations" :key="idx">
              <strong>{{ edu.school }}</strong>（{{ edu.period }}）<br />
              {{ edu.degree }}<br />
              <span class="desc">{{ edu.description }}</span>
            </div>
          </div>
        </div>
        <div class="profile-section">
          <div class="section-label">{{ $t('profile.workExperience') }}</div>
          <div class="section-content">
            <div v-for="(job, idx) in jobs" :key="idx">
              <strong>{{ job.company }}</strong>（{{ job.period }}）<br />
              {{ job.position }}<br />
              <span class="desc">{{ job.description }}</span>
            </div>
          </div>
        </div>
        <div class="profile-section">
          <div class="section-label">{{ $t('profile.achievementsLabel') }}</div>
          <ul class="section-content achievements">
            <li v-for="(ach, idx) in achievements" :key="idx">{{ ach }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 下方能力表 -->
    <div class="profile-abilities">
      <h2 class="abilities-title">{{ $t('profile.abilitiesTitle') }}</h2>
      <div v-for="(ability, idx) in abilities" :key="idx" class="ability-row">
        <span class="ability-label">{{ ability.name }}</span>
        <div class="ability-bar-bg">
          <div class="ability-bar" :style="{ width: ability.value + '%'}"></div>
        </div>
        <span class="ability-value">{{ ability.value }}</span>
      </div>
    </div>
    <!-- 在能力表下方新增成就面板 -->
    <div class="profile-achievement-panel">
      <h2 class="achievement-title">{{ $t('profile.lifeAchievements') }}</h2>
      <div class="achievement-list">
        <div v-for="(ach, idx) in achievementsPanel" :key="idx" :class="['achievement-card', ach.done ? 'done' : '']">
          <img :src="ach.icon" alt="icon" class="achievement-icon" />
          <div class="achievement-info">
            <div class="achievement-header">
              <span class="achievement-name">{{ ach.title }}</span>
              <span v-if="ach.done" class="achievement-date">{{ ach.date }}</span>
            </div>
            <div class="achievement-desc">{{ ach.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const portraitUrl = 'https://placehold.co/220x400?text=立绘'; 

const profile = {
  name: '闫辰祥',
  title: '独立游戏开发者 / 怪味游戏爱好者 / AI游戏探索者',
};

const jobs = [
  {
    company: '',
    position: '游戏策划',
    period: '2021.07 - 至今',
    description: '负责核心产品的前端架构设计与开发，主导多项前端性能优化项目。',
  },
  {
    company: '某科技初创企业',
    position: '游戏开发',
    period: '2019.08 - 2025.06',
    description: '',
  },
];

const educations = [
  {
    school: '西安石油大学',
    degree: '数字媒体技术',
    period: '2018.09 - 2022.07',
    description: '主攻方向为游戏开发，游戏设计，前端开发。',
  },
];

const achievements = [
  '能力挑战赛三等奖',
  '',
  '',
  '',
];

const abilities = [
  { name: 'RPGMaker开发', value: 92 },
  { name: 'Unity开发', value: 85 },
  { name: 'C#开发', value: 70 },
  { name: 'C++开发', value: 80 },
  { name: 'Renpy开发', value: 88 },
  { name: 'Python开发', value: 90 },
  { name: 'AI游戏探索', value: 90 },
];

const achievementsPanel = [
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '科班出身',
    desc: '考入数字媒体技术专业，学习游戏开发和设计知识。',
    date: '2018年9月',
    done: true,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '新手游戏策划',
    desc: '进入游戏公司，担当游戏策划，了解中国的游戏行业。学习实际的游戏公司是怎么样运作的，是如何制作游戏的。',
    date: '2022年7月',
    done: true,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '新手游戏开发',
    desc: '进入游戏公司，担当游戏开发，学习游戏开发流程，以及游戏开发中会遇到的问题。',
    date: '2022年7月',
    done: true,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '转职音乐人',
    desc: '在网易注册成为网易音乐人，并发布自己的音乐作品。',
    date: '2023年12月',
    done: true,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '人生的前10款游戏都是垃圾',
    desc: '制作10个游戏demo，逐渐了解到游戏制作的过程，以及游戏制作中会遇到的问题。总结自己的游戏设计理念。',
    date: '2022年7月',
    done: true,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '代表作',
    desc: '制作第一款属于自己的游戏，并上架steam。',
    date: '2023年12月',
    done: false,
  },
  {
    icon: 'https://placehold.co/48x48?text=🎓',
    title: '转职学者',
    desc: '在日本系统研究游戏理论，了解日本的游戏行业。',
    date: '2023年12月',
    done: false,
  },
];
</script>

<style scoped>
.profile-game-card {
  max-width: 1100px;
  margin: 40px auto;
  padding: 32px 32px 24px 32px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  font-family: 'Segoe UI', 'Microsoft YaHei', Arial, sans-serif;
}
.profile-main {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 36px;
}
.profile-portrait {
  width: 240px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #eaeaea;
  border-radius: 8px;
  padding: 18px 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.portrait-img {
  width: 220px;
  height: 400px;
  object-fit: cover;
  border-radius: 6px;
  background: #ccc;
}
.profile-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.profile-name {
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2px;
}
.profile-title {
  font-size: 1.15rem;
  color: #3a7afe;
  margin-bottom: 10px;
}
.profile-section {
  margin-bottom: 8px;
}
.section-label {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
}
.section-content {
  margin-left: 8px;
  color: #444;
  font-size: 1rem;
}
.achievements {
  padding-left: 18px;
  margin: 0;
}
.achievements li {
  margin-bottom: 4px;
}
.desc {
  color: #888;
  font-size: 0.97em;
}
.profile-abilities {
  margin-top: 18px;
  background: #fff;
  border-radius: 8px;
  padding: 24px 28px 18px 28px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.abilities-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 18px;
}
.ability-row {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.ability-label {
  width: 110px;
  font-size: 1rem;
  color: #333;
  font-weight: 500;
}
.ability-bar-bg {
  flex: 1;
  height: 18px;
  background: #e4e7ed;
  border-radius: 9px;
  margin: 0 12px;
}
.ability-bar {
  height: 100%;
  background: linear-gradient(90deg, #3a7afe 60%, #7ed6df 100%);
  border-radius: 9px 0 0 9px;
  transition: width 0.6s;
}
.ability-value {
  width: 36px;
  text-align: right;
  font-size: 1rem;
  color: #3a7afe;
  font-weight: 600;
}
.profile-achievement-panel {
  margin-top: 36px;
  background: #23272e;
  border-radius: 10px;
  padding: 28px 24px 18px 24px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.10);
}
.achievement-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 18px;
  letter-spacing: 1px;
}
.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.achievement-card {
  display: flex;
  align-items: center;
  background: #2d3138;
  border-radius: 8px;
  padding: 12px 18px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  opacity: 0.7;
  transition: opacity 0.3s, box-shadow 0.3s;
}
.achievement-card.done {
  opacity: 1;
  box-shadow: 0 2px 8px rgba(58,122,254,0.10);
  border-left: 4px solid #3a7afe;
}
.achievement-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  margin-right: 18px;
  background: #fff;
  object-fit: cover;
}
.achievement-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}
.achievement-name {
  font-size: 1.08rem;
  font-weight: 600;
  color: #fff;
}
.achievement-date {
  font-size: 0.95rem;
  color: #7ed6df;
}
.achievement-desc {
  font-size: 0.98rem;
  color: #bfc9d1;
  text-align: left;
}
</style>
