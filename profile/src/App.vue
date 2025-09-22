<template>
 
 <div class="background">
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0;
  margin: 0;
}

nav {
  padding: 30px;
}

a {
  font-weight: bold;
  text-decoration: none; /* 去除下划线 */
  color: #2c3e50;
}



.background {
  height: 100vh;
  background-image: url('../public/images/bg.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;

  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}



/* a.router-link-exact-active {
   color: #42b983; 
} */
</style>

<script>

</script>
