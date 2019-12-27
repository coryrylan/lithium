import { IconService } from 'lithium-ui/icon';
import { allIconsCollection } from 'lithium-ui/icon-shapes';
IconService.addIconCollection(allIconsCollection);

describe('IconService', () => {
  it('should return a icon registry', () => {
    expect(IconService.registry.menu).toContain('li-icon-menu');
  });
});
