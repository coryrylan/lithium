import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  codeExample = `
    import 'lithium-ui/modal';

    const modal = document.querySelector('li-modal');
    modal.open();
  `;
  codeExample2 = `
    <li-modal>
      Hello World
    </li-modal>
  `;

  constructor() {}

  ngOnInit() {}
}
