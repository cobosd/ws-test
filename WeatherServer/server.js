const express = require('express');
const axios = require('axios'); // Import axios for making HTTP requests
const app = express();

const PORT = 3000; 
const HOST = "localhost"; 
// const HOST = "192.168.75.58"

app.use(express.json());

app.post('/data/report/', (req, res) => {
  console.log('Weather Data Received:', req.body);
  res.status(200).send('Data Received');
});

app.get('/time', (req, res) => {
  const currentTime = new Date().toISOString();
  console.log('API called. Current time:', currentTime);
  res.status(200).json({ time: currentTime });
});

// Replace these constants with your actual Ambient Weather API credentials
const AMBIENT_API_KEY = "5aa730d22e564c69b8e2055620e496b34aa315b8cad340e08783826c6538743a";
const AMBIENT_APPLICATION_KEY = "4f8a9d65090c4cd8a5125a0f65dbd2966fdf2d456013456c9bff8a3d3b751430";

// New GET endpoint to retrieve weather devices information
app.get('/weather-devices', async (req, res) => {
  try {
    // Make an HTTP GET request to the Ambient Weather API
    const response = await axios.get('https://api.ambientweather.net/v1/devices', {
      params: {
        apiKey: AMBIENT_API_KEY,
        applicationKey: AMBIENT_APPLICATION_KEY
      }
    });
    // console.log('Weather Devices Retrieved:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    // In case of an error, respond with a 500 status code and error message
    res.status(500).json({ error: 'Failed to retrieve weather devices' });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
