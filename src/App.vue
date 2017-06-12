<template>
  <div id="app">
    <navbar></navbar>
    <!-- Your embedded video player code -->
    <div id="fb-root">
      <!-- <div id="streamvideo" class="fb-video" :data-href="streamViedo" data-autoplay="false" data-width="500" data-show-text="false">
        <div class="fb-xfbml-parse-ignore">
          Loading...
        </div>
      </div> -->
    </div>
    <div id="fb-login">
      <button type="button" name="button" @click.prevent="loginFB">Login FB</button>
      <button type="button" name="button" @click.prevent="logoutFB">Log out</button>
      <button type="button" name="button" @click.prevent="getLoginInfo">Login Info</button>
    </div>
    <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      streamViedo: ''
    }
  },
  computed: {
    videoContent () {
      return this.streamViedo.length !== 0
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.$set(this, 'streamViedo', 'https://www.facebook.com/hui.bo.54/videos/1420691778019798/')
    //   setTimeout(function () {
    //     window.FB.XFBML.parse(document.getElementById('fb-root'))
    //   }, 100)
    // }, 2000) // ms
  },
  methods: {
    loginFB () {
      window.FB.login((res) => {
        console.log(res)
      }, {scope: 'public_profile,email'})
    },
    logoutFB () {
      window.FB.logout()
    },
    getLoginInfo () {
      window.FB.getLoginStatus(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/flex";

body {
  @include flexPosition;

  background-color: #eee;
  margin: 0;
  padding: 0;
  width: 100%;
}

#app {
  @include flexPosition;
  flex-direction: column;

  width: 80%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
