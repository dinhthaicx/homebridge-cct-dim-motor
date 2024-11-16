const mqtt = require('mqtt');
let Service, Characteristic;

module.exports = (homebridge) => {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  homebridge.registerAccessory('homebridge-cct-dim-motor', 'CCTDimMotor', CCTDimMotorAccessory);
};

function CCTDimMotorAccessory(log, config) {
  this.log = log;
  this.name = config.name || 'CCTDimMotor';
  this.mqttBroker = config.mqttBroker;
  this.topics = config.topics;

  // Kết nối MQTT
  this.client = mqtt.connect(this.mqttBroker);
  this.client.on('connect', () => {
    this.log('Connected to MQTT broker.');
    this.subscribeToTopics();
  });
}

const CCTDimMotorAccessory = require('./lib/accessory');

module.exports = (api) => {
  api.registerAccessory('CCTDimMotor', CCTDimMotorAccessory);
};

