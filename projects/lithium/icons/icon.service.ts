import { SVGIcon, unknownIcon, SVGIconCollection } from './svg';

export const registry = {
  [unknownIcon.name]: unknownIcon.svg
};

export class IconService {
  static addIcons(...svgIcons: SVGIcon[]) {
    svgIcons.forEach(icon => registry[icon.name] = icon.svg);
  }

  static addIconCollection(...svgIconCollection: SVGIconCollection[]) {
    svgIconCollection.forEach(group => {
      group.icons.forEach(icon => registry[icon.name] = icon.svg);
    });
  }
}
