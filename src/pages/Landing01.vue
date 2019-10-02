<template>
  <div>
    <div class="section bg-primary text-white" >
      <div class="container">
        <div class="row" >
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">What is it?</h2>
            <h3 class="description text-white text_bold">
              Slack Spring Boot Starter is a SDK to build your own Slack Bots and Integrations providing handy default implementations to ease development.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <center>
      <div class="section section-about-us">
        <div class="container">
          <h2 class="title">Why use Slack Spring Boot Starter?</h2>
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h5>
              Slack Spring Boot Starter comes with a set of abstractions to prevent boilerplate code. Creating Slash Commands, handling events and reacting
              on interactive components is as simple as implementing an interface. It also comes with a simplified installation workflow that takes care of the
              whole authentication workflow. It also supports signing out of the box.
            </h5>
          </div>
        </div>
      </div>
    </center>
    <div class="section container">
      <CodeCarousel></CodeCarousel>
    </div>
    <center class="m-12">
      <div class="w-50 m-12">
        <h2>
          Why we do what we do
        </h2>
        <h5>

        </h5>
        <p>
          We experienced that no currently available sdk suits our needs in the JVM world, so we started from scratch and decided to create an abstraction layer which can be open sourced,
          so no one has to implement all the available slack methods again. <br/>
          Since we decided to make the sdk available for others, our view on how to implement things shifted. for example:<br/>
          <i>"we have to save the authentication token when the user installs the app"</i><br/>
          shifted to:
          <i>"everyone has to save those tokens, lets create a teamstore abstraction with default implementations"</i>
        </p>
        <p>and now you dont have to struggle with the oauth & installation flow anymore, just run the app, hit install and the whole oauth flow just works,
          and the credentials are saved in a mongoDb, a file, or for development purposes just in memory</p>
    </div>
  </center>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Guides</h2>
        <div class="team row">
            <div class="col-md-4" style=" padding-bottom: 20px" v-for="(guide, index) in guides" v-bind:key="index">
                <div class="card h-100" style="width: 20rem;;" v-if="index < maxGuides">
                <div class="card-body">
                  <h4 class="card-title">{{guide.title}}</h4>
                  <p class="card-text">{{guide.excerpt}}</p>
                </div>
                <router-link class="btn btn-primary" :to="{ name: 'guides', params: { guideId: guide.id }} ">
                  READ MORE
                </router-link>
              </div>
            </div>
          <div class="text-center w-100">
            <div class="btn btn-primary w-25" v-if="maxGuides === 6" v-on:click="viewAll()">VIEW ALL</div>
            <div class="btn btn-primary w-25" v-if="maxGuides > 6" v-on:click="collapse()">COLLAPSE</div>
          </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
const Button =require("@/components/Button");
import GuideService from '../services/guide.service';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'landing',
})
export default class Landing extends Vue {
  name= 'landing';
  bodyClass= 'landing-page';
  guides = [];
  maxGuides=6;
  static data(){
    return {
      guides:[]= [],
      maxGuides:6
    }
  }
  mounted() {
    if(localStorage.getItem("guides")){
      try {
        this.guides = JSON.parse(localStorage.getItem("guides"))
      }catch(e) {
        console.error(e)
      }
    }
    GuideService.get()
            .then( (response) =>{
              console.log("response: " +response);
              this.guides = response;
              localStorage.setItem("guides",JSON.stringify(response));
            });
  }

  viewAll(){
    this.maxGuides= this.guides.length;
    console.log(this.maxGuides)
  }

  collapse(){
    this.maxGuides= 6;
    console.log(this.maxGuides)
  }
};
</script>
<style>
li {
  list-style-type: none;
  font-size: 1.24em;
  text-align: left;
  margin-bottom: 1%;
 }
</style>
