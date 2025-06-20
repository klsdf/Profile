<template>
  <div class="job-game-view">
    <h1 class="page-title">商业游戏项目经验</h1>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-header">
          <img :src="project.logo" :alt="project.title + ' Logo'" class="project-logo" />
          <div class="project-title-group">
            <h2 class="project-title">{{ project.title }}</h2>
            <span class="project-period">{{ project.period }}</span>
          </div>
        </div>
        <div class="project-body">
          <div class="project-section">
            <h3 class="section-title">我的角色</h3>
            <p>{{ project.role }}</p>
          </div>
          <div class="project-section">
            <h3 class="section-title">项目简介</h3>
            <p>{{ project.description }}</p>
          </div>
          <div class="project-section">
            <h3 class="section-title">我的贡献</h3>
            <ul>
              <li v-for="(contribution, cIndex) in project.contributions" :key="cIndex">{{ contribution }}</li>
            </ul>
          </div>
          <div class="project-section" v-if="project.screenshots && project.screenshots.length">
            <h3 class="section-title">游戏截图</h3>
            <div class="screenshots-gallery">
              <img v-for="(ss, sIndex) in project.screenshots" :key="sIndex" :src="ss" alt="Screenshot" class="screenshot-img" />
            </div>
          </div>
          <div class="project-links" v-if="project.link">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link-btn">访问官网</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目A：星际远征',
    period: '2022.01 - 2023.05',
    role: '主策划 / 系统设计师',
    description: '一款科幻题材的SLG策略游戏，玩家扮演指挥官，探索宇宙、建立基地并与其他玩家联盟或对抗。',
    contributions: [
      '负责游戏核心世界观和故事线设计。',
      '设计了游戏的资源采集、科技树和单位成长系统。',
      '主导了战斗平衡性调整，并根据测试数据迭代了超过5个版本。',
      '撰写了超过80%的游戏内剧情和任务文案。',
    ],
    screenshots: [
      'https://placehold.co/400x225?text=战斗画面',
      'https://placehold.co/400x225?text=基地建设',
      'https://placehold.co/400x225?text=星图探索',
    ],
    link: 'https://example.com/project-a',
  },
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目B：幻境之森',
    period: '2021.07 - 2021.12',
    role: '关卡设计师',
    description: '一款二次元风格的平台跳跃解谜游戏，以其独特的艺术风格和富有挑战性的关卡设计著称。',
    contributions: [
      '独立设计了游戏第三章"迷雾森林"的全部10个关卡。',
      '制作了关卡中的动态障碍和触发事件的原型。',
      '参与了Boss战"森林守护者"的机制设计与实现。',
    ],
    screenshots: [
      'https://placehold.co/400x225?text=角色选择',
      'https://placehold.co/400x225?text=解谜场景',
      'https://placehold.co/400x225?text=Boss战',
    ],
    link: '',
  },
];
</script>

<style scoped>
.job-game-view {
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background-color: #f4f7f9;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 32px;
  text-align: center;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background-color: #34495e;
  color: #ffffff;
}

.project-logo {
  width: 72px;
  height: 72px;
  border-radius: 8px;
  border: 2px solid #ffffff;
  flex-shrink: 0;
}

.project-title-group {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.project-period {
  font-size: 0.9rem;
  color: #bdc3c7;
  margin-top: 4px;
}

.project-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-section {
}

.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 4px;
  display: inline-block;
}

.project-section p,
.project-section ul {
  color: #34495e;
  line-height: 1.7;
  margin: 0;
}

.project-section ul {
  padding-left: 20px;
}

.screenshots-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.screenshot-img {
  width: calc(33.333% - 8px);
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.screenshot-img:hover {
  transform: scale(1.05);
}

.project-links {
  margin-top: 16px;
  text-align: right;
}

.project-link-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.project-link-btn:hover {
  background-color: #2980b9;
}
</style>
