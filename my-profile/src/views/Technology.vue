<template>
  <div class="technology-view">
    <h1 class="page-title">{{ $t('technology.techStack') }}</h1>
    <div v-for="(tech, index) in technologies" :key="index" class="tech-item">
      <div class="tech-header">
        <span class="tech-name">{{ tech.name }}</span>
        <span class="tech-category">{{ tech.category }}</span>
      </div>
      <p class="tech-description">{{ tech.description }}</p>
      <a v-if="tech.link" :href="tech.link" class="tech-link" target="_blank" rel="noopener">{{ $t('technology.visitRepo') }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const technologies = computed(() => {
  return tm('technology.projects')
})
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
.tech-link {
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
.tech-link:hover {
  background: #255ecb;
}
</style>
