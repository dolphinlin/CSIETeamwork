<template lang="html">
  <div class="customer">
    {{msg}}
  </div>
</template>

<script>
import Bus from '@/Bus'

export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
    this.$set(this, 'msg', Bus.$data.orderSeats)
  }
}
</script>

<style lang="css">
</style>
