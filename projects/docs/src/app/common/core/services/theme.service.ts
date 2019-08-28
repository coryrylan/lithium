import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  get theme() {
    return localStorage.getItem('lithium-theme') ? localStorage.getItem('lithium-theme') : 'light-theme';
  }

  set theme(value: string) {
    this.renderer.removeClass(document.body, this.theme);
    this.renderer.addClass(document.body, value);
    localStorage.setItem('lithium-theme', value);
  }

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init() {
    this.renderer.addClass(document.body, this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}
