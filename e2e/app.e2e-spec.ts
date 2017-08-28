import { GatlanCapstonePage } from './app.po';

describe('gatlan-capstone App', () => {
  let page: GatlanCapstonePage;

  beforeEach(() => {
    page = new GatlanCapstonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
