<template>
  <LanguageSwitcher />
  <nav>
    <router-link to="/" class="home-btn">
      {{ $t('nav.home') }}
    </router-link>
    <router-link to="/job-game" class="job-game-btn">
      {{ $t('nav.jobGame') }}
    </router-link>
    <router-link to="/music" class="music-btn">
      {{ $t('nav.music') }}
    </router-link>
    <router-link to="/art" class="art-btn">
      {{ $t('nav.art') }}
    </router-link>
    <router-link to="/article" class="article-btn">
      {{ $t('nav.article') }}
    </router-link>
    <router-link to="/technology" class="technology-btn">
      {{ $t('nav.technology') }}
    </router-link>
    <router-link to="/game-community" class="game-community-btn">
      {{ $t('nav.gameCommunity') }}
    </router-link>
    <router-link to="/profile" class="profile-btn">
      {{ $t('nav.profile') }}
    </router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import LanguageSwitcher from './components/LanguageSwitcher.vue'
</script>

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

a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
