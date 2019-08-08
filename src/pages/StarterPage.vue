<template>
  <div class="container" style="margin-top: 8%">

    <h1 class="title" v-html="this.guide.title"></h1>
    <div class="section" v-html="this.guide.description">
    </div>
  </div>
</template>
<script lang="ts">
  import GuideService from '@/services/guide.service';


  export default{
    guideId:"",
    guide:{},
    data(){
      return {
        guideId: this.$route.params.guideId,
        guide: {}
      }
    },
    created(){
      if(localStorage.getItem(this.guideId)){
        try {
          this.guide = JSON.parse(<string>localStorage.getItem(this.guideId));
        }catch(e) {
          console.error(e)
        }
      }
      GuideService.getGuide(this.guideId).then( (response) =>{
                this.guide = response;
                localStorage.setItem(this.guideId, JSON.stringify(response))
              }
      );
    }
  }
</script>
<style>

</style>
