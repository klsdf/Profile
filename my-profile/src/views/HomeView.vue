<template>
  <div class="home">
    <div class="card-container">
      <GameCard
        v-for="game in games"
        :key="game.title"
        :game="game"
      />
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';

export default {
  name: 'HomeView',
  components: {
    GameCard
  },
  data() {
    return {
      games: [
        {
          title: '姆姆因子',
          img: [require('@/assets/姆姆因子/截图/game.png')],
          info: '姆姆因子是一款PVE的类RTS游戏',
          video: '',
          link: 'https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm',
          rulesInfo: '游戏规则信息',
          tag: ['RTS', '单局对抗', '细胞战争']
        },
        {
          title: '还乡',
          img: ['./img/game1.png'],
          info: '生存类战棋+塔防的设计',
          video: '',
          link: 'https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm',
          rulesInfo: '游戏规则信息',
          tag: ['新棋', '塔防', '生存']
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>