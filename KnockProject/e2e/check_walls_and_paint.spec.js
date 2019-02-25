const { reloadApp } = require('detox-expo-helpers');

describe('Walls / Paint Section e2e UI checks', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should render for the Walls / Paint header', async () => {
    await expect(element(by.id('wallsPaintHeaderText'))).toBeVisible();
  });

  it('should find and select each of the floorLevel option TouchableOpacity buttons', async () => {
    await element(by.id('conditionFix')).atIndex(2).tap();
    await element(by.id('conditionPoor')).atIndex(2).tap();
    await element(by.id('conditionAverage')).atIndex(2).tap();
    await element(by.id('conditionGood')).atIndex(2).tap();
    await element(by.id('conditionExcellent')).atIndex(2).tap();
  });

  it('should find and click the walls/paint comments button, launch the modal, close modal', async () => {
    await element(by.id('commentsIconButton')).atIndex(2).tap();
    await element(by.id('addCommentText')).tap();
    await element(by.id('addCommentText')).typeText('New Text blah blah blah');
    await expect(element(by.id('addCommentText'))).toHaveText('New Text blah blah blah');
    await element(by.id('addCommentsDoneBtn')).tap();
  });

  it('should find and click the walls/paint camera button, and launch the camera', async () => {
    await element(by.id('cameraIconLauncherBtn')).atIndex(2).tap();
  });
});