import { SVGIcon, SVGIconCollection, unknownIcon } from './svg';

const iconRegistry = {
  [unknownIcon.name]: unknownIcon.svg
};

// @dynamic
export class IconService {
  static get registry() {
    return { ...iconRegistry };
  }

  static addIcons(...svgIcons: SVGIcon[]) {
    svgIcons.forEach(icon => (iconRegistry[icon.name] = icon.svg));
  }

  static addIconCollection(...svgIconCollection: SVGIconCollection[]) {
    svgIconCollection.forEach(group => {
      group.icons.forEach(icon => (iconRegistry[icon.name] = icon.svg));
    });
  }
}
