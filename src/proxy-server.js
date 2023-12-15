const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

// Use the cors middleware
app.use(cors());

app.get('/proxy-image', async (req, res) => {
  try {
    const imageUrl = "https://2022.creativesocialintranet.com/images/bigproduct/shutterstock_3185962342_20220603_092312.jpg";
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Set CORS headers in response
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    res.header('Content-Type', 'image/jpeg');
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
