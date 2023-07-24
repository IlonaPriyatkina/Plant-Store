const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001
const axios = require('axios')

app.use(cors())

app.get('/plants', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://house-plants2.p.rapidapi.com/all-lite',
    headers: {
      'X-RapidAPI-Key': 'a15096efc3msh36585bfb1ee7d8cp1218dbjsn4852d9e6f7c7',
      'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
    },
  }

  try {
    const response = await axios.request(options)
    res.send(response.data)
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

const getToken = async () => {
  const params = {
    origin: 'http://localhost',

    token: 'AlTv48GMYn_qNPhV4Nd3-b0RnkeZ9kt0ySiW4YxaUiU',
  }

  const token = await fetch('https://trefle.io/api/auth/claim', {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  })

  const json = await token.json()

  return json
}
