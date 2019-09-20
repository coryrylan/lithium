import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  get theme() {
    const value = `${localStorage.getItem('lithium-theme') ? localStorage.getItem('lithium-theme') : 'light-theme'}`;
    return value;
  }

  set theme(value: string) {
    this.renderer.removeClass(document.body, this.theme);
    this.renderer.addClass(document.body, value);
    localStorage.setItem('lithium-theme', value);
  }

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: any) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init() {
    this.renderer.addClass(this.document.body, this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}
