import { BoootstrapMaterialPage } from './app.po';

describe('boootstrap-material App', function() {
  let page: BoootstrapMaterialPage;

  beforeEach(() => {
    page = new BoootstrapMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
