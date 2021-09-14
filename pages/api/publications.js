import nc from 'next-connect'

const data = {
  count: 10,
  posts: [
    {
      image: 'https://memepedia.ru/wp-content/uploads/2021/02/bonk-mem-bonk-8.jpg',
      title: 'Some Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae optio quibusdam velit suscipit omnis nisi praesentium enim, ducimus in eos iste, molestias natus odit asperiores ab! Hic, id non.'
    }
  ]
}

const handler = nc()

handler.get((req, res) => {
  res.send(data)
})

export default handler
