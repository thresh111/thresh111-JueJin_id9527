export default defineEventHandler(() => {
  return [
    {
      sort: '/',
      title: '推荐'
    },
    {
      sort: 'newest',
      title: '最新'
    },
    {
      sort: 'hot',
      title: '热门'
    }
  ]
})
