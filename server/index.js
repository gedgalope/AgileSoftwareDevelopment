const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const Sequelize = require('sequelize')
const finale = require('finale-rest')

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

let Post = database.define('posts', {
  agileType: Sequelize.STRING,
  statement: Sequelize.STRING
})

finale.initialize({
  app: app,
  sequelize: database
})


let userResource = finale.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id']
})


database
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`listening to port localhost:${port}`)
    })
  })
