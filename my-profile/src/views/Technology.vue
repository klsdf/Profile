<template>
  <div class="technology-view">
    <h1 class="page-title">我的技术栈</h1>
    <div v-for="(tech, index) in technologies" :key="index" class="tech-item">
      <div class="tech-header">
        <span class="tech-name">{{ tech.name }}</span>
        <span class="tech-category">{{ tech.category }}</span>
      </div>
      <p class="tech-description">{{ tech.description }}</p>
      <a v-if="tech.link" :href="tech.link" class="tech-link" target="_blank" rel="noopener">访问仓库</a>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    name: 'YanGameFramework',
    category: '游戏框架',
    description: '一款基于unity的游戏框架，内置了完整的本地化、UI解决方案。以及内置了大量的常用工具库。',
    link: 'https://github.com/yourname/YanGameFramework',
  },
  {
    name: 'ButterManager',
    category: '资产管理器',
    description: `一款基于Electron的资产管理器，用于管理用户电脑上的各种资源，并提供游戏化方案。比如用户某一个应用的使用时长，数据统计、截图。
随着互联网发展，硬件的存储价格不断降低，使得个人拥有大容量存储成为可能。因此也滋生了越来越多的“仓鼠症”。很多仓鼠症患者在收集的资源越来越多的同时，也会发现管理/整合资源的难度越来越高。在多媒体的领域，这个问题尤为严重。
笔者对这个问题也是头疼已久，当资源超过10TB之后，无论是按照种类区分，还是按照常用程度区分，都无法很好地满足笔者的需求。
  
本产品是一个管理绿色游戏，漫画和电影的综合管理器。可以为用户提供查找，分类，应用内浏览等功能。可以帮助用户更轻松管理自己的资源。
    `,
    link: 'https://github.com/yourname/ButterManager',
  },
  {
    name: '帽子社官网',
    category: '官网',
    description: '一款基于jquery+Express+less的网站，用于社区的日常运营。web前端+后端+数据库',
    link: 'https://github.com/klsdf/Hat-Soft.git',
  },
  {
    name: 'QQ机器人',
    category: 'QQ机器人',
    description: '一款基于nodejs的QQ机器人，用于管理用户电脑上的各种资源，并提供游戏化方案。比如用户某一个应用的使用时长，数据统计、截图。',
    link: 'https://github.com/klsdf/ying-xue-bot.git',
  },
  {
    name: '后处理框架',
    category: '后处理框架',
    description: '一款基于Unity的2D后处理框架，用于实现各种后处理效果。',
    link: 'https://github.com/yourname/unity-postprocess',
  },
  {
    name: 'UI的UberShader',
    category: 'UI的UberShader',
    description: '一款基于Unity的UI的UberShader，用于实现各种UI效果。',
    link: 'https://github.com/yourname/unity-ubershader',
  },
  {
    name: 'GameDesignNodeGraph',
    category: '游戏设计节点图',
    description: '一款基于原生js的GameDesignNodeGraph，系统描述并阐释了游戏设计的各种结构，并用节点图的形式快速帮设计师生成一篇游戏策划文档。',
    link: 'https://github.com/klsdf/GameDesignNodeGraph.git',
  },
  {
    name: 'JapenesLearnVideoMaker',
    category: '日语学习视频制作',
    description: `一款基于Python+GPT Sovit的日语学习视频制作工具，用于制作日语学习视频。可以把日语学习笔记自动化且批量制作成视频。
用户只需要输入想要复习的内容，ai会自动生成学习资料以及语音。
    `,
    link: 'https://github.com/klsdf/JapenesLearnVideoMaker.git',
  }
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
