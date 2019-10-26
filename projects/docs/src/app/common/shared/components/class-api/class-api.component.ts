import { Component, Input, OnInit } from '@angular/core';

// import { ClassType } from '../../../interfaces/api';

@Component({
  selector: 'app-class-api',
  templateUrl: './class-api.component.html',
  styleUrls: ['./class-api.component.scss']
})
export class ClassAPIComponent implements OnInit {
  @Input() componentClass: any; // ClassType does work due to union type :(

  constructor() {}

  ngOnInit() {}
}
