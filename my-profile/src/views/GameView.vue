<template>
  <div class="home">
    <div class="center-text">{{ $t('pages.gamePortfolio') }}<br>{{ $t('pages.author') }}</div>
    <div class="card-container">
      <GameCard v-for="(game, index) in games" :key="game.title" :game="game" :style="getCardStyle(index)"
        class="game-card" />
    </div>
  </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
import { gameData } from '@/data/gameData'; // 引入游戏数据

export default {
  name: 'HomeView',
  components: {
    GameCard
  },
  /**
   * 组件数据
   * @returns {Object} 包含游戏数据的对象
   */
  data() {
    return {
      games: gameData
    };
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    /**
     * 启动所有卡片的动画
     */
    startAnimation() {
      this.games.forEach((game, index) => {
        this.animateCard(index);
      });
    },
    /**
     * 动画单个卡片
     * @param {number} index 卡片索引
     */
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
    /**
     * 获取卡片样式（保留接口，便于后续扩展）
     * @param {number} index 卡片索引
     */
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
  box-shadow: 0 4px 16px rgba(79, 140, 255, 0.15);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  text-align: center;
  z-index: 101;
}

.music-btn:hover {
  background: linear-gradient(90deg, #346fd1 0%, #34d399 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 8px 24px rgba(79, 140, 255, 0.25);
}
</style>