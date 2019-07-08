import { SVGIcon, unknownIcon, SVGIconGroup } from './svg';

export const registry = {
  [unknownIcon.name]: unknownIcon.svg
};

export class IconService {
  static addIcons(...svgIcons: SVGIcon[]) {
    svgIcons.forEach(icon => registry[icon.name] = icon.svg);
  }

  static addIconGroups(...svgIconGroups: SVGIconGroup[]) {
    svgIconGroups.forEach(group => {
      group.icons.forEach(icon => registry[icon.name] = icon.svg);
    });
  }
}
