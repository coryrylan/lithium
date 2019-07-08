import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-side-nav',
  templateUrl: './docs-side-nav.component.html'
})
export class DocsSideNavComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit() {
  }

}
