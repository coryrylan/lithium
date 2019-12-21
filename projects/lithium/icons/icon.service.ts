import { registerElementSafely } from 'lithium-ui/common';
import { LithiumIcon } from './icon.element';
import { SVGIcon, SVGIconCollection, unknownIcon } from './svg';

const registryState = {
  [unknownIcon.name]: unknownIcon.svg
};

// @dynamic
export class IconService {
  static get registry() {
    return { ...registryState };
  }

  static addIcons(...svgIcons: SVGIcon[]) {
    svgIcons.forEach(icon => (registryState[icon.name] = icon.svg));
    IconService.register();
  }

  static addIconCollection(...svgIconCollection: SVGIconCollection[]) {
    svgIconCollection.forEach(group => {
      group.icons.forEach(icon => (registryState[icon.name] = icon.svg));
    });
    IconService.register();
  }

  private static registered = false;

  private static register() {
    if (!IconService.registered) {
      registerElementSafely('li-icon', LithiumIcon);
      IconService.registered = true;
    }
    (LithiumIcon as any).registry = IconService.registry;
  }
}
