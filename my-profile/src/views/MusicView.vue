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
          <button @click="play(idx)">
            {{ currentPlaying === idx ? '暂停' : '试听' }}
          </button>
          <audio
            ref="audio"
            :src="music.audio"
            @ended="onEnded(idx)"
            v-show="false"
          ></audio>
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
          title: "晨曦之歌",
          desc: "一首描绘清晨阳光的钢琴曲。",
          idea: "通过明快的旋律和和声，表现新一天的希望与活力。",
          cover: require('@/assets/music/cover1.jpg'),
        //   audio: require('@/assets/music/song1.mp3')
        },
        {
          title: "夜色流光",
          desc: "电子与爵士融合的夜晚氛围音乐。",
          idea: "用电子音色和爵士节奏，营造都市夜晚的流动感。",
          cover: require('@/assets/music/cover2.jpg'),
        //   audio: require('@/assets/music/song2.mp3')
        }
        // 可继续添加更多音乐
      ],
      currentPlaying: null
    };
  },
  methods: {
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
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 20px;
  align-items: center;
  gap: 24px;
}
.cover {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
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
button {
  padding: 8px 20px;
  background: #4f8cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.2s;
}
button:hover {
  background: #346fd1;
}
</style>
