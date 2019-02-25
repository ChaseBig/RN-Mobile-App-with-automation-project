const { reloadApp } = require('detox-expo-helpers');

describe('Room Layout container checks', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should render the kitchen header', async () => {
    await expect(element(by.id('kitchenHeader'))).toBeVisible();
  });

  it('should render room layout text header', async () => {
    await expect(element(by.id('roomLayoutText'))).toBeVisible();
  });

  it('should render room layout info text', async () => {
    await expect(element(by.id('infoText'))).toBeVisible();
  });

  it('should render the layout buttons component', async () => {
    await expect(element(by.id('floorLevelHeader'))).toBeVisible();
  });

  it('should render, find, and select each of the floorLevel option TouchableOpacity buttons', async () => {
    await element(by.id('floorLevelBasement')).tap();
    await element(by.id('floorLevelLower')).tap();
    await element(by.id('floorLevelMain')).tap();
    await element(by.id('floorLevelUpper')).tap();
  });

  it('should render, find, and launch the Add Comments modal when the Add Comments button is clicked', async () => {
    await element(by.id('addCommentsRoomLayoutButton')).tap();
    await element(by.id('addCommentText')).tap();
    await element(by.id('addCommentText')).typeText('New Text blah blah blah');
    await expect(element(by.id('addCommentText'))).toHaveText('New Text blah blah blah');
    await element(by.id('addCommentsDoneBtn')).tap();
  });

  it('should launch saved photos when the room layout container saved photos button is clicked', async () => {
    await element(by.id('savedPhotosBtn')).tap();
  });
});