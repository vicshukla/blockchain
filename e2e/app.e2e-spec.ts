import {BlockchainPage} from './app.po';

describe('blocktracker App', () => {
  let page: BlockchainPage;

  beforeEach(() => {
    page = new BlockchainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
