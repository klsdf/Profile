<template>
  <div class="home">
    <div class="center-text">游戏作品集<br>作者：闫辰祥</div>
    <div class="card-container">
      <GameCard v-for="(game, index) in games" :key="game.title" :game="game" :style="getCardStyle(index)"
        class="game-card" />
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
          info: `
《姆姆因子》是一个较传统的细胞战争游戏，玩家可以控制细胞来攻击其它细胞，并占领所有细胞。创新点是增加了技能系统，可以对一些细胞使用技能，使其产生不同buff。并且增加了多人联机功能。
1. 开局双方都拥有一个细胞
2. 细胞的基因会自动增加。
3. 玩家框选细胞后，对敌方的细胞右键可以攻击。每次攻击都会释放自己基因的一半数量。例如玩家细胞是100时，那么会释放50基因攻击敌人。
4. 玩家的基因若在路上遇到了中立/敌人细胞，则会攻击。
5. 失去所有细胞和基因的一方失败。在对局中让其他对手出局的玩家获胜。
`,
          video: '',
          link: 'https://pan.baidu.com/s/19IgyKDiHFaP0Ius5re1wEQ?pwd=44pm',
          rulesInfo: '游戏规则信息',
          tag: ['RTS', '单局对抗', '细胞战争']
        },
        {
          title: '还乡',
          img: [require('@/assets/还乡/imgs/game1.png')],
          info: `
             本游戏的灵感来源于大家小时候在纸上自制的新棋。也就是围"围追堵截棋"和"围棋的胜率模式"
所有棋子必须下在自己一个棋子的旁边，棋子会形成根和叶的关系，一旦根节点死亡，所有叶子节点死亡。棋子会消耗资源，需要让自己的棋子分化出资源节点。整体感受有点类似于围棋。占领的区域越大，就有更多的资源。只不过围棋是最后结算，而这个是每回合都会结算当前领地的资产。
    因为设计pvp的开发成本较高，暂时采用了pve的塔防设计。

    1. 游戏采用回合制的设计，玩家每回合可以执行一次操作。
    2. 操作分为分化和分裂两种类型 。
    3. 玩家初始拥有胚胎细胞，胚胎细胞可以向外扩张，扩张出去的细胞成为干细胞。
    4. 干细胞可以分化和分裂
    5. 干细胞进行一次分裂后就会变成生长细胞，生长细胞可以继续分裂但是不能分化。
    6. 只有干细胞可以分化，形成攻击细胞，防御细胞等 
          
          `,
          video: '',
          link: 'https://pan.baidu.com/s/1g263gxC3fPlRSYfy7HcNDA?pwd=l1qm',
          rulesInfo: '游戏规则信息',
          tag: ['新棋', '塔防', '生存']
        },
        {
          title: '山的那边',
          img: [require('@/assets/山的那边/imgs/1.png')],
          info: `恐怖解密游戏，带有一点meta要素
和《迪亚特洛夫行动》有点类似，前期只是一个温馨的RPG游戏，玩家在游玩过程中会发现很多奇怪掉san的东西。最后玩家会发现自己实际上是在一个恐怖迷宫中，需要同时在2D游戏和3D游戏中寻找线索，并逃离出去。2D游戏和3D游戏的地图是通用的，在2D中如果发现一个坑跳不过去，可以在3D中跳过去（马里奥）。这样可以互相利用彼此的特点和信息差来补足。
使用RPGMakerMV制作。`,
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
          info: '这是一个基于卡牌的meta游戏，故事背景来自于经典疑案“迪亚特洛夫事件”以及经典克苏鲁神话《死亡山脉》。玩家将扮演一支搜索队，来到神秘的山脉搜索失踪的迪亚特洛夫小队队员。游戏前期会以纯2D视角来进行卡牌游戏，随着卡牌游戏的进行，也会不断发展剧情和出现新的卡组。在游戏后期，类似《邪恶铭刻》玩家会离开2D的画面，来到3D的世界探索和卡牌战斗，寻找伙伴死亡的原因。',
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
            require('@/assets/通感/imgs/2.jpg'),
            require('@/assets/通感/imgs/3.jpg'),
            require('@/assets/通感/imgs/4.jpg'),
            require('@/assets/通感/imgs/5.jpg'),
            require('@/assets/通感/imgs/6.jpg'),
            require('@/assets/通感/imgs/7.jpg'),
          ],
          info: `

通感是一款实验游戏。游戏的所有内容都由文字构成。
现代游戏中，画面越来越绚丽，但是也会带来过多的信息，使得玩家失去了“想象”的权利。我希望创造一个完全沉浸式的游戏，游戏中玩家将在一个只有文字的3D世界中遨游。从文字和音效中感受一个不同的世界。同时，本游戏还在尝试探索游戏作为游戏内容的表现形式。例如如何让文字表现恐惧？如何让文字表现空间感等。旨在探索一个全新媒介的可能性。`,
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
          info: `
一款实验性的metagame，之前的游戏都是带有强烈魔法圈的，在进入游戏后就会一直沉浸于该游戏。
    本游戏主要想突破传统游戏的媒介，把游戏和玩家关系拓展到更广的维度。
本游戏打破了以往的设计范式，让游戏运行时可以在多个窗口/网页/APP中互相交流，共同进行游戏。
并且本游戏具有反身性，可以在游戏内修改游戏的配置文件和代码，对这些代码的修改也会造成游戏剧情的改变。`,
          video: 'https://www.bilibili.com/video/BV1Tj411m7Mp/?spm_id_from=333.999.0.0',
          link: '',
          rulesInfo: '本游戏主要想突破传统游戏的媒介，把游戏和玩家关系拓展到更广的维度。',
          tag: ['限时人物养成', 'metagame', 'ARG']
        },
        {
          title: '我思故我在',
          img: [require('@/assets/我思故我在/imgs/1.png')],
          info: `
本游戏是一个基于aigc的实验性叙事游戏，主要探索了涌现式结构的叙事方式在电子游戏中的展现形式。尝试解决了ai在内容输出和使用场景上的若干问题。并为电子游戏在叙事结构做出新的突破。

AI的困境
当今ai的大厦已经落成，只是上方仍漂浮着两朵乌云。
1. 内容输出的一致性和多样性之间的矛盾
2. 使用场景的合法性和必要性之间的矛盾
  1. 用户输入的低门槛与低感知

一致性和多样性的矛盾是指：如果ai给玩家提供更多类型的内容，那么其稳定性就会大幅下降，最终退化为通用模型。而若为玩家提供更加客制化的内容，那么其多样性就会大幅下降。
例如：如果我希望为游戏加入一个生成自定义武器的功能。那么

合法性和必要性的矛盾是指：如果ai的使用场景越是



传统游戏的叙事结构
传统游戏的叙事结构大概可以分为7种，
- 线性叙事（Linear Narrative）
游戏的剧情在一开始就设定好了，玩家只能按设定好的顺序进行游戏。
例如《最后生还者》
- 树形叙事（分支叙事）
也就是多结局叙事。或者在游戏发展中的某些重要操作会改变了游戏的结局。
例如《底特律：变人》
- 网状叙事
这种结构下，既可以像树形叙事那样一对多，也可以多对一，形成类似于“时间线收束”的体验。
例如：《赛博朋克2077》
- 模块化叙事/碎片叙事
不直接展现剧情结构，而是通过收集线索、日记、回忆、道具等方式拼出完整故事。
例如《黑魂》系列
- 开放叙事（Emergent Narrative）
这个实际上和上面的碎片叙事是一样的。设计师不直接指出完成的剧情，而是通过各种线索和碎片信息，让玩家自行猜想剧情。
例如《上古卷轴5》

涌现式叙事结构
而本游戏则使用了我称之为涌现式结构的新叙事结构。它区别于上述的所有叙事结构。
因为游戏的所有剧情发展都由“状态”来驱动。我们以典型的勇者斗恶龙的故事为例。传统的叙事中，作者会用类似英雄之旅的结构来完成剧情的大纲，然后再完善具体细节。而涌现式结构则不太一样，下一段剧情并不感知上一段剧情到底是什么，而是只监视状态。例如勇者斗恶龙中，我们设定恶龙死亡时故事结束。而恶龙到底是怎么样死亡的，这段剧情是不会感知的。它有可能是被勇者杀死，有可能是被下属反叛，有可能是自己摔死的。总之剧情的发展完全由上下文的逻辑所驱动。
游戏中有一个典型的逻辑链：因为我有眼睛，所以我可以看到。因为我可以看到，所以我可以知道我在哪里。
同样的，这个逻辑也完全可以修改为，因为我有耳朵，因为我是蝙蝠，所以我可以知道我在哪里。
这样我们就可以像搭积木一样，把整个故事都搭建起来。
而且这种叙事结构还有一个特征，那就是可以“打破平行世界的束缚”。还是以勇者斗恶龙为例子吧，国王得知公主被恶龙抢走了，他会做什么呢？他可能会召集勇者，也可能会发展科技，也可以会自己锻炼武技救回公主。这些都是可能的选项。假如我们选择了第一个，那么在游戏里面，就会有下面的故事：
”因为国王得知公主被恶龙抢走了，所以国王召集了勇者。“
而在我们的叙事结构中，第二个选项并不代表新的分支剧情，而是代表状态。状态可以并存。此时，你可以同时再选择第二项。那么此时的状态就变为了“国外召集了勇者”，同时“国王发展了科技”，那么在这两个状态下，就可能衍生出新的剧情：“勇者学会了冲锋枪的使用方法”
发现了吗？在传统游戏中，第二个选项会进入新的故事线，但是在涌现式结构中，只不过是增加了这个状态。
因此在本游戏中，也会看到主角同时处于教室和卧室的情况。这并非是bug，而是涌现式结构导致的特性。`,
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['超现实主义', '实验游戏', '意识流']
        },
        {
          title: '气泡迷因',
          img: [require('@/assets/气泡迷因/imgs/1.png')],
          info: `
《气泡迷因》是一款叙事向解密游戏。玩家需要在游戏中寻找那些东西是可以被“气泡化”的。
本游戏在解密的部分采用了基于状态的推理，部分解决了传统点击解密的困局，玩家的每一次点击都在学习信息，而不是进入全新的状态。
例如第一次点击，玩家知道了圆形的是可以点击的，就会立刻告诉玩家下一步需要点击脸。点击了脸之后，又告诉玩家需要点击头。之后的谜题越来越抽象，但是玩家的逻辑仍然非常清晰。因为这个机制相当于在解密的过程中直接嵌入了思维链。而不是像传统解密游戏那样，单纯给一个瓶子，让玩家猜测这个瓶子可以干什么。每一个谜题都需要重新思考。`,
          video: '【实验游戏《气泡迷因—欢迎来到符号界》 2025GlobalGamejam得奖作品】 https://www.bilibili.com/video/BV1UMwWekEPW/?share_source=copy_web&vd_source=7de8c277f16e8e03b48a5328dddfe2ce',
          link: '',
          rulesInfo: '',
          tag: ['迷因', '超现实主义', '艺术']
        },
        {
          title: '抽卡，合并，大乱斗！',
          img: [require('@/assets/抽卡合成大乱斗/imgs/1.png')],
          info: `
《抽卡，合并，大乱斗！》是对RTS游戏机制的一种尝试性探索。
传统的RTS游戏之所以没落，是由以下几个原因导致的。
1. 
2. 
3. 

本游戏是一款模拟手游抽卡的合成游戏。玩家需要用游戏内资源进行抽卡，将抽到的卡打到场上之后可以产生多种效果：例如兵卡可以自动生成士兵进攻对方；buff卡可以周围的卡片加buff。若把两张卡片叠在一起可以进行合并：同种类的卡会升级，不同种类的卡会融合出新的卡。同时本游戏还拥有轻量的DBG要素，玩家可以在游戏内来修改卡池的卡片组合。
总体来说，本游戏上手难度极低，同时有一定的策略深度，值得反复体验。`,
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['抽卡', '超现实主义', '艺术']
        },
        {
          title: '林西物语',
          img: [require('@/assets/林西物语/imgs/1.png')],
          info: '一款传统的roguelike+小队建设RPG游戏',
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['roguelike', '多周目', 'RPG']
        },
        {
          title: '宿醉阿弥陀佛',
          img: [],
          info: `世界毁灭了
1. 游戏的核心规则是避障。游戏中，屏幕上会随机飘来各种各样的物体。玩家需要快速反应是需要躲开还是接住。
1.1. 红色感叹号代表即将飘来一个障碍物，需要玩家躲开的。若没有躲开，会导致酒瓶被撞碎，从而消耗酒量。
1.2. 绿色酒瓶代表即将飘来一瓶酒，玩家需要去接住酒。若接住酒，会获得新的酒瓶，从而增加酒量。
2. 玩家在行驶的过程中需要不断消耗酒量。酒量等同于玩家的生命值，生命值耗尽，
3. 一段时间内没有碰到障碍物，可以进入fever模式，在fever模式下，全屏幕短时间内会出现大量的酒。此时，需要玩家疯狂晃动手柄和左摇杆，来尽可能收集更多的酒。          
`,
          video: '',
          link: '',
          rulesInfo: '',
          tag: ['拼贴艺术', '3D东方', '虚无主义']
        },
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