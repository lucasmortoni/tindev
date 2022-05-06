import { app } from './app'

app.get('/', (req, res) => {
  return res.json({ msg: 'hello world' })
})

app.listen(3333, () => {
  console.log('tindev server is up and running 🚀')
})
