const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(config, {launchApp: false});
  await device.launchApp({permissions: {
    camera: 'YES',
    photos: 'YES',
    microphone: 'YES',
    camera_roll: 'YES'
  }});
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});