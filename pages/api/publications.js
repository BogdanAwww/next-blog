import nc from 'next-connect'

const handler = nc()

handler.get((req, res) => {
  res.send('hello world')
})

export default handler
