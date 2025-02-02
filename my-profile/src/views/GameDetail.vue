<template>
  <div class="game-detail" v-if="game">
    <img :src="game.img[0]" alt="game screenshot" class="game-image" />
    <h1>{{ game.title }}</h1>
    <p>{{ game.info }}</p>
    <video v-if="game.video" controls>
      <source :src="game.video" type="video/mp4">
    </video>
    <a :href="game.link" target="_blank">下载链接</a>
    <div v-if="game.rulesInfo">
      <h4>游戏规则</h4>
      <p>{{ game.rulesInfo }}</p>
    </div>
    <div class="tags">
      <span v-for="tag in game.tag" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
  <div v-else>
    <p>游戏信息未找到。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameDetail',
  setup() {
    const game = JSON.parse(localStorage.getItem('selectedGame') || '{}');
    return { game };
  }
});
</script>

<style scoped>
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
</style> 