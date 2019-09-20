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
  }

  static addIconCollection(...svgIconCollection: SVGIconCollection[]) {
    svgIconCollection.forEach(group => {
      group.icons.forEach(icon => (registryState[icon.name] = icon.svg));
    });
  }
}
