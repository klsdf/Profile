<template>
  <div class="home">
    <div class="center-text">游戏作品集<br>作者：闫辰祥</div>


    <div class="card-container">
      <GameCard
        v-for="(game, index) in games"
        :key="game.title"
        :game="game"
        :style="getCardStyle(index)"
        class="game-card"
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
          img: [
            require('@/assets/免费领取JavaScript学习资料/imgs/1.png'),
            require('@/assets/免费领取JavaScript学习资料/imgs/2.png'),
            require('@/assets/免费领取JavaScript学习资料/imgs/3.png'),
            require('@/assets/免费领取JavaScript学习资料/imgs/4.png'),
          ],
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
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      this.games.forEach((game, index) => {
        this.animateCard(index);
      });
    },
    animateCard(index) {

      let speedFactor = 0.1;
      const card = this.$el.querySelectorAll('.game-card')[index];
      let speedX = (Math.random() - 0.5) * speedFactor; // 随机速度
      let speedY = (Math.random() - 0.5) * speedFactor;
      let posX = Math.random() * 100; // 初始位置
      let posY = Math.random() * 80;
      let isPaused = false; // 标志变量

      // 获取屏幕宽高和卡片宽高
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const maxX = 100 - (cardWidth / vw) * 100;
      const maxY = 100 - (cardHeight / vh) * 100;

      const move = () => {
        if (!isPaused) {
          posX += speedX;
          posY += speedY;
          // 修正边界判断，考虑卡片宽高
          if (posX < 0) {
            posX = 0;
            speedX *= -1;
          }
          if (posX > maxX) {
            posX = maxX;
            speedX *= -1;
          }
          if (posY < 0) {
            posY = 0;
            speedY *= -1;
          }
          if (posY > maxY) {
            posY = maxY;
            speedY *= -1;
          }
          card.style.left = `${posX}vw`;
          card.style.top = `${posY}vh`;
        }
        requestAnimationFrame(move);
      };

      card.addEventListener('mouseenter', () => {
        isPaused = true;
      });

      card.addEventListener('mouseleave', () => {
        isPaused = false;
      });

      move();
    },
    getCardStyle(index) {
      // 移除不再需要的代码
    }
  }
};
</script>

<style scoped>
.card-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 1000px;
}

.game-card {
  position: absolute;
  transition: transform 1s;
}

.center-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: #999;
  z-index: 100;
  color: #aaaaaa;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  user-select: none;
  
}

.music-btn {
  display: inline-block;
  margin: 24px auto 0 auto;
  padding: 12px 32px;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #4f8cff 0%, #6ee7b7 100%);
  border: none;
  border-radius: 32px;
  box-shadow: 0 4px 16px rgba(79,140,255,0.15);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  text-align: center;
  z-index: 101;
}
.music-btn:hover {
  background: linear-gradient(90deg, #346fd1 0%, #34d399 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 24px rgba(79,140,255,0.25);
}
</style>