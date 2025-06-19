<template>
  <div class="music-portfolio">
    <h1 class="title">音乐作品集</h1>
    <div class="music-list">
      <div class="music-card" v-for="(music, idx) in musics" :key="music.title">
        <img v-if="music.cover" :src="music.cover" class="cover" alt="cover" />
        <div class="info">
          <h2>{{ music.title }}</h2>
          <p class="desc">{{ music.desc }}</p>
          <p class="idea"><strong>创作思路：</strong>{{ music.idea }}</p>

          <!-- 播放控制区域 -->
          <div class="player-controls">
         

            <!-- 原生音频控件 -->
            <audio ref="audio" :src="music.audio" @ended="onEnded(idx)" controls class="audio-player"></audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicView",
  data() {
    return {
      musics: [
        {
          title: "昙花片段",
          desc: "昙花片段",
          idea: "昙花片段",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/昙花片段.mp3')
        },
        {
          title: "曾经的事了",
          desc: "创作于2016年",
          idea: "创作于2016年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/038-初恋-2016.11.12.mp3')
        },
        {
          title: "午睡与暖阳",
          desc: "创作于2016年",
          idea: "创作于2016年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/016-午睡与暖阳.mp3')
        },
        {
          title: "黄昏",
          desc: "创作于2019年",
          idea: "创作于2019年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/002-黄昏2012.9.mp3')
        },
        {
          title: "小步舞曲",
          desc: "创作于2020年",
          idea: "创作于2020年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/015-小步舞曲.mp3')
        },
        {
          title: "欢乐瞬间",
          desc: "创作于2020年",
          idea: "创作于2020年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/046-欢乐瞬间-2020.12.4.mp3')
        },
        {
          title: "小步舞曲",
          desc: "创作于2020年",
          idea: "创作于2020年",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/日常/015-小步舞曲.mp3')
        },
        {
          title: "独自等待",
          desc: "一首描绘清晨阳光的钢琴曲。",
          idea: "通过明快的旋律和和声，表现新一天的希望与活力。",
          cover: require('@/assets/img/游戏《山的那边》宣传海报设计.png'),
          audio: require('@/assets/music/043-独自等待-2021-3-1.mp3')
        },
        {
          title: "白色的回忆",
          desc: "电子与爵士融合的夜晚氛围音乐。",
          idea: "用电子音色和爵士节奏，营造都市夜晚的流动感。",
          cover: require('@/assets/img/游戏《山的那边》宣传海报设计.png'),
          audio: require('@/assets/music/山的那边/045-白色的回忆.mp3')
        },
        {
          title: "软萌的小猫猫",
          desc: "电子与爵士融合的夜晚氛围音乐。",
          idea: "用电子音色和爵士节奏，营造都市夜晚的流动感。",
          cover: require('@/assets/img/cover1.jpg'),
          audio: require('@/assets/music/040-软萌的小猫猫-2020.11.25.mp3')
        },
        {
          title: "萤火",
          desc: "一首描绘萤火虫的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现萤火虫的美丽与神秘。",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/029-萤火.mp3')
        },
        {
          title: "花儿主题变奏曲",
          desc: "一首描绘花儿的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现花儿的美丽与神秘。",
          cover: require('@/assets/img/云.jpg'),
          audio: require('@/assets/music/012-花儿主题变奏曲.mp3')
        },
        {
          title: "堡外就医pv曲",
          desc: "一首描绘堡外就医的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现堡外就医的美丽与神秘。",
          cover: require('@/assets/img/堡外就医 宣传图.png'),
          audio: require('@/assets/music/堡外就医/堡外就医pv曲.mp3')
        },
        {
          title: "lucy的演奏带和声",
          desc: "一首描绘堡外就医的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现堡外就医的美丽与神秘。",
          cover: require('@/assets/img/堡外就医 宣传图.png'),
          audio: require('@/assets/music/堡外就医/lucy的演奏带和声.mp3')
        },
        {
          title: "被boss追杀",
          desc: "一首描绘堡外就医的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现堡外就医的美丽与神秘。",
          cover: require('@/assets/img/堡外就医 宣传图.png'),
          audio: require('@/assets/music/堡外就医/被boss追杀.mp3')
        },
        {
          title: "背景的噪音",
          desc: "一首描绘堡外就医的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现堡外就医的美丽与神秘。",
          cover: require('@/assets/img/堡外就医 宣传图.png'),
          audio: require('@/assets/music/堡外就医/背景的噪音.mp3')
        },
        {
          title: "开场的背景",
          desc: "一首描绘堡外就医的钢琴曲。",
          idea: "通过轻柔的旋律和和声，表现堡外就医的美丽与神秘。",
          cover: require('@/assets/img/堡外就医 宣传图.png'),
          audio: require('@/assets/music/堡外就医/开场的背景.mp3')
        },


        //节奏挑战
        {
          title: "level0",
          desc: "level0",
          idea: "level0",
          cover: require('@/assets/img/节奏挑战cover.png'),
          audio: require('@/assets/music/节奏挑战/level0.mp3')
        },
        {
          title: "level1",
          desc: "level1",
          idea: "level1",
          cover: require('@/assets/img/节奏挑战cover.png'),
          audio: require('@/assets/music/节奏挑战/Project_1.mp3')
        },
        {
          title: "level2 主旋律",
          desc: "level2",
          idea: "level2",
          cover: require('@/assets/img/节奏挑战cover.png'),
          audio: require('@/assets/music/节奏挑战/Project2主旋律.mp3')
        },
        {
          title: "level2 完整版",
          desc: "level2",
          idea: "level2",
          cover: require('@/assets/img/节奏挑战cover.png'),
          audio: require('@/assets/music/节奏挑战/Project_2 - 决定版.mp3')
        },
        {
          title: "level2 fever",
          desc: "level2",
          idea: "level2",
          cover: require('@/assets/img/节奏挑战cover.png'),
          audio: require('@/assets/music/节奏挑战/Project2-fever.mp3')
        },

        //免费领取
        {
          title: "萤雪",
          desc: "免费领取",
          idea: "免费领取",
          cover: require('@/assets/img/萤雪.jpg'),
          audio: require('@/assets/music/免费领取/萤雪.mp3')
        },
        {
          title: "奇怪？",
          desc: "免费领取",
          idea: "免费领取",
          cover: require('@/assets/img/萤雪.jpg'),
          audio: require('@/assets/music/免费领取/奇怪？.mp3')
        },
      
        
        
      ],
      currentPlaying: null
    };
  },
  methods: {
    /**
     * 播放或暂停音乐
     * @param {number} idx - 音乐索引
     */
    play(idx) {
      const audios = this.$refs.audio;
      // 兼容单个或多个audio
      const audio = Array.isArray(audios) ? audios[idx] : audios;
      if (this.currentPlaying === idx) {
        audio.pause();
        this.currentPlaying = null;
      } else {
        if (this.currentPlaying !== null) {
          const prevAudio = Array.isArray(audios) ? audios[this.currentPlaying] : audios;
          prevAudio && prevAudio.pause();
        }
        audio.currentTime = 0;
        audio.play();
        this.currentPlaying = idx;
      }
    },

    /**
     * 音乐播放结束时的处理
     * @param {number} idx - 音乐索引
     */
    onEnded(idx) {
      if (this.currentPlaying === idx) {
        this.currentPlaying = null;
      }
    }
  }
};
</script>

<style scoped>
.music-portfolio {
  max-width: 800px;
  margin: 40px auto;
  padding: 24px;
  background: #f8f8f8;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
}

.title {
  text-align: center;
  margin-bottom: 32px;
  font-size: 2.5em;
  color: #333;
}

.music-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.music-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 20px;
  align-items: center;
  gap: 24px;
}

.cover {
  height: 100%;
  max-height: 200px;
  width: auto;
  max-width: 100%;
  object-fit: cover;   /* 保持比例填充，超出部分裁剪 */
  display: block;
  margin: 0 auto;
  border-radius: 0;    /* 如需无圆角 */
  background: #eee;
}

.info {
  flex: 1;
}

.desc {
  color: #666;
  margin: 8px 0;
}

.idea {
  color: #888;
  margin-bottom: 12px;
}

/* 播放控制区域样式 */
.player-controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.play-btn {
  padding: 8px 20px;
  background: #4f8cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.2s;
  align-self: flex-start;
}

.play-btn:hover {
  background: #346fd1;
}

/* 原生音频播放器样式 */
.audio-player {
  width: 100%;
  margin-top: 8px;
}

/* 自定义音频控件样式（可选） */
.audio-player::-webkit-media-controls-panel {
  background-color: #f5f5f5;
  border-radius: 8px;
}

.audio-player::-webkit-media-controls-play-button {
  background-color: #4f8cff;
  border-radius: 50%;
}

.audio-player::-webkit-media-controls-current-time-display,
.audio-player::-webkit-media-controls-time-remaining-display {
  color: #333;
  font-weight: 500;
}
</style>
