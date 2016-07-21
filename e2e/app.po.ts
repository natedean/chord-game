export class ChordGamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chord-game-app h1')).getText();
  }
}
