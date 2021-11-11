<template>
 


       <div class="col-xs-2 stat-holder"> 
        <div class="big-info text-info" v-bind:class="className">
          
           <div class="pull-left.icon-full-width">

             <i class=" icon-lg" v-bind:class="iconClass">  </i>

              <div class="big-details-holder">
                <span class="small-title"> {{title}} </span>
                <span class="big-details">  {{value}} </span>

              </div>
              <div class="clearfix"></div>

        
           </div>


        </div>  
      </div>

  
</template>


<script>
 

export default {
  name: 'StatsHolder',
  props: ['className','title','value','iconClass'],
  components: { },
  data() {
    return { 
      
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
