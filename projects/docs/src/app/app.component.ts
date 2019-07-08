import { Component } from '@angular/core';
import { RouterMetaDataService } from './common/services/router-metadata.service';
import { fadeAnimation } from './common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(private routerMetaDataService: RouterMetaDataService) {
    this.routerMetaDataService.init().subscribe();
  }
}
