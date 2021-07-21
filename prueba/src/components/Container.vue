<template >
    <div class="container" id="people">
        <div class="filter">
            <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
            <label><input type="radio" v-model="selectedCategory" value="Artifact" /> Artifact</label>
            <label><input type="radio" v-model="selectedCategory" value="Creature" /> Creature</label>
            <label><input type="radio" v-model="selectedCategory" value="Instant" /> Instant</label>
        </div>
        

        <div class="containerClass">
            <Card v-for="(dato,key) in filteredPeople" 
            :key="key" 
            :name="dato.name" 
            :id="dato.id"
            :img="dato.imageUrl"
            :types="dato.types"
            :artist="dato.artist"
            :flavor="dato.flavor"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Card from './Card.vue'
// https://codepen.io/blakewatson/pen/xEXApK
export default {
//   components: { Card },
    name: 'Container',
    components: {
    Card,
  },
  data(){
      return {
          data:null,
          selectedCategory: "All",
          loading: false,
          upto: 6,
          pages: [],
          pageArea: "",
          isMobile: false,
       
      
      }
  },
  mounted() {
      this.getTodos();
  },
  methods: {
      async getTodos(){
           await axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        //   console.log(response.data),
          this.data=response.data.cards
      })
      .catch(error => {
          console.log(error)
      })
      }
  },
  computed: {
		filteredPeople: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category === "All") {
                console.log(vm?.data);
				return vm.data;
			} else {
                // console.log(data);
            return vm?.data.filter(function(dato) {
					return dato.types[0] === category;
				});
			}
		}
	}
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