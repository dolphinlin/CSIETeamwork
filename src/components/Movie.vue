<template lang="html">
  <h1>
    {{movie}}
  </h1>
</template>

<script>
import * as DB from '@/db'

export default {
  data () {
    return {
      movie: []
    }
  },
  mounted () {
    this.movie = DB.getData(this.$route.params.id)
  }
}
</script>

<style lang="css">
</style>
