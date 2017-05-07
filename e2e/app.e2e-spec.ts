import { Ng4RecipeBookAppPage } from './app.po';

describe('ng4-recipe-book-app App', () => {
  let page: Ng4RecipeBookAppPage;

  beforeEach(() => {
    page = new Ng4RecipeBookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
