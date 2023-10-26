const express = require('express');
const app = express();

const AmbientWeatherApi = require('ambient-weather-api'); // Import the API client

// Initialize the AmbientWeatherApi
const api = new AmbientWeatherApi({
    apiKey: "5aa730d22e564c69b8e2055620e496b34aa315b8cad340e08783826c6538743a",
    applicationKey: "4f8a9d65090c4cd8a5125a0f65dbd2966fdf2d456013456c9bff8a3d3b751430"
  })

const PORT = 3311; // Change to the port you've configured on your weather station
const HOST = "192.168.75.162"

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

// New GET endpoint to retrieve weather devices information
app.get('/weather-devices', (req, res) => {
  api.getDevices()
    .then((devices) => {
      console.log('Weather Devices Retrieved:', devices);
      res.status(200).json(devices);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to retrieve weather devices' });
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
