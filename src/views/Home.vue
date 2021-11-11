<template>

<div class="content">

   <div class="container-fluid">

     <div class="row">



       <div class="col-xs-2 stat-holder"> 
        <div class="big-info bestblock text-info">
          
           <div class="pull-left.icon-full-width">

             <i class="icon-block icon-lg"> </i>

              <div class="big-details-holder">
                <span class="small-title"> best block </span>
                <span class="big-details"> # {{bestBlock}} </span>

              </div>
              <div class="clearfix"></div>

        
           </div>


        </div>  
      </div>


    <div class="col-xs-2 stat-holder"> 
        <div class="big-info uncleCount text-info">
          
           <div class="pull-left.icon-full-width">

             <i class="icon-uncle icon-lg"> </i>

              <div class="big-details-holder">
                <span class="small-title"> uncles </span>
                <span class="big-details"> # {{uncleCount}} </span>

              </div>
              <div class="clearfix"></div>

        
           </div>


        </div> 
      </div>





        
     </div> 

   </div>



   
 

</div>
</template>


<script>
 

export default {
  name: 'Home',
  props: [],
  components: { },
  data() {
    return {
      bestBlock: 0,
      uncleCount: 0
      
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
