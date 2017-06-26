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
                <option value="" disabled selected>Select Movie</option>
                <option v-for="(movie, index) in movies" :value="index">{{movie.title}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id="" v-model="selectedMovieDateObj" @change="selectMovieDate">
                <option value="" disabled selected>Select Date</option>
                <option v-for="d in selectedMovieDate">{{d}}</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id="" v-model="selectedMovieTimeObj">
                <option value="" disabled selected>Select Time</option>
                <option v-for="time in selectedMovieTime">{{time}}</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="order">
      <button class="btn" @click="nextStep" :class="{'active' : selectedMovieTimeObj }">Next</button>
    </div>
  </div>
</template>

<script>
import * as DB from '@/db'
import Bus from '@/Bus'

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
        Bus.$emit('send-choice', {
          movieDate: this.selectedMovieDateObj,
          movieTime: this.selectedMovieTimeObj,
          movie: this.selectedMovieIndex
        })
        this.$router.push({
          name: 'Seats'
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
  width: 1126px;
  .filmTable {
    border-top: 0;
    border: 3px solid #fed855;
    width: 100%;
    border-collapse: collapse;
    .filmPic {
      width: 25%;
      padding: 10px;
      border-right: 3px solid #fed855;
      img {
        width: 250px;
      }
    }
    .selectStyle {
      width: 75%;
      display: block;
      margin: 8px 0;
      line-height: 40px;
      select {
        width: 250px;
        font-size: 15px;
      }
    }
  }
}
</style>
