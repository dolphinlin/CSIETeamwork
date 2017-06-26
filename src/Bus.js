import Vue from 'vue'

let Bus = new Vue()

Bus.$data.orderInfo = []
Bus.$data.movieInfo = {}
Bus.$data.orderSeats = {}

export default Bus
