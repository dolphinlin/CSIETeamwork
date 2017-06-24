<template lang="html">
  <div class="filmPage">
    <table class="filmTable">
      <tbody>
        <tr>
          <td class="filmPic" rowspan="3">
            <img v-if="selectedMovieIndex" :src="movies[selectedMovieIndex].img"/>
          </td>
          <td>
            <div class="selectStyle">
              <select v-model="selectedMovieIndex" @change="selectMovie">
                <option v-for="(movie, index) in movies" :value="index">{{movie.title}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id="" v-model="selectedMovieDateObj" @change="selectMovieDate" >
                <option v-for="d in selectedMovieDate">{{d}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id="" v-model="selectedMovieTimeObj">
                <option v-for="time in selectedMovieTime">{{time}}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="order">
      <button class="btn" @click="nextStep" :class="{'active' : selectedMovieTimeObj }">下一步</button>
    </div>
  </div>
</template>

<script>
import * as DB from '@/db'

export default {
  data () {
    return {
      movies: [],
      selectedMovieIndex: null,
      selectedMovieDate: [],
      selectedMovieDateObj: null,
      selectedMovieTime: [],
      selectedMovieTimeObj: null
    }
  },
  mounted () {
    this.$set(this, 'movies', DB.getAllData())
  },
  methods: {
    selectMovie () {
      this.$set(this, 'selectedMovieDate', Object.keys(this.movies[this.selectedMovieIndex].date))
      this.$set(this, 'selectedMovieTime', [])
    },
    selectMovieDate () {
      // console.log(this.)
      this.$set(this, 'selectedMovieTime', this.movies[this.selectedMovieIndex].date[this.selectedMovieDateObj])
    },
    nextStep () {
      if (this.selectedMovieTimeObj) {
        this.$router.push({
          name: 'Seats',
          query: { moviedate: this.selectedMovieDateObj, movietime: this.selectedMovieTimeObj, movie: this.selectedMovieIndex }
        })
      } else {
        window.alert('Please select a time.')
      }
    }
  }
}
</script>

<style lang="scss" scope>
@import "./../assets/scss/btn";

.filmPage {
  .filmTable {
    border: 1px solid #fed855;
    border-collapse: collapse;
    .filmPic {
      width: 180px;
      padding: 10px;
      border-right: 1px solid #fed855;
      img {
        width: 160px;
      }
    }
    .selectStyle {
      width: 250px;
      display: block;
      margin: 8px 0;
      line-height: 40px;
    }
  }
}
</style>
