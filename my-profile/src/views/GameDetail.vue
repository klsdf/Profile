<template>
  <div class="game-detail" v-if="game">
    <div v-if="game.img && game.img.length" class="banner">
      <img :src="game.img[0]" alt="banner" class="banner-image" />
    </div>
    <h1>{{ game.title }}</h1>
    <p class="game-info-text">{{ game.info }}</p>
    <video v-if="game.video" controls>
      <source :src="game.video" type="video/mp4">
    </video>
    <a :href="game.link" target="_blank">GitHub 链接</a>
    <div v-if="game.rulesInfo">
      <h4>游戏规则</h4>
      <p>{{ game.rulesInfo }}</p>
    </div>
    <div class="tags">
      <span v-for="tag in game.tag" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="game-images" v-if="game.img && game.img.length > 1">
      <img
        v-for="(image, index) in game.img.slice(1)"
        :key="index"
        :src="image"
        alt="game screenshot"
        class="game-image"
      />
    </div>
  </div>
  <div v-else>
    <p>游戏信息未找到。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SwiperClass, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  name: 'GameDetail',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const game = JSON.parse(localStorage.getItem('selectedGame') || '{}');
    const swiperOptions = {
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules: [Pagination],
    };
    return { game, swiperOptions };
  }
});
</script>

<style scoped>
h1 {
  color: #ffffff;
  font-size: 3.5em;
}
.game-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.tags {
  margin-top: 20px;
}

.tag {
  display: inline-block;
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 5px 10px;
  margin: 5px;
}

.game-images {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
}

.game-image {
  width: 70%;
  max-width: 600px;
  min-width: 240px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  object-fit: contain;
  background: #fff;
}

.banner {
  width: 70%;
  margin: 0 auto 24px auto;
  border-radius: 12px;
  overflow: hidden;
  max-height: 320px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
}

.banner-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.game-info-text {
  white-space: pre-wrap;
  text-align: left;
  color: #f0f0f0;
}
</style> 