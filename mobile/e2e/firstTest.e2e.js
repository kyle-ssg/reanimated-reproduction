import { by, device, expect, element, waitFor } from 'detox';

const waitById = (id)=> waitFor(element(by.id(id))).toBeVisible().withTimeout(30000);
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitById('welcome');
  });

  // it('should show hello screen after tap', async () => {
  // await element(by.id('hello_button')).tap();
  // await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

});
