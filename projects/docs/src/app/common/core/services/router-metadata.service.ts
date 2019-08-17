import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterStateSnapshot, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';
import { of, merge } from 'rxjs';
import { Layout } from '../../enums';

@Injectable({
  providedIn: 'root'
})
export class RouterMetaDataService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    private readonly title: Title,
    private readonly router: Router
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init() {
    return getMergedRouteData(this.router).pipe(
      tap((routeData: any) => {
        this.setPageTitle(routeData);
        this.setPageClass(routeData);
      })
    );
  }

  private setPageTitle(routeData: any) {
    if (routeData.title) {
      this.title.setTitle(routeData.title);
    }
  }

  private setPageClass(routeData: any) {
    if (routeData.layout) {
      this.renderer.removeClass(document.body, Layout.Docs);
      this.renderer.removeClass(document.body, Layout.Page);
      this.renderer.addClass(document.body, routeData.layout);
    }
  }
}

export function getMergedRouteData(router: Router) {
  const currentRoute = of(router.routerState.snapshot);
  const futureRoutes = router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => router.routerState.snapshot));
  return merge(currentRoute, futureRoutes).pipe(map(snapshot => getMergedRouteDataSnapshot(snapshot)));
}

export function getMergedRouteDataSnapshot(snapshot: ActivatedRouteSnapshot | RouterStateSnapshot) {
  let data: { [key: string]: any } = {};
  let route = snapshot.root;
  do {
    data = { ...data, ...route.data };
    route = route.firstChild;
  } while (route);

  return data;
}