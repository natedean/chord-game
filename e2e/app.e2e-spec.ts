import { ChordGamePage } from './app.po';

describe('chord-game App', function() {
  let page: ChordGamePage;

  beforeEach(() => {
    page = new ChordGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
