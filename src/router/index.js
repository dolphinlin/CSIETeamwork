import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import MoviesIndex from '@/components/MoviesIndex'
import MovieIndex from '@/components/MovieIndex'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import Seats from '@/components/Seats'
// import Order from '@/components/Order'
import BuyTic from '@/components/buyTic'
import FilmTime from '@/components/filmTime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Hello
    }, {
      path: '/movies',
      component: MoviesIndex,
      children: [
        {
          path: '',
          name: 'Movies',
          component: Movies
        }, {
          path: ':id',
          component: MovieIndex,
          children: [
            {
              path: '',
              component: Movie
            }, {
              path: 'order',
              component: Seats,
              name: 'Order'
            }
          ]
        }
      ]
    }, {
      path: '/seats',
      name: 'Seats',
      component: Seats
    }, {
      path: '/buyTic',
      name: 'BuyTic',
      component: BuyTic,
      children: [
        {
          path: 'filmTime',
          name: 'FilmTime',
          component: FilmTime
        }
      ]
    }
  ],
  mode: 'history',
  base: '/CSIETeamwork/'
})
