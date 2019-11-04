import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ElementDoc {
  name: string;
  description: string;
  jsDoc: string;
  attributes: { name: string; description: string; type: string }[];
  properties: { name: string; description: string; jsDoc: string; type: string }[];
  events: { name: string; description: string; type: string }[];
  slots: { name: string; description: string }[];
  cssProperties: { name: string }[];
}

interface Docs {
  version: number;
  tags: ElementDoc[];
}

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent implements OnInit {
  @Input() element = '';

  el: Observable<ElementDoc>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.el = this.http.get<Docs>(`/api/${this.element}.json`).pipe(map(v => v.tags[0]));
  }
}
