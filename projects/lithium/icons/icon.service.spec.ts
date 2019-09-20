import { allIconsCollection, IconService } from 'lithium-ui/icons';
IconService.addIconCollection(allIconsCollection);

describe('IconService', () => {
  it('should return a icon registry', () => {
    expect(IconService.registry.menu).toContain('li-icon-menu');
  });
});
