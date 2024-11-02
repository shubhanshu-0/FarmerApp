const mqtt = require('mqtt');
const pumps = require('./pumps'); // Adjust path if necessary

const MQTT_BROKER_URL = 'mqtt://broker.hivemq.com'; // HiveMQ broker URL

// Create MQTT client
const mqttClient = mqtt.connect(MQTT_BROKER_URL);

// Handle MQTT connection
mqttClient.on('connect', () => {
    console.log('IoT device simulator connected to MQTT broker');

    // Subscribe to control topics for each pump
    pumps.forEach(pump => {
        mqttClient.subscribe(pump.controlTopic);
    });
});

// Handle incoming MQTT messages
mqttClient.on('message', (topic, message) => {
    const pump = pumps.find(p => p.controlTopic === topic);
    if (pump) {
        const command = message.toString();
        console.log(`Received command for Pump ${pump.id}: ${command}`);

        // Simulate pump responding to command (publish status update)
        simulatePumpResponse(pump.id, command);
    }
});

// Simulate pump response and publish status update
function simulatePumpResponse(pumpId, command) {
    // Simulate processing time (e.g., 1 second)
    setTimeout(() => {
        const status = command === 'ON' ? 'ON' : 'OFF'; // Simulate response based on command
        const statusTopic = `iotdevice/pump${pumpId}/status`;

        // Publish status update
        mqttClient.publish(statusTopic, status, { qos: 1 }, (err) => {
            if (err) {
                console.error(`Failed to publish status for Pump ${pumpId}: ${err}`);
            } else {
                console.log(`Published status for Pump ${pumpId}: ${status}`);
            }
        });
    }, 1000); // Adjust simulation delay as needed
}

