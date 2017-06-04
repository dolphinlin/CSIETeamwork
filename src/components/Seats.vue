<template lang="html">
  <div class="seats">
    <table>
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
  </div>
</template>

<script>
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
      seatLater: 'ABCDEF'
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
      }
    }
  }
}
</script>

<style lang="scss" scope>
table {
  border-collapse: collapse;
  height: 600px;
  td {
    min: {
      width: 100px;
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
