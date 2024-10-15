const express = require('express');
const mqtt = require('mqtt');
const pumps = require('./testing/pumps'); // Adjust path if necessary

const app = express();
const port = 4000;
const MQTT_BROKER_URL = 'mqtt://broker.hivemq.com'; // HiveMQ broker URL

// Create an MQTT client
const mqttClient = mqtt.connect(MQTT_BROKER_URL);

// Subscribe to all control topics for pumps
pumps.forEach(pump => {
    mqttClient.subscribe(pump.controlTopic);
});

// Handle MQTT messages
mqttClient.on('message', (topic, message) => {
    const pump = pumps.find(p => p.controlTopic === topic);
    if (pump) {
        const command = message.toString();
        pump.status = command; // Update status in pumps
        console.log(`Received status update for Pump ${pump.id}: ${command}`);
    }
});

// API endpoint to control a specific pump
app.post('/control-pump', (req, res) => {
    const { pumpId, command } = req.body;

    if (!pumpId || !command || (command !== 'ON' && command !== 'OFF')) {
        return res.status(400).json({ error: 'Invalid pumpId or command' });
    }

    // Check if pump exists
    const pump = pumps.find(p => p.id === pumpId);
    if (!pump) {
        return res.status(404).json({ error: 'Pump not found' });
    }

    // Publish the command to the pump's control topic
    mqttClient.publish(pump.controlTopic, command, { qos: 1 }, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to send command' });
        }
        res.json({ message: `Pump ${pumpId} turned ${command}` });
    });
});

// API endpoint to get the status of all pumps
app.get('/pump-status', (req, res) => {
    res.json(pumps.map(pump => ({ id: pump.id, status: pump.status })));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
