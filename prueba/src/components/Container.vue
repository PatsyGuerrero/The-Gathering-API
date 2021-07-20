<template >
    <div class="containerClass">
        <Card v-for="(dato,key) in data" 
        :key="key" 
        :name="dato.name" 
        :id="dato.id"
        :img="dato.imageUrl"
        :types="dato.types"
        :artist="dato.artist"
        :flavor="dato.flavor"/>
    </div>
</template>
<script>
import axios from 'axios';
import Card from './Card.vue'

export default {
//   components: { Card },
    name: 'Container',
    components: {
    Card,
  },
  data(){
      return {
          data:null
      }
  },
  mounted() {
      this.getTodos();
  },
  methods: {
      getTodos(){
           axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
          console.log(response.data),
          this.data=response.data.cards
      })
      .catch(error => {
          console.log(error)
      })
      }
  },
//   created(){
//       axios.get('https://api.magicthegathering.io/v1/cards')
//       .then(response => {
//           console.log(response);
//       })
//       .catch(error => {
//           console.log(error)
//       })
//   }
    
}
</script>
<style lang="css" >
      .containerClass{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* align-items: center; */
        gap:1rem;
        /* width: fit-content; */
        margin: 0 auto;
        /* padding-left: 25px; */
      }

</style>