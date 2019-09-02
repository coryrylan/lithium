import { Component } from '@angular/core';

import { IntlService, englishRegistry } from 'lithium-ui/common';

@Component({
  selector: 'app-docs-i18n',
  templateUrl: './docs-i18n.component.html'
})
export class DocsI18nComponent {
  IntlService = IntlService;

  codeExample = `
    import { IntlService } from 'lithium-ui/common';

    IntlService.registry.open // 'Open'

    // set once at app startup
    IntlService.setRegistry({
      open: 'Ouvrir',
      close: 'Fermer',
      menu: 'Menu',
      error: 'Erreur'
    });

    IntlService.registry.open; // 'Ouvrir'
  `;

  setEnglish() {
    IntlService.setRegistry(englishRegistry);
  }

  setFrench() {
    IntlService.setRegistry({
      open: 'Ouvrir',
      close: 'Fermer',
      menu: 'Menu',
      error: 'Erreur',
      warning: 'Avertissement',
      success: 'Succès',
      info: 'Information',
      loading: 'Chargement'
    });
  }
}
