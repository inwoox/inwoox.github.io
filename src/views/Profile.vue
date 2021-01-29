<template>
  <div class="container">
    <div class="row justify-content-center">
      <Header/>
      <body class="body">
        <div>
          <transition name="fade">
            <p class="h4" v-if="formshow"><strong class="h1 under"> 누구</strong><br/><br/>
              늘 도전하는 개발자 <strong>황인우</strong>입니다. <font-awesome-icon :icon="['far','smile']"/><br/>
              하루를 살더라도, 어제보다 더 나은 더 개발자가 되기를 소망하며,<br/>
              공부한 내용들을 요약하여 정리하고, 그것을 적용해보는 것을 즐기고 있습니다.<br/><br/><br/>
              <strong class="h1 under1">좋아하는 것</strong><br/><br/>
              Java와 C#, Javascript를 좋아하며, Vuejs와 SPRING을 자주 사용합니다.<br/>
              컨테이너 기술과 클라우드에 관심이 많아, 도커나 AWS를 잘 다루기 위해<br/>
              애쓰고 있습니다.<br/>
              또한 마이크로 아키텍처와 지속적 배포에 관심이 많습니다.<br/><br/><br/>
              <strong class="h1 under2">앞으로</strong><br/><br/>
              프론트엔드부터 백엔드 그리고 데브옵스에 이르기까지, 개발, 배포, 운영까지 가능한<br/>
              풀스택 개발자를 지향합니다.
              </p>
          </transition>
        </div>
      </body>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
  export default {

    data(){
      return {
        formshow: false
      }
    },
    components: {
      Header,
      Footer
    },
    created() {
      setTimeout(() => {
        this.formshow = true
      }, 200);
    }
  }
</script>

<style lang="scss" scoped>
  body { min-height: 73vh; margin-top: 10%;}
  body .h4  {
     position: absolute;
     margin-top: 15%;
     margin-left: 5%;
     left:50%;
     transform: translate(-50%, -50%);                                                                   
     color: black;
  }

  .fade-enter-active { transition: opacity 2s; }
  .fade-enter { opacity: 0; }

  .under { position: relative;}
  .under1 { position: relative;}
  .under2 { position: relative; }
  .under:after{ 
    content: ""; position: absolute; left: 0; bottom: -10px; width: 100%; height: 3px; margin: 5px 0 0;
    opacity: 1; background-color: 	#FF8C00;
  }
  .under1:after{ 
    content: ""; position: absolute; left: 0; bottom: -10px; width: 100%; height: 3px; margin: 5px 0 0;
    opacity: 1; background-color: #FFD700;
  }
  .under2:after{ 
    content: ""; position: absolute; left: 0; bottom: -10px; width: 100%; height: 3px; margin: 5px 0 0;
    opacity: 1; background-color: green;
  }
</style>