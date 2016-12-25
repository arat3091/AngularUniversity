import { AngularUniversityPage } from './app.po';

describe('angular-university App', function() {
  let page: AngularUniversityPage;

  beforeEach(() => {
    page = new AngularUniversityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
