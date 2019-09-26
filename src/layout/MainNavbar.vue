<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto">
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="title" to="/">
        <img src="../assets/img/favicon.png" height="40dp"/>
        Slack Spring Boot Starter
      </router-link>
    </template>
    <template slot="navbar-menu">
      <drop-down
        tag="li"
        title="Components"
        class="">
        <a style="color: #2c2c2c" class="nav-link" href="https://slack-spring-boot.kreait.dev/docs/latest-SNAPSHOT/reference/index.html">
          Reference-Documentation
        </a>
        <router-link style="color: #2c2c2c" class="nav-link" to="/docs/latest/api/">
          Api-Documentation
        </router-link>
      </drop-down>
      <drop-down
              tag="li"
              title="Examples"
              class="nav-item">

        <a style="color: #2c2c2c" href="https://github.com/kreait/slack-spring-boot-starter/blob/master/samples/slack-spring-boot-starter-sample/src/main/kotlin/com/kreait/slack/sample/rock_paper_scissors/RockPaperScissorsCommandReceiver.kt">
          <nav-link>
            Slash Command Receiver
          </nav-link>
        </a>
        <a style="color: #2c2c2c" href="https://github.com/kreait/slack-spring-boot-starter/blob/master/samples/slack-spring-boot-starter-sample/src/main/kotlin/com/kreait/slack/sample/rock_paper_scissors/RockPaperScissorsChannelListener.kt">
          <nav-link>
            Event Receiver
          </nav-link>
        </a>
        <a style="color: #2c2c2c" href="https://github.com/kreait/slack-spring-boot-starter/blob/master/samples/slack-spring-boot-starter-sample/src/main/kotlin/com/kreait/slack/sample/rock_paper_scissors/RockPaperScissorsSubmissionReceiver.kt">
          <nav-link>
            Interactive Component Receiver
          </nav-link>
        </a>
      </drop-down>
      <li class="nav-item">
        <a class="nav-link"
          rel="tooltip"
          title="Check us out on Github"
          data-placement="bottom"
          href="https://github.com/kreait/slack-spring-boot-starter"
          target="_blank">
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">Github</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Join the community on Discord"
          data-placement="bottom"
          href="https://discordapp.com/invite/fXfQmdJ"
          target="_blank">
          <i class="fab fa-discord"></i>
          <p class="d-lg-none d-xl-none">Discord</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
