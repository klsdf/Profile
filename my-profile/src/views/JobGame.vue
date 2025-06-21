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
          <div class="project-section" v-if="project.videos && project.videos.length">
            <h3 class="section-title">游戏视频演示</h3>
            <div class="videos-gallery">
              <div v-for="(video, vIndex) in project.videos" :key="vIndex" class="video-item">
                <video 
                  :src="video.src" 
                  :poster="video.poster" 
                  controls 
                  class="demo-video"
                  preload="metadata"
                >
                  您的浏览器不支持视频播放
                </video>
                <p class="video-caption">{{ video.caption }}</p>
              </div>
            </div>
          </div>
          <div class="project-section" v-if="project.screenshots && project.screenshots.length">
            <h3 class="section-title">游戏截图</h3>
            <div class="screenshots-gallery">
              <div v-for="(ss, sIndex) in project.screenshots" :key="sIndex" class="screenshot-item">
                <img :src="ss.src" alt="Screenshot" class="screenshot-img" />
                <p class="screenshot-caption">{{ ss.caption }}</p>
              </div>
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
  //#region vistory
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目A：vistory',
    period: '2022.01 - 2023.05',
    role: '系统策划',
    description: '一款基于AI的叙事向RPG游戏。',
    contributions: [
      '负责设计游戏系统，包括路线系统、节点设计等',
      '负责配置游戏数值，确保关卡的体验符合"起承转合"的节奏',
    ],
    videos: [

    ],
    screenshots: [
      { src: require('@/assets/vistory/截图1.png'), caption: '核心战斗场景' },
      { src: require('@/assets/vistory/截图2.jpg'), caption: '基地建设与升级' },
      { src: require('@/assets/vistory/截图3.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图4.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图5.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图6.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图7.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图8.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图9.jpg'), caption: '广阔的星图探索' },
      { src: require('@/assets/vistory/截图10.png'), caption: '广阔的星图探索' },
    ],
    link: 'https://example.com/project-a',
  },
  //#endregion
  //#region vistory2d
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目B：Vistory2',
    period: '2021.07 - 2021.12',
    role: '系统策划/技术策划',
    description: `一款基于AI的家园建设+熟人社交+UGC游戏。
- 玩家可以在游戏内输入任意自己想要的兼具/建筑。AI会根据玩家的需求生成对应的建筑/家具。
- 玩家可以制造AI的小伙伴，可以是猫猫也可以是自己的虚拟伴侣。
- 玩家可以邀请好友来自己的家园做客，也可以邀请好友来自己的家园做客。
- 玩家可以使用游戏内内置的UGC工具，来自己编写逻辑，把自己的房间变成一个有趣的游戏。`,

    contributions: [
      '负责设计游戏中的各个组件,包括：画线组件、多媒体组件、AI NPC智能体组件、全局灯光组件等',
      '负责配置游戏数值，确保游戏体验符合"起承转合"的节奏',
      '负责游戏模块的demo的制作与体验验证',
    ],
    videos: [
      {
        src: require('@/assets/vistory2d/videos/深海demo.mp4'),
        // poster: 'https://placehold.co/400x225?text=Demo+Video',
        caption: '模块Demo演示'
      },
      {
        src: require('@/assets/vistory2d/videos/太空demo.mp4'),
        // poster: 'https://placehold.co/400x225?text=Demo+Video',
        caption: '模块Demo演示'
      },
      {
        src: require('@/assets/vistory2d/videos/太空demo.mp4'),
        // poster: 'https://placehold.co/400x225?text=Demo+Video',
        caption: '模块Demo演示'
      },
      
      

    ],
    screenshots: [
      { src: 'https://placehold.co/400x225?text=角色选择', caption: '多样的角色选择' },
      { src: 'https://placehold.co/400x225?text=解谜场景', caption: '精巧的关卡解谜' },
      { src: 'https://placehold.co/400x225?text=Boss战', caption: '紧张刺激的Boss战' },
    ],
    link: '',
  },
  //#endregion
  //#region ChatMaid
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目C：ChatMaid',
    period: '2021.07 - 2021.12',
    role: '程序/AI产品经理',
    description: `一款基于AI的家园建设+熟人社交+UGC游戏。
    `,
    contributions: [
      '负责游戏中的AI模块的开发',
      '负责游戏中的AI产品的规划与设计',
    ],
    screenshots: [
      { src: require('@/assets/ChatMaid/imgs/截图1.jpg'), caption: 'AI产品演示' },
      { src: require('@/assets/ChatMaid/imgs/截图2.jpg'), caption: 'AI产品演示' },
      { src: require('@/assets/ChatMaid/imgs/截图3.jpg'), caption: 'AI产品演示' },
    ],

    videos: [
      {
        src: require('@/assets/ChatMaid/videos/录屏1.mp4'),
        // poster: 'https://placehold.co/400x225?text=Demo+Video',
        caption: 'AI产品演示'
      },
      {
        src: require('@/assets/ChatMaid/videos/录屏2.mp4'),
        // poster: 'https://placehold.co/400x225?text=Demo+Video',
        caption: 'AI产品演示'
      },
    
      
      
      
    ]
  },
  //#endregion
  //#region RhythmChallenge
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目D：RhythmChallenge',
    period: '2021.07 - 2021.12',
    role: '关卡策划/作曲/编曲',
    description: `RhythmGame。
      - 玩家可以自由创作自己的音乐，并将其制作成RhythmGame。
      - 玩家可以自由创作自己的音乐，并将其制作成RhythmGame。
    `,
    contributions: [
      '负责游戏中的关卡设计',
      '负责游戏中的作曲与编曲',
    ],
    screenshots: [
      { src: require('@/assets/RhythmChallenge/imgs/截图1.jpg'), caption: '关卡设计' },
      { src: require('@/assets/RhythmChallenge/imgs/截图2.jpg'), caption: '关卡设计' },
      { src: require('@/assets/RhythmChallenge/imgs/截图3.jpg'), caption: '关卡设计' },
    
    ],
    videos: [
      
    ]
  },
  //#endregion
  //#region 堡外就医
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目E：堡外就医',
    period: '2021.07 - 2021.12',
    role: '系统策划/程序/作曲/编曲',
    description: `
一款实验性叙事游戏，大量使用了ARG设计。
玩家可以在真实的网页中探索，来完成游戏内的解密。
    `,
    contributions: [
      '负责游戏中的系统设计',
      '负责游戏中的程序开发',
      '负责游戏中的作曲与编曲',
    ],
    screenshots: [
      { src: require('@/assets/堡外就医/imgs/截图1.jpg'), caption: '关卡设计' },
      { src: require('@/assets/堡外就医/imgs/截图2.jpg'), caption: '关卡设计' },
      { src: require('@/assets/堡外就医/imgs/截图3.png'), caption: '关卡设计' },
      { src: require('@/assets/堡外就医/imgs/截图4.png'), caption: '原型设计' },
      { src: require('@/assets/堡外就医/imgs/截图5.jpg'), caption: '原型设计' },
    ],
    videos: [
      {
        src: require('@/assets/堡外就医/videos/录屏1.mp4'),
        caption: '游戏演示'
      },
      {
        src: require('@/assets/堡外就医/videos/录屏2.mp4'),
      }
      
    ]
  },
  //#endregion
  //#region 圈圈圆圆圈圈
  {
    logo: 'https://placehold.co/80x80?text=Logo',
    title: '项目F：圈圈圆圆圈圈',
    period: '2021.07 - 2021.12',
    role: '程序',
    description: `幸运房东like游戏。
  玩家需要抽卡并调整卡牌位置，使得卡牌的彼此之间连携，产生收益。
    `,
    contributions: [
      '负责游戏中的程序开发',
    ],
    screenshots: [
      { src: require('@/assets/圈圈圆圆圈圈/imgs/截图1.jpg'), caption: '关卡设计' },

    ],
  },
  //#endregion

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

.screenshot-item {
  width: calc(33.333% - 8px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.screenshot-img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.screenshot-img:hover {
  transform: scale(1.05);
}

.screenshot-caption {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
}

/* 新增：视频展示区域样式 */
.videos-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.video-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.demo-video {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #000;
  margin: 0 auto;
}

.video-caption {
  font-size: 0.9rem;
  color: #555;
  margin: 0;
  font-weight: 500;
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
