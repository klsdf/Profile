<template>
  <div class="card" @click="goToDetail">
    <img :src="game.img[0]" alt="game screenshot" class="game-image" />
    <h3>{{ game.title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'GameCard',
  props: {
    game: {
      type: Object as () => {
        title: string;
        img: string[];
        info: string;
        video: string;
        link: string;
        rulesInfo: string;
        tag: string[];
      },
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const goToDetail = () => {
      localStorage.setItem('selectedGame', JSON.stringify(props.game));
      router.push({ name: 'GameDetail', params: { gameName: props.game.title } });
    };
    return { goToDetail };
  }
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #3d3d3d;
  opacity: 0.7;
}

.card:hover {
  transform: scale(1.15);
  color: #ffffff;
  background-color: #919191;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  opacity: 1;
}

.game-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.2em;
  /* color: #333; */
}
</style> 