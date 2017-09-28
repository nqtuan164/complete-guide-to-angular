import { MomShoppingPage } from './app.po';

describe('mom-shopping App', () => {
  let page: MomShoppingPage;

  beforeEach(() => {
    page = new MomShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
