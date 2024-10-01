const express = require('express');
const mqtt = require('mqtt');
const cors = require('cors');

const app = express();
const port = 4000;
const MQTT_BROKER_URL = 'mqtt://broker.hivemq.com'; // Free MQTT broker

// Pump topics for each pump
const pumps = [
  { id: 1, controlTopic: 'pump/1/control', statusTopic: 'pump/1/status' },
  { id: 2, controlTopic: 'pump/2/control', statusTopic: 'pump/2/status' },
  { id: 3, controlTopic: 'pump/3/control', statusTopic: 'pump/3/status' },
  { id: 4, controlTopic: 'pump/4/control', statusTopic: 'pump/4/status' },
];

// Simulated pump statuses
let pumpStatuses = {
  1: 'OFF',
  2: 'OFF',
  3: 'OFF',
  4: 'OFF',
};

// Create MQTT client
const mqttClient = mqtt.connect(MQTT_BROKER_URL);

app.use(cors()); // Enable CORS to allow communication from the React Native app
app.use(express.json());

// MQTT connection setup
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');
  // Subscribe to control topics
  pumps.forEach((pump) => {
    mqttClient.subscribe(pump.controlTopic);
  });
});

// Handle incoming messages (commands from the app)
mqttClient.on('message', (topic, message) => {
  const pump = pumps.find((p) => p.controlTopic === topic);
  if (pump) {
    const command = message.toString();
    pumpStatuses[pump.id] = command;
    console.log(`Pump ${pump.id} status changed to: ${command}`);
    mqttClient.publish(pump.statusTopic, command); // Publish the updated status
  }
});

// API to control a pump
app.post('/control-pump', (req, res) => {
  const { pumpId, command } = req.body;

  if (!pumpId || !command || (command !== 'ON' && command !== 'OFF')) {
    return res.status(400).json({ error: 'Invalid pumpId or command' });
  }

  const pump = pumps.find((p) => p.id === pumpId);
  if (!pump) {
    return res.status(404).json({ error: 'Pump not found' });
  }

  // Publish command to the respective pump topic
  mqttClient.publish(pump.controlTopic, command, { qos: 1 }, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to send command' });
    }
    res.json({ message: `Pump ${pumpId} turned ${command}` });
  });
});

// API to get the status of all pumps
app.get('/pump-status', (req, res) => {
  res.json(pumpStatuses);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
