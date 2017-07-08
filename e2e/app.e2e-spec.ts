import { BacklogPage } from './app.po';

describe('backlog App', () => {
  let page: BacklogPage;

  beforeEach(() => {
    page = new BacklogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
