<template>

<div class="content">

   <div class="container-fluid">

     <div class="row">


       <StatsHolder
       className="bestblock"
       iconClass="icon-block"
       title="best block"
       :value="bestBlock"
        /> 

         <StatsHolder
       className="uncleCount"
       iconClass="icon-uncle"
       title="uncles"
       :value="uncleCount"
        /> 

         <StatsHolder
       className="lastBlock"
       iconClass="icon-time"
       title="last block"
       :value="lastBlock"
        /> 

        <StatsHolder
       className="avgBlockTime"
       iconClass="icon-gas"
       title="avg mint time"
       :value="avgBlockTime"
        /> 

         <StatsHolder
       className="hashrate"
       iconClass="icon-hashrate"
       title="avg hashrate"
       :value="avgHashrate"
        /> 

         <StatsHolder
       className="difficulty"
       iconClass="icon-difficulty"
       title="difficulty"
       :value="lastDifficulty"
        /> 
         

        
     </div> 

   </div>



   
 

</div>
</template>


<script>
 import StatsHolder from './components/stats-holder.vue'

export default {
  name: 'Home',
  props: [],
  components: { StatsHolder },
  data() {
    return {
      bestBlock: 0,
      uncleCount: 0,
      lastBlock: 0,
      avgBlockTime:0,
      avgHashrate: 0,
      lastDifficulty: 0
      
    }
  },

  created(){

 
   

  },
  mounted: function () {
    
  }, 
  methods: {

        


      
 

  }
}
</script>
