export interface InternationalizationRegistry {
  open: string;
  close: string;
  menu: string;
  error: string;
  warning: string;
  success: string;
  info: string;
  loading: string;
  previousMonth: string;
  nextMonth: string;
}

export const englishRegistry: InternationalizationRegistry = {
  open: 'Open',
  close: 'Close',
  menu: 'Menu',
  error: 'Error',
  warning: 'Warning',
  success: 'Success',
  info: 'Information',
  loading: 'loading',
  previousMonth: 'previous month',
  nextMonth: 'next month'
};

let registryState: InternationalizationRegistry = { ...englishRegistry };

// @dynamic
export class IntlService {
  static get registry(): InternationalizationRegistry {
    return { ...registryState };
  }

  static setRegistry(registry: InternationalizationRegistry) {
    registryState = registry;
  }
}
