// export default defineEventHandler(async (event) => {
//   const { type = 'text' } = getQuery(event)
//   const data = await (await fetch('http://127.0.0.1:1337/api/nav-lists')).json()
//   return data
// })

export default defineEventHandler(async () => {
  const data = await (await fetch('http://127.0.0.1:1337/api/nav-lists')).json()
  return data
})
