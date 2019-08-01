import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Class } from '../interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: Observable<Class[]>;

  constructor(private httpClient: HttpClient) {
    this.api = this.httpClient.get<any>('/assets/api.json').pipe(
      map(data => data.children.filter(child => child.kind === 128)),
      shareReplay()
    );
  }
}
