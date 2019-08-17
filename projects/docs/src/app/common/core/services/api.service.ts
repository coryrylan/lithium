import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Class } from '../../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: Observable<Class[]>;

  constructor(private httpClient: HttpClient) {
    this.api = this.httpClient.get<any>('/assets/api.json').pipe(
      map(data => data.children),
      // map(classes => this.removeMarkdown(classes)),
      shareReplay()
    );
  }

  private removeMarkdown(classes: Class[]) {
    classes
      .filter(c => c.comment)
      .forEach(c => c.comment.tags.forEach(t => t.text = t.text.replace(/`/g, '')));

    return classes;
  }
}
