<template lang="html">
<div class="form">
  <div class="book-info">
    <div class="book-step">
      <ul>
        <li v-for="step in bookStep">{{ step.title }}</li>
      </ul>
    </div>
    <router-link to="/buyTic/filmTime"></router-link>
    <router-view></router-view>
  </div>
  <div class="order">
    <button class="btn" @click="isActive=1" v-bind:class="{ active: isActive === 1 }">上一步</button>
    <button class="btn" @click="isActive=2" v-bind:class="{ active: isActive === 2}">重新選擇</button>
    <button class="btn" @click="isActive=3" v-bind:class="{ active: isActive === 3}">下一步</button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isActive: 3,
      bookStep: [
        { title: '選擇電影及場次' },
        { title: '選擇座位' },
        { title: '選擇票種' },
        { title: '選擇付款方式' },
        { title: '確認訂單' },
        { title: '完成購票' }
      ]
    }
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
    width: 100%;
    border: 3px solid #fed855;

    .book-step {
      display: flex;
      margin: 0;
      padding: 0;
      height: 50px;
      color: #fff;
      background-color: #000;
      border-bottom: 3px solid #fed855;
      ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #333;
          //padding-right: -2cm;
          width: 189px;
          height: 50px;
        }
      }
      // flex-grow: 6; /* default 0 */
      // width: 100%;
    }
  }
  .order {
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      width: 150px;
      height: 40px;
      border: none;
      //border-color: #fed855;
      border-radius: 20px;
      font-size: 16px;
      color: #fff;
      font-weight: bold;
      background-color: #555;
      cursor: pointer;
      margin: 30px 15px;
      outline:none;
      &.active {
        background-color: #fed855;
        color: #000;
      }
    }
  }
}
</style>
