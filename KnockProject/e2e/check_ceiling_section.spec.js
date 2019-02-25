const { reloadApp } = require('detox-expo-helpers');

describe('Ceiling Sections e2e UI checks', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should render for the Ceiling header', async () => {
    await expect(element(by.id('ceilingHeaderText'))).toBeVisible();
  });

  it('should find and select each of the ceilingType option TouchableOpacity buttons', async () => {
    await element(by.id('ceilingTypeFlat')).tap();
    await element(by.id('ceilingTypeSpackled')).tap();
    await element(by.id('ceilingTypePopcorn')).tap();
    await element(by.id('ceilingTypeOther')).tap();
  });

  it('should find and select each of the floorLevel option TouchableOpacity buttons', async () => {
    await element(by.id('conditionFix')).atIndex(1).tap();
    await element(by.id('conditionPoor')).atIndex(1).tap();
    await element(by.id('conditionAverage')).atIndex(1).tap();
    await element(by.id('conditionGood')).atIndex(1).tap();
    await element(by.id('conditionExcellent')).atIndex(1).tap();
  });

  it('should find and click the ceiling comments button, launch the modal, close modal', async () => {
    await element(by.id('commentsIconButton')).atIndex(1).tap();
    await element(by.id('addCommentText')).tap();
    await element(by.id('addCommentText')).typeText('New Text blah blah blah');
    await expect(element(by.id('addCommentText'))).toHaveText('New Text blah blah blah');
    await element(by.id('addCommentsDoneBtn')).tap();
  });

  it('should find and click the ceiling camera button, and launch the camera', async () => {
    await element(by.id('cameraIconLauncherBtn')).atIndex(1).tap();
  });
});