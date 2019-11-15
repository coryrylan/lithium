import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {
  @Input() code: any = {};

  constructor() {}

  ngOnInit() {}
}
