import { Ang2TestPage } from './app.po';

describe('ang2-test App', function() {
  let page: Ang2TestPage;

  beforeEach(() => {
    page = new Ang2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
