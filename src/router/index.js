import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import MoviesIndex from '@/components/MoviesIndex'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import Seats from '@/components/Seats'

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
          component: Movie
        }
      ]
    }, {
      path: '/seats',
      name: 'Seats',
      component: Seats
    }
  ],
  mode: 'history'
})
