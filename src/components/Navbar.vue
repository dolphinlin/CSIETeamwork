<template lang="html">
<nav>
  <div class="header">
    <ul>
      <router-link v-for="(link, index) in headerLink" :to="{name: link.name}" tag="li" :key="index" :exact="link.match">
        <a>{{link.text}}</a>
      </router-link>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      headerLink: [
        {
          name: 'Index',
          text: '首頁',
          match: true
        }, {
          name: 'Movies',
          text: '電影總覽'
        }, {
          name: 'Seats',
          text: '電影座位'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
@import "../assets/scss/flex";

.header {
  width: 100%;
  display: flex;
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;

    padding: 0;
    .router-link-active > a {
        background-image: linear-gradient(to bottom,#dbdbdb 0,#e2e2e2 100%);
    }
    li {
      a {
        background-image: -webkit-linear-gradient(#fcf8e3 0%, #faf2cc 100%);
        background-image: -o-linear-gradient(#fcf8e3 0%, #faf2cc 100%);
        background-image: linear-gradient(#fcf8e3 0%, #faf2cc 100%);
        text-decoration: none;
        transition: color .5s;
        color: #8a6d3b;
        &:hover {
          color: #454;
        }
        padding: 10px 15px;
      }

    }
  }
}
nav {
  @include flexPosition;
}

</style>
