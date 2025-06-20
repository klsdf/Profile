<template>
  <router-link to="/" class="home-btn">
    🎵 独立游戏作品集
  </router-link>
  <router-link to="/job-game" class="job-game-btn">
    🎵 商业游戏项目经验
  </router-link>
  <router-link to="/music" class="music-btn">
    🎵 音乐作品集
  </router-link>
  <router-link to="/art" class="art-btn">
    🎵 美术作品集
  </router-link>
  <router-link to="/article" class="article-btn">
    🎵 游戏研究论文
  </router-link>
  <router-link to="/technology" class="technology-btn">
    🎵 技术作品集
  </router-link>
  <router-link to="/game-community" class="game-community-btn">
    🎵 游戏社区运营
  </router-link>
  <router-link to="/profile" class="profile-btn">
    🎵 个人简历
  </router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  color: #a5a5a5;
  background-color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
