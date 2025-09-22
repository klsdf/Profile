<template>
<div class="title">
      闫辰祥个人简历
    </div>
    <div class="menu">
      <button class="button"><router-link to="/about">查看简历</router-link> </button>
      <button class="button"><router-link to="/work">工作经历</router-link> </button>
      <button class="button"><router-link to="/project">个人项目</router-link> </button>


      <button class="button"  @click="btnClick">退出</button>
    </div>
</template>




<style>

.title{
  position: absolute;
  font-size: 80px;
  top: 100px;
  left: 200px;


}

.menu {
  position: absolute;
  width: 20%;
  top: 300px;
  right: 50px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
}


.menu .button{

  width: 300px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  border:  none;
  margin-top: 10px;
  font-size: 40px;

}

</style>



<script>


// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  },
  methods:{
    btnClick:function(){
      window.close();    
    }
  }
}
</script>
