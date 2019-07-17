
export interface InternationalizationRegistry {
  open: string;
  close: string;
  menu: string;
}

export const englishRegistry: InternationalizationRegistry = {
  open: 'Open',
  close: 'Close',
  menu: 'Menu'
};

export let registryState: InternationalizationRegistry = { ...englishRegistry };

// @dynamic
export class IntlService {
  static get registry(): InternationalizationRegistry {
    return { ...registryState };
  }

  static setRegistry(registry: InternationalizationRegistry) {
    registryState = registry;
  }
}
