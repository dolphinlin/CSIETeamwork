const movies = [
  {
    title: 'Love',
    desc: `a movie`
  }, {
    title: 'Love2',
    desc: `a movie`
  }, {
    title: 'Love3',
    desc: `a movie`
  }, {
    title: 'Love4',
    desc: `a movie`
  }, {
    title: 'Love5',
    desc: `a movie`
  }, {
    title: 'Love6',
    desc: `a movie`
  }, {
    title: 'Love7',
    desc: `a movie`
  }
]

export function getData (n) {
  return movies[n] || {
    title: 'Unknow',
    desc: `not found movie`
  }
}
