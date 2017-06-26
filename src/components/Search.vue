<template lang="html">
  <div class="search">
    <div class="result" v-show="searchData.length">
      {{ preProcessData }}
    </div>
    <input type="text" v-model="searchString">
    <button type="button" name="button" @click.prevent="handleSearch">Search</button>
  </div>
</template>

<script>
import Bus from '@/Bus'
import * as DB from '@/db'

export default {
  data () {
    return {
      searchData: [],
      searchString: ''
    }
  },
  computed: {
    preProcessData () {
      return this.searchData.map(d => {
        return {
          seat: this.transName(d.seat),
          orderInfo: d.orderInfo,
          movieInfo: {
            movieDate: d.movieInfo.movieDate,
            movieTime: d.movieInfo.movieTime,
            movie: DB.getData(d.movieInfo.movie).title
          }
        }
      })
    }
  },
  methods: {
    handleSearch () {
      this.searchData = Bus.$data.orderInfo.filter(o => {
        return o.orderInfo.name === this.searchString || o.orderInfo.phone === this.searchString || o.orderInfo.mail === this.searchString
      })
    },
    transName (name) {
      const x = 'ABCDEF'
      let nameX = name.split('-')[0]
      return `${x[+nameX]}-${+name.split('-')[1] + 1}`
    }
  }
}
</script>

<style lang="css">
</style>
