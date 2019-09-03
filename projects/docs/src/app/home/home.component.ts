import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  version = environment.version;

  codeExample = `
    import 'lithium-ui/modal';

    const modal = document.querySelector('li-modal');
    modal.toggle();
  `;
  codeExample2 = `
    <li-modal>
      Hello World
    </li-modal>
  `;

  constructor() {}

  ngOnInit() {}
}
