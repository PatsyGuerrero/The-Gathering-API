<template >
    <div class="container" id="people">
        <div class="filter">
            <!-- <label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
            <label><input type="radio" v-model="selectedCategory" value="Artifact" /> Artifact</label>
            <label><input type="radio" v-model="selectedCategory" value="Autobot" /> Autobot</label>
            <label><input type="radio" v-model="selectedCategory" value="Character" /> Character</label>
            <label><input type="radio" v-model="selectedCategory" value="Conspiracy" /> Conspiracy</label>
            <label><input type="radio" v-model="selectedCategory" value="Creature" /> Creature</label>
            <label><input type="radio" v-model="selectedCategory" value="Dragon" /> Dragon</label>
            <label><input type="radio" v-model="selectedCategory" value="Instant" /> Instant</label>
            <label><input type="radio" v-model="selectedCategory" value="Instant" /> Instant</label>
            <label><input type="radio" v-model="selectedCategory" value="Instant" /> Instant</label>
            <label><input type="radio" v-model="selectedCategory" value="Instant" /> Instant</label> -->
            <multiselect v-model="value" :options="options"></multiselect>
        </div>
        <h1>{{filteredPeople.length}}</h1>
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
import Card from './Card.vue';
import Vue from 'vue'
import Multiselect from 'vue-multiselect';

Vue.component('multiselect', Multiselect);

// https://codepen.io/blakewatson/pen/xEXApK
export default {
//   components: { Card },
    name: 'Container',
    components: {
    Card,
    Multiselect
  },

  data(){
      return {
          data:null,
          selectedCategory: "All",
          upto: 10,
          size:null,
          value: "All",
          options: ["All","Artifact","Autobot","Character","Conspiracy","Creature","Dragon","Elemental","Enchantment",
                    "Goblin","Hero","instant","Instant","Jaguar","Knights","Land","Phenomenon","Plane","Planeswalker",
                    "Scheme","Sorcery","Specter","Summon","Tribal","Vanguard","Wolf","You’ll"] 
      }
  },

  mounted() {
      this.getTodos();
      this.totalPage();
  },

  methods: {
      async getTodos(){
           await axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
          this.data=response.data.cards
      })
      .catch(error => {
          console.log(error)
      })
      },

    //   totalPage(){
    //       return this.filteredPeople.length;
    //   },
  },
  computed: {
		filteredPeople: function() {
			var vm = this;
			var category = vm.value;
            
			
			if(category === "All") {
        
				return vm.data;
			} else {
            return vm?.data.filter(function(dato) {
					return dato.types[0] === category;
				});
			}   
		},
	}
}
</script>
<style lang="css" >

      .filter{
          width:20vw;
          margin-left: 10rem;
      }
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