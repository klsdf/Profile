<template>
  <div>
    <h1>Game Detail</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'GameDetail',
 
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