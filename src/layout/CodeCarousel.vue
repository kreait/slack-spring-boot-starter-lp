<template>
<center>
  <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#2B2B2B"
        class="w-75 m-12"
        img-height="480"
        style="text-shadow: 1px 1px 2px #000000;">
        <b-carousel-slide
                style="height: 440px;"
                caption="Want to post a message?"
                text="Simply call slackClient.chat().postMessage() and pass your message!"
                img-src="../assets/img/code_snippet_post_message.png">
        </b-carousel-slide>
        <b-carousel-slide
                style="height: 440px;"
                caption="Want to open a dialog? "
                text="Simply call slackClient.dialog().open(), and pass your elements."
                img-src="../assets/img/code_snippet_open_dialog.png">
        </b-carousel-slide>
        <b-carousel-slide
                style="height: 440px;"
                caption="Want to react to a slash-command?"
                text="Simply implement the SlashCommandReceiver interface"
                img-src="../assets/img/code_snippet_slash_command.png">
        </b-carousel-slide>
      </b-carousel>
    </center>
</template>
<script>
import BootstrapVue from 'bootstrap-vue'
import { Component, Vue } from 'vue-property-decorator';

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
@Component({
  name: 'CodeCarousel',
  components: BootstrapVue
})
export default class CodeCarousel extends Vue{
};

</script>
<style></style>
