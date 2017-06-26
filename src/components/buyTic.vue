<template lang="html">
<div class="form">
  <div class="book-info">
    <div class="book-step">
      <ul>
        <li v-for="step in bookStep" :class="{ active: nowPath === step.path }">{{ step.title }}</li>
      </ul>
    </div>
    <router-link to="/buyTic/filmTime"></router-link>
    <router-view></router-view>
  </div>
  <!-- <div class="order">
    <button class="btn" v-bind:class="{ active: nowPath === '/buyTic/filmTime' }">上一步</button>
    <button class="btn" v-bind:class="{ active: nowPath === 3}">下一步</button>
  </div> -->
</div>
</template>

<script>
import Bus from '@/Bus'

export default {
  data () {
    return {
      bookStep: [
        { title: '選擇電影及場次',
          path: '/buyTic/'},
        { title: '選擇座位',
          path: '/buyTic/seats' },
        { title: '訂購人資料' },
        { title: '完成購票' }
      ]
    }
  },
  computed: {
    nowPath () {
      return this.$route.path
    }
  },
  created () {
    Bus.$on('send-choice', (data) => {
      Bus.$data.movieInfo = data
    })
    Bus.$on('send-seats', (data) => {
      Bus.$data.orderSeats = data
    })
    Bus.$on('send-orderInfo', (data) => {
      Bus.$data.orderInfo = data
    })
  }
}
</script>

<style lang="scss" scope>
.form{
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  .book-info{
    width: 1126px;
    .book-step {
      display: flex;
      border: 3px solid #fed855;
      margin: 0;
      padding: 0;
      height: 50px;
      color: #fff;
      background-color: #000;

      ul {
        display: flex;
        list-style-type: none;
        width: 100%;
        padding: 0;
        margin: 0;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333;
          width: 100%;
          //height: 50px;
          &.active {
            background-color: #fed855;
            color: #000;
          }
        }
      }
      // flex-grow: 6; /* default 0 */
      // width: 100%;
    }
  }
}
</style>
