import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from '../../../core/services/api.service';
import { ClassType } from '../../../interfaces/api';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent implements OnInit {
  @Input() component: string;
  componentClass: ClassType;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.api.subscribe(classes => {
      this.componentClass = classes.find(c => c.name.toLowerCase() === this.component.toLowerCase());
    });
  }
}
