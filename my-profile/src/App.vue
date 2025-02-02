<template>
  <div id="app">
    <div class="card-container">
      <GameCard v-for="game in games" :key="game.name" :name="game.name" :image="game.image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameCard from './components/GameCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    GameCard
    // HelloWorld
  },
  data() {
    return {
      games: [
        { name: 'Game 1', image: 'path/to/game1.png' },
        { name: 'Game 2', image: 'path/to/game2.png' },
        // 可以在这里添加更多游戏
      ]
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.game-image {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>
