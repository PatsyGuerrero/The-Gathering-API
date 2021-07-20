<template>
     <div class="cards">
         <h1>{{name}}</h1>
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
<style >
    .cards{
        display: flex; 
        /* justify-content: center; */
        /* align-content: center; */
        align-items: center;
        flex-direction: column;
        width:20vw;
        height: 51vh;
        background-color: bisque;
        border: 1px solid;
        border-radius: 10%;
    }

    .cards > img {
        width: 15vw;
    }

    .cards > h1 {
        font-size: 1.2rem;
    }
</style>