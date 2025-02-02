<template>
  <div class="card">
    <img :src="image" alt="game screenshot" class="game-image" />
    <h3>{{ name }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameCard',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
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