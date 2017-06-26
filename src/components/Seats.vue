<template lang="html">
  <div class="seats">
    <div class="order">
      Order - {{movieInfo.movieDate}} - {{movieInfo.movieTime}} - {{movieInfo.movie}}
    </div>
    <table class="seatTable">
      <tbody>
        <tr>
          <th></th>
          <th colspan="10" class="screen">螢幕方向</th>
        </tr>
        <tr>
          <th></th>
          <th v-for="(r, indexR) in seats.row">{{indexR + 1}}</th>
        </tr>
        <tr v-for="(c, indexC) in seats.col">
          <td>{{seatLater[indexC]}}</td>
          <td class="seat" v-for="(r, indexR) in seats.row" v-bind:class="{invalid : seats.invalid[indexC + '-' + indexR], active : orders[indexC + '-' + indexR]}" v-on:click="choiceSeat(indexC + '-' + indexR)"></td>
        </tr>
      </tbody>
    </table>
    <div class="order">
      <button class="btn" @click.prevent="submitOrder">Submit</button>
    </div>
  </div>
</template>

<script>
import Bus from '@/Bus'

export default {
  data () {
    return {
      seats: {
        row: 10,
        col: 6,
        limit: 4,
        invalid: {
          '0-0': true,
          '0-1': true,
          '0-2': true,
          '0-7': true,
          '0-8': true,
          '0-9': true,
          '1-0': true,
          '1-9': true,
          '2-0': true,
          '2-9': true,
          '5-4': true,
          '5-5': true}
      },
      orders: {},
      seatLater: 'ABCDEF',
      movieInfo: {}
    }
  },
  computed: {
    validOrders () {
      return Object.keys(this.orders).filter(o => this.orders[o])
    }
  },
  methods: {
    choiceSeat (s) {
      if (!this.seats.invalid[s]) {
        if (this.orders[s]) {
          this.$set(this.orders, s, false)
        } else {
          if (Object.keys(this.orders).filter(key => this.orders[key]).length >= this.seats.limit) {
            window.alert('超過座位')
          } else {
            this.$set(this.orders, s, true)
          }
        }
        console.log(this.orders)
      }
    },
    submitOrder () {
      Bus.$emit('send-seats', this.validOrders)
      this.$router.push({name: 'Customer'})
      console.log(this.validOrders)
    }
  },
  created () {
    this.$set(this, 'movieInfo', Bus.$data.movieInfo)
  }
}
</script>

<style lang="scss" scope>
@import "./../assets/scss/btn";

table.seatTable {
  border-collapse: collapse;
  height: 600px;
  td {
    min: {
      width: 95px;
    }
    &.seat {
      border: 1px solid black;
      &:hover {
        background-color: #ccc;
      }
      &.invalid {
        background-color: grey;
      }
      &.active {
        background-color: green;
      }
    }
  }
  .screen {
    background-color: #efe;
  }
}
.seats {
  padding-bottom: 60px;
}
</style>
