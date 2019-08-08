<template>
  <div>
    <div class="page-header page-header-small" >
      <div class="container">
            <h4 class="title">Why use slack-spring-boot-starter?</h4>
            <div class="card-body text-black">
              <ul>
                <li class="list-group-item">Comes with a handy set of abstractions that make your life boilerplate free</li>
                <li class="list-group-item">Creating slash commands is as easy as implementing a single interface</li>
                <li class="list-group-item">Reacting on events is as easy as implementing a single interface</li>
                <li class="list-group-item">Reacting on interactive components is as easy as implementing a single interface</li>
                <li class="list-group-item">App installation workflow just works and takes care of the whole authentication flow</li>
                <li class="list-group-item">Supports signing out of the box</li>
              </ul>
            </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row" >
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">What is Slack Spring Boot Starter?</h2>
            <h4 class="description">
              The Slack Spring Boot Starter is an sdk to build your own Slackbot.
              It comes with handy default implementations such as the teamstore which enable you to focus on the important part of  software development: <b>Your product</b>
            </h4>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  It's really that simple?
                  <br />
                  <br />
                  <small>-almost everyone</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3>
                Why we do what we do:
              </h3>
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
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Guides</h2>
        <div class="team row">
            <div class="col-md-4" style=" padding-bottom: 20px" v-for="(guide) in guides" v-bind:key="guide.id">
                <div class="card h-100" style="width: 20rem;;">
                <div class="card-body">
                  <h4 class="card-title">{{guide.title}}</h4>
                  <p class="card-text">{{guide.excerpt}}</p>
                </div>
                <router-link class="btn btn-primary" :to="{ name: 'guides', params: { guideId: guide.id }} ">
                  Read more
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script lang="ts">
const Button =require("@/components/Button");
const FormGroupInput = require("@/components/Inputs/formGroupInput");
import GuideService from '../services/guide.service';
import VueRouter from 'vue-router';

export default {
  name: 'landing',
  bodyClass: 'landing-page',
  guides:[] = [],
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data(){
    return {
      guides:[]= []
    }
  },
  mounted() {
    if(localStorage.getItem("guides")){
      try {
        this.guides = JSON.parse(<string>localStorage.getItem("guides"));
      }catch(e) {
        console.error(e)
      }
    }
    GuideService.get()
            .then( (response) =>{
              console.log("response: " +response);
              this.guides = response;
              localStorage.setItem("guides",JSON.stringify(response))
            });
  },
  render(){

  }
};
</script>
<style>


</style>
