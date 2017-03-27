import { Angular4ProductsPage } from './app.po';

describe('angular4-products App', () => {
  let page: Angular4ProductsPage;

  beforeEach(() => {
    page = new Angular4ProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
