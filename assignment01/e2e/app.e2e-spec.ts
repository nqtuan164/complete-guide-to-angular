import { Assignment01Page } from './app.po';

describe('assignment01 App', () => {
  let page: Assignment01Page;

  beforeEach(() => {
    page = new Assignment01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
