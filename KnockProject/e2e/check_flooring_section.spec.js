const { reloadApp } = require('detox-expo-helpers');

describe('Flooring Sections e2e UI checks', () => {
  beforeEach(async () => {
    await reloadApp();
    await element(by.id('scrollView')).swipe('up');
    await waitFor(element(by.id('conditionFix')).atIndex(0)).toBeVisible().withTimeout(6000);
    await expect(element(by.id('conditionFix')).atIndex(0)).toBeVisible();
  });

  it('should render for the flooring header', async () => {
    await waitFor(element(by.id('flooringHeaderText'))).toBeVisible().withTimeout(2000);
    await expect(element(by.id('flooringHeaderText'))).toBeVisible();
  });

  it('should find and select each of the flooringType option TouchableOpacity buttons', async () => {
    await element(by.id('flooringTypeHardwood')).tap();
    await element(by.id('flooringTypeTile')).tap();
    await element(by.id('flooringTypeCarpet')).tap();
    await element(by.id('flooringTypeVinyl')).tap();
    await element(by.id('flooringTypeLaminate')).tap();
    await element(by.id('flooringTypeOther')).tap();
  });

  it('should find and select each of the flooring Condition option TouchableOpacity buttons', async () => {
    await waitFor(element(by.id('conditionFix')).atIndex(0)).toBeVisible().withTimeout(2000);
    await expect(element(by.id('conditionFix')).atIndex(0)).toBeVisible();
    await element(by.id('conditionFix')).atIndex(0).tap();
    await element(by.id('conditionPoor')).atIndex(0).tap();
    await element(by.id('conditionAverage')).atIndex(0).tap();
    await element(by.id('conditionGood')).atIndex(0).tap();
    await element(by.id('conditionExcellent')).atIndex(0).tap();
  });

  it('should find and click the flooring comments button, launch the modal, close modal', async () => {
    await waitFor(element(by.id('commentsIconButton')).atIndex(0)).toBeVisible().withTimeout(2000);
    await expect(element(by.id('commentsIconButton')).atIndex(0)).toBeVisible();
    await element(by.id('commentsIconButton')).atIndex(0).tap();
    await element(by.id('addCommentText')).tap();
    await element(by.id('addCommentText')).typeText('New Text blah blah blah');
    await expect(element(by.id('addCommentText'))).toHaveText('New Text blah blah blah');
    await element(by.id('addCommentsDoneBtn')).tap();
  });

  it('should find and click the flooring camera button, and launch the camera', async () => {
    await waitFor(element(by.id('cameraIconLauncherBtn')).atIndex(0)).toBeVisible().withTimeout(2000);
    await expect(element(by.id('cameraIconLauncherBtn')).atIndex(0)).toBeVisible();
    await element(by.id('cameraIconLauncherBtn')).atIndex(0).tap();
  });
});