<template>
  <div class="container" style="margin-top: 8%">
    <h1 class="title" v-html="this.guide.title"></h1>
    <div class="section" v-html="this.guide.description">
    </div>
  </div>
</template>
<script lang="ts">
  import GuideService from '@/services/guide.service';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'guide-group',
  })
  export default class StarterPage extends Vue{
    guideId="";
    guide={};
    data(){
      return {
        guideId: this.$route.params.guideId,
        guide: {}
      }
    }
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
  /*
  Date: 24 Fev 2015
  Author: Pedro Oliveira <kanytu@gmail . com>
  */

  .hljs {
    color: #a9b7c6;
    background: #282b2e;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-symbol,
  .hljs-bullet {
    color: #6897BB;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-deletion {
    color: #cc7832;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-link {
    color: #629755;
  }

  .hljs-comment,
  .hljs-quote {
    color: #808080;
  }

  .hljs-meta {
    color: #bbb529;
  }

  .hljs-string,
  .hljs-attribute,
  .hljs-addition {
    color: #6A8759;
  }

  .hljs-section,
  .hljs-title,
  .hljs-type {
    color: #ffc66d;
  }

  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #e8bf6a;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

</style>
