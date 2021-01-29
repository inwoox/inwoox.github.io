<template>
  <div class="container">
    <div class="row">
      <ul class="nav">
        <li id="home" class="nav-item to-right-underline nav-item-1" @click="goPath($event)"><font-awesome-icon :icon="['fas','home']"/> Home</li>
        <li id="profile" class="nav-item to-right-underline nav-item-1" @click="goPath($event)"><font-awesome-icon :icon="['far','address-card']"/> Profile</li>
        <li id="skill" class="nav-item to-right-underline" @click="goPath($event)"><font-awesome-icon :icon="['fab','connectdevelop']"/> Skill</li>
        <li id="project" class="nav-item to-right-underline" @click="goPath($event)"><font-awesome-icon :icon="['fas','project-diagram']"/> Project</li>
        <li class="nav-item to-right-underline"><font-awesome-icon :icon="['fab','github']"/> Github</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
  export default {

    data(){
      return {
        idx: 0
      }
    },

    methods: {
      goPath(event){ 
        const targetId = event.currentTarget.id;
        if(targetId == 'home') {
          this.$router.push({name:'Home'})        
        }
        if(targetId == 'profile') {
          this.$router.push({name:'Profile'})        
        }
        if(targetId == 'skill') {
          this.$router.push({name:'Skill'})  
        }
        if(targetId == 'project') {
          this.$router.push({name:'Project'})  
        }
        setTimeout(() => {
          // 선택된 요소의 id와 일치하는 요소에 on 클래스 추가
          $('#' + targetId).addClass('on');

          // .nav li 요소 중에 on을 클래스로 가지지 않은 것을 선택하여, un-on 클래스 추가
          $('.nav li').not('.nav li.on').addClass('un-on')
        }, 100);  
      },
    }
    
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Itim&display=swap');

  .row { font-size: 50px; font-family: 'Bangers', cursive; font-family: 'Itim', cursive;
  width: 300px; margin-left: 5%; margin-top: 5%; position: fixed; left:0px; top:0px;}
  .nav { width:100%; margin-top: 5%; }
  .nav-item { margin-bottom: 10%; cursor: pointer;}

  .on { transition: all 1s; color: black;}
  .un-on { transition: all 1s; transition-property: opacity; opacity: 0.3; }

  .to-right-underline{ position: relative; }
  .to-right-underline:after{ 
    content: ""; position: absolute; left: 0; bottom: -10px;
    width: 0px; height: 2px; margin: 5px 0 0; transition: all 0.2s ease-in-out; transition-duration: 0.3s;
    opacity: 0; background-color: #07d036;
  }
  .to-right-underline:hover:after{ width: 100%; opacity: 1; }
</style>