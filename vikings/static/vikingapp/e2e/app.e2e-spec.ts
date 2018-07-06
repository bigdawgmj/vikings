import { VikingappPage } from './app.po';

describe('vikingapp App', () => {
  let page: VikingappPage;

  beforeEach(() => {
    page = new VikingappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
