import { StyleSeparatesManPage } from './app.po';

describe('style-separates-man App', function() {
  let page: StyleSeparatesManPage;

  beforeEach(() => {
    page = new StyleSeparatesManPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
