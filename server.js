const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')
const app = express()

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:5a7f3b9b-4535-4ce3-abbc-e7a920426c19',
    key: '64b85a41-ed57-4489-951c-a90265615560:/13D+gTwUU7Gy6cnUFisgTpe5MTsDXwmdxoFnrpYzj8=',
  })


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/users', (req, res) => {
    const { username } = req.body
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(() => res.sendStatus(201))
      .catch(error => {
        if (error.error === 'services/chatkit/user_already_exists') {
          res.sendStatus(200)
        } else {
          res.status(error.status).json(error)
        }
      })
  })



 app.post('/authenticate', (req, res) => {
     const authData = chatkit.authenticate({ userId: req.query.user_id })
     res.status(authData.status).send(authData.body)
   })
// const PORT = 3001
// app.listen(PORT, err => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(`Running on port ${PORT}`)
//   }
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
