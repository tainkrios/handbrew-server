const express = require('express')
const axios = require('axios')

const app = express()
const apiKey = process.env.GOOGLE_API_KEY

app.get('/:placeId', async (req, res) => {
  const placeId = req.params.placeId
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=opening_hours&key=${apiKey}`
  try {
    const response = await axios.get(url)
    const data = response.data
    res.json(data)
  } catch (error) {
    console.error('Error occurred:', error)
    res.status(500).send(`An error occurred while fetching data. ${error}`)
  }
})

app.listen(5000, () => {
  console.log('Server listening on port 5000')
})
