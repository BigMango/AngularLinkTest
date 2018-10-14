import { Component } from '@angular/core';
import { Utils2 } from '@Common/Utils2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LinkTest';
  constructor(utils: Utils2) {
    const u =utils.getNumber();
    console.log(u);
  }
}
