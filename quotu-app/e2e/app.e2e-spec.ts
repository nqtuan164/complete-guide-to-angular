import { QuotuAppPage } from './app.po';

describe('quotu-app App', () => {
  let page: QuotuAppPage;

  beforeEach(() => {
    page = new QuotuAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
