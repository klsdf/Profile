<template>
  <div class="technology-view">
    <h1 class="page-title">我的技术栈</h1>
    <div v-for="(tech, index) in technologies" :key="index" class="tech-item">
      <div class="tech-header">
        <span class="tech-name">{{ tech.name }}</span>
        <span class="tech-category">{{ tech.category }}</span>
      </div>
      <p class="tech-description">{{ tech.description }}</p>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    name: 'Vue.js',
    category: '前端框架',
    description: '渐进式JavaScript框架，专注于构建用户界面。',
  },
  {
    name: 'TypeScript',
    category: '编程语言',
    description: 'JavaScript的超集，提供类型系统和更强的开发体验。',
  },
  {
    name: 'Node.js',
    category: '后端',
    description: '基于Chrome V8引擎的JavaScript运行环境，适合构建高性能服务器端应用。',
  },
  {
    name: 'Vite',
    category: '构建工具',
    description: '新一代前端构建工具，极快的冷启动和热更新体验。',
  },
  {
    name: 'Git',
    category: '版本控制',
    description: '分布式版本控制系统，广泛用于代码管理和协作。',
  },
  {
    name: 'Docker',
    category: '容器化',
    description: '应用容器引擎，实现应用的快速部署与隔离。',
  },
];
</script>

<style scoped>
.technology-view {
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
.tech-item {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.tech-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
}
.tech-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: #1a1a1a;
}
.tech-category {
  font-size: 0.95rem;
  color: #666;
  background: #e4e7ed;
  border-radius: 4px;
  padding: 2px 10px;
  margin-left: 12px;
}
.tech-description {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
}
</style>
