import { Component, OnInit, Input } from '@angular/core';

import { Class } from '../interfaces/api';

@Component({
  selector: 'app-class-api',
  templateUrl: './class-api.component.html',
  styleUrls: ['./class-api.component.scss']
})
export class ClassAPIComponent implements OnInit {
  @Input() componentClass: Class;

  constructor() { }

  ngOnInit() {
  }

}
