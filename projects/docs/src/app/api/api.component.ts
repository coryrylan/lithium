import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../common/core/services/api.service';
import { Class } from '../common/interfaces/api';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html'
})
export class ApiComponent implements OnInit {
  search = new FormControl('');
  classResults: Class[] = [];
  private classes: Class[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.api.subscribe(classes => {
      this.classes = classes;
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

  ngOnInit() {}
}
