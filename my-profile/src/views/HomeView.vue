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
          img: [require('@/assets/姆姆因子/imgs/game.png')],
          info: '姆姆因子是一款PVE的类RTS游戏',
          video: '',
          link: 'https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm',
          rulesInfo: '游戏规则信息',
          tag: ['RTS', '单局对抗', '细胞战争']
        },
        {
          title: '还乡',
          img: [require('@/assets/还乡/imgs/game1.png')],
          info: '生存类战棋+塔防的设计',
          video: '',
          link: 'https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm',
          rulesInfo: '游戏规则信息',
          tag: ['新棋', '塔防', '生存']
        },
        {
          title: '山的那边',
          img: [require('@/assets/山的那边/imgs/1.png')],
          info: 'RPG游戏,使用RPGMV制作',
          video: '',
          link: 'https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm',
          rulesInfo: '',
          tag: ['解密RPG', '多周目剧情']
        },
        {
          title: '文芒',
          img: [require('@/assets/文芒/imgs/1.png')],
          info: 'ADV文字解密类游戏',
          video: require('@/assets/文芒/video/文芒.mp4'),
          link: 'https://pan.baidu.com/s/1w-LD3yarHCF9ZaCAoNSIcA?pwd=kg2g',
          rulesInfo: '',
          tag: ['文字解密RPG', '叙事向', '线性关卡']
        },
        {
          title: '迪亚特洛夫行动',
          img: [require('@/assets/迪亚特洛夫行动/imgs/1.png')],
          info: '叙事向卡牌游戏',
          video: '',
          link: 'https://pan.baidu.com/s/1KwuZL7IZdihQBiZBtKygZQ?pwd=c6tk',
          rulesInfo: '',
          tag: ['卡牌', '叙事向', '生存']
        },
        {
          title: '奈尔效应',
          img: [require('@/assets/奈尔效应/imgs/1.png')],
          info: '空间解密游戏',
          video: '',
          link: 'https://pan.baidu.com/s/1rIQh3zN_RXrgZeQodHGWMQ?pwd=dkhs',
          rulesInfo: '',
          tag: ['空间解密', '叙事向', '手书风格']
        },
        {
          title: '通感',
          img: [
            require('@/assets/通感/imgs/1.jpg'),
          ],
          info: '视觉和叙事创意向游戏',
          video: '',
          link: '',
          rulesInfo: '通感是一款实验游戏。游戏的所有内容都由文字构成。',
          tag: ['空间解密', '叙事向', '手书风格']
        },
        {
          title: '免费领取JavaScript学习资料',
          img: [require('@/assets/免费领取JavaScript学习资料/imgs/1.png')],
          info: '本游戏是meta游戏',
          video: 'https://www.bilibili.com/video/BV1Tj411m7Mp/?spm_id_from=333.999.0.0',
          link: '',
          rulesInfo: '本游戏主要想突破传统游戏的媒介，把游戏和玩家关系拓展到更广的维度。',
          tag: ['限时人物养成', 'metagame', 'ARG']
        },
        {
          title: '我思故我在',
          img: [require('@/assets/我思故我在/imgs/1.png')],
          info: '游戏简介',
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['超现实主义', '实验游戏', '意识流']
        },
        {
          title: '气泡迷因',
          img: [require('@/assets/气泡迷因/imgs/1.png')],
          info: '游戏简介',
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['迷因', '超现实主义', '艺术']
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