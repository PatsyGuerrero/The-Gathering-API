<template  >

<section class="principal">
    <div class="detail">
         <div class="cont_izq">
            <h1> {{detail.name}} </h1>
            <div class="cont_img">
                <img alt="Game" :src="detail.imageUrl" >
            </div>
        </div>
        <div class="cont_der">
            <h2>{{detail.power}}</h2>
            <span>{{detail.originalText}}</span>
            <p>{{detail.type}}</p>
            <p>{{detail.artist}}</p>
        </div> 
    </div>
</section>

</template>
<script>
import axios from 'axios';
export default {
    
    data(){
      return {
          detail:null
      }
  },
  mounted() {
      this.detailGame();
  },
  methods: {
      detailGame(){
           axios.get(`https://api.magicthegathering.io/v1/cards/${this.$route.params.id}`)
      .then(response => {
          console.log(response.data),
          this.detail=response.data.card
      })
      .catch(error => {
          console.log(error)
      })
      }
  },
}
</script>
<style lang="scss" scoped>

body{
    color: white;
}

section{
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 88vh;
}

    .detail{
    // background: #fff;
    width:45vw;
    height: 46vh;
    display: flex;
    flex-direction: row;
    border-radius: 1rem;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    color:white;
    }

.cont_izq {
    width: 20vw;
    // background-color: yellowgreen;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    
    }

.cont_img{
        width: 100%;
        // background-color: yellow;
        // height: fit-content;
        display: flex;
        justify-content: center;


        img{
            width: 180px;
        }
    }

.cont_der {
    width: 30vw;
    // background-color: white;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    
    }

</style>