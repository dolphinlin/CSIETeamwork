<template lang="html">
  <div class="customer">
    <div class="order" v-for="order in orderSeats">
      <h1>
        {{order | transName}}
      </h1>
      <div class="info">
        <div class="name">
          <input type="text" name="name" placeholder="Name" @input="handleInput(order, 'name', $event)">
        </div>
        <div class="phone">
          <input type="tel" name="phone" placeholder="Phone" @input="handleInput(order, 'phone', $event)">
        </div>
        <div class="mail">
          <input type="mail" name="mail" placeholder="Mail" @input="handleInput(order, 'mail', $event)">
        </div>
      </div>
    </div>
    <button type="button" @click.prevent="handleSubmit">Submit</button>
  </div>
</template>

<script>
import Bus from '@/Bus'

export default {
  data () {
    return {
      orderSeats: [],
      orderInfo: {}
    }
  },
  created () {
    this.$set(this, 'orderSeats', Bus.$data.orderSeats)
    this.orderSeats.map(o => {
      this.$set(this.orderInfo, o, {})
    })
  },
  filters: {
    transName (name) {
      const x = 'ABCDEF'
      let nameX = name.split('-')[0]
      return `${x[+nameX]}-${+name.split('-')[1] + 1}`
    }
  },
  methods: {
    handleInput (order, field, e) {
      this.$set(this.orderInfo[order], field, e.target.value)
      console.log(this.orderInfo)
    },
    handleSubmit () {
      Bus.$emit('send-orderInfo', this.orderSeats.map(o => {
        return {
          seat: o,
          orderInfo: this.orderInfo[o],
          movieInfo: Bus.$data.movieInfo
        }
      }))
      this.$router.push({name: 'Search'})
    }
  }
}
</script>

<style lang="css">
</style>
