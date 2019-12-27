import { englishRegistry, IntlService } from './i18n.service';

describe('i18n service', () => {
  it('should return a language registry', () => {
    expect(IntlService.registry.open).toBe('Open');
    expect(
      IntlService.setRegistry({
        open: 'Ouvrir',
        close: 'Fermer',
        menu: 'Menu',
        error: 'Erreur',
        warning: 'Avertissement',
        success: 'Succès',
        info: 'Information',
        loading: 'Chargement',
        nextMonth: '',
        previousMonth: ''
      })
    );

    expect(IntlService.registry.open).toBe('Ouvrir');
    IntlService.setRegistry(englishRegistry);
    expect(IntlService.registry.open).toBe('Open');
  });
});
