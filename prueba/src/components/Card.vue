<template>
     <div class="cards">
          <router-link :to="{ name: 'details', params: { id: id}}" class="router_active"><h1>{{name}}</h1></router-link>
         <img alt="Game" :src="img" >
         <!-- <span>{{types[0]}}</span>
         <p>{{flavor}}</p> -->
    </div>
</template>
<script>

export default {
    props: {
      name: {
        type: String,
      },
      img: {
        type:String,
      },
      id: {
        type:String,
      },
      types: {
        type:Array,
      },
      artist: {
          type:String
      },
      flavor: {
          type:String
      }
    },
//     data: function () {
//     return {
//     name: this.name
//     }
//   }
    
}
</script>
<style lang="css" >

:root{
   --grayishBlue: hsl(300, 31%, 11%);
}
    .cards{
        display: flex; 
        /* justify-content: center; */
        /* align-content: center; */
        align-items: center;
        flex-direction: column;
        width:20vw;
        height: 55vh;
        background-color: none;
        border-radius: 10%;
        box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    }

    .cards > img {
        width: 15vw;
    }

    .cards > h1 {
        font-size: 1.2rem;
    }

    .router_active {
        text-decoration: none;
        font-size: 0.5rem;
        color: rgb(241, 238, 238);
    }
</style>