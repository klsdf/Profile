<template>
  <div class="music-portfolio">
    <div class="musician-cert-wrapper">
      <img src="@/assets/网易云.png" alt="网易音乐人认证" class="musician-cert-img" />
      <div>{{ $t('pages.musicianCert') }}</div>
    </div>
    <h1 class="title">{{ $t('pages.musicPortfolio') }}</h1>
    <div class="music-list">
      <div class="music-card" v-for="(music, idx) in musics" :key="music.title">
        <img v-if="music.cover" :src="music.cover" class="cover" alt="cover" />
        <div class="info">
          <h2>{{ music.title }}</h2>
          <p class="desc">{{ music.desc }}</p>
          <p class="idea"><strong>{{ $t('music.creativeIdea') }}</strong>{{ music.idea }}</p>
          <p class="creation-time"><strong>{{ $t('music.creationTime') }}</strong>{{ music.creationTime }}</p>

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
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: "MusicView",
  setup() {
    const { tm } = useI18n();
    
    const localizedMusics = computed(() => {
      const musicTranslations = tm('musics');
      return musicTranslations.map(music => {
        return {
          ...music,
          cover: music.cover ? require(`@/assets/img/${music.cover}`) : null,
          audio: require(`@/assets/music/${music.audio}`)
        };
      });
    });
    
    return {
      musics: localizedMusics
    };
  },
  data() {
    return {
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

.musician-cert-wrapper {
  margin-bottom: 32px;
  text-align: center;
}

.musician-cert-img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
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

.creation-time {
  color: #666;
  margin-bottom: 12px;
  font-size: 0.9em;
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
