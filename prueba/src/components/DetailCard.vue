<template lang="">
    <div>
        <h1> {{detail.name}} </h1>
        <img alt="Game" :src="detail.imageUrl" >
        <h2>{{detail.power}}</h2>
        <span>{{detail.originalText}}</span>
        <p>{{detail.type}}</p>
        <p>{{detail.artist}}</p>
    </div>
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
<style lang="">
    
</style>