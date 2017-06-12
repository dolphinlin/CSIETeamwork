<template lang="html">
  <div class="order">
    Order - {{$route.query.moviedate}} - {{$route.query.movietime}}
  </div>
</template>

<script>
import { EventBus } from './../event-bus.js'

export default {
}
</script>

<style lang="css">
</style>
