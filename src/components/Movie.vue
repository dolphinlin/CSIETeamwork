<template lang="html">
<div class="content">
  <div class="banner">
    <img :src="movie.cover" width="100%" height="100%" alt="Movie Cover">
  </div>
  <div class="order">
    <div class="btn">
      <button>觀賞預告</button>
    </div>
    <div class="btn">
      <button>立即訂票</button>
    </div>
  </div>
  <div class="movie">
    <div class="title">
       {{movie.title}}</div>
    <div class="main">
      <div class="info" v-html="movie.info"></div>
      <div class="detail">電影場次表：點選各日期反白場次即可開始線上訂票，場次開演前1小時不開放線上訂票。
        <div class="time">
          <div class="tabs">
            <ul class="tab">
              <li v-for="time in timeTitle" v-on:click="choiceDate(time)" v-bind:class="{active : choice.date === time}">{{time}}</li>
            </ul>
          </div>
          <div class="tabContent">
            <li class="list" v-for="d in movie.date[choice.date]">
              <!-- <a href="">{{d}}</a> -->
              <router-link :to="{name: 'Order', params: {id: $route.params.id}, query: { moviedate: choice.date, movietime: d }}">{{d}}</router-link>
            </li>
          </div>
        </div>
        <div class="desc">{{movie.desc}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as DB from '@/db'

export default {
  data () {
    return {
      movie: {},
      choice: {
        date: '',
        time: ''
      }
    }
  },
  beforeMount () {
    this.movie = DB.getData(this.$route.params.id)
    this.$set(this.choice, 'date', Object.keys(this.movie.date)[0])
  },
  computed: {
    timeTitle () {
      return Object.keys(this.movie.date)
    }
  },
  methods: {
    choiceDate (d) {
      this.$set(this.choice, 'date', d)
    }
  }
}
</script>

<style lang="scss" scope>
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .banner {
    display: flex;
    min: {
      width: 100%;
      height: 300px;
    }
    padding-bottom: 30px;
    border-bottom: 1px solid;
    background-clip: content-box;
  }
  .order {
    display: flex;
    align-items: center;
    justify-content: center;
    min: {
      width: 100%;
      height: 100px;
    }
    .btn>button {
      font-size: 20px
    }
    border-bottom: 1px solid;
  }
  .movie {
    padding: 35px 60px;
    display: flex;
    flex: 1 100%;
    flex-direction: column;
    height: 600px;
    background-color: #333;
    color: white;
    border: 1px solid #fed855;
    .title {
      display: block;
      padding-bottom: 15px;
      border-bottom: 2px solid #fed855;
    }
    .main {
      display: flex;
      flex: 1 100%;
      padding: 25px 0;
      .info {
        width: 30%;
      }
      .detail {
        display: flex;
        flex-direction: column;
        width: 70%;
        padding-left: 10px;
        .time {
          height: 40%;
          display: flex;
          flex-direction: column;
          border: 1px solid #fed855;
          .tabs {
            display: flex;
            width: 100%;
            background-color: #fff;
            .tab {
              display: flex;
              list-style-type: none;
              //height: 10%;
              padding: 0;
              margin: 0;
              li {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100px;
                color: #000;
                background-color: #fff;
                font-size: 20px;
                border-right: 1px solid #d1d1d1;
                &.active {
                  background-color: #fed855;
                }
              }
            }
          }
          .tabContent {
            display: flex;
            list-style-type: none;
            padding: 10px;
            line-height: 40px;
            p {
              width: 100%;
              border-bottom: 1px solid #666;
            }
            li.list {
              width: 50px;
              border-bottom: none;
              a {
                color: #fff;
                &:hover {
                  color: #fed855;
                }
              }
            }
          }
        }
        .desc {
          display: flex;
        }
      }
    }
  }
}
</style>
