<template lang="html">
<div class="content">
  <!-- <a v-for="(movie, index) in movies" :href="" class="item"  style="background-image: url(https://cn.vuejs.org/images/logo.png)">
    <div class="title">{{movie.title}}</div>
    <div class="desc">{{movie.desc}}</div>
  </a> -->
  <router-link v-for="(movie, index) in movies" :to="'/movies/' + index" :style="'background-image: url(' + movie.img + ')' " class="item" :key="index">
    <div class="desc">{{movie.title}}</div>
    <!-- <img :src="movie.img" alt=""> -->
  </router-link>
  <!-- <div class="item" v-for="movie in movies">
  </div> -->
</div>
</template>

<script>
import * as DB from '@/db'

export default {
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    this.movies = DB.getAllData()
  }
}
</script>

<style lang="scss" scope>
@import "../assets/scss/customer";

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .item {
    @include hw(225px, 400px);
    position: relative;
    text-decoration: none;
    color: #000;
    background-color: #eee;
    margin: 5px 5px 5px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .desc {
      position: absolute;
      height: 0;
      bottom: 0;
      width: 100%;
      transition: all .5s;
      overflow: hidden;
      background-color: #ccc;
    }
    &:hover>.desc {
      height: 25%;
    }
  }
}
</style>
