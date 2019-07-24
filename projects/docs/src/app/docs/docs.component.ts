import { Component, OnInit } from '@angular/core';

import { fadeAnimation } from '../common/animations';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations: [fadeAnimation]
})
export class DocsComponent implements OnInit {
  version = environment.version;

  constructor() { }

  ngOnInit() {
  }

}
