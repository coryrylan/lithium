import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { Class } from './interfaces';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  search = new FormControl('');
  classResults: Class[] = [];
  private classes: Class[] = [];

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('/assets/api.json').subscribe(data => {
      this.classes = data.children.filter(child => child.kind === 128);
      this.classResults = this.classes;
    });

    this.search.valueChanges.subscribe(query => {
      if (query.length) {
        this.classResults = this.classes.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
      } else {
        this.classResults = this.classes;
      }
    });
  }

  ngOnInit() {
  }

}
