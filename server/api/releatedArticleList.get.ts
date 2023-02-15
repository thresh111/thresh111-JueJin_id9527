export default defineEventHandler(async () => {
  const data = await (await fetch('http://127.0.0.1:1337/api/releated-article-lists/')).json()
  return data
})
