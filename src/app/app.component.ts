import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: ` <p>{{maVariable}}</p>
              <app-parent></app-parent>
              <app-person-list></app-person-list> `
})
export class AppComponent {
  maVariable:string = 'Hello World !!';
  title = 'WOW';
}
// export class AppComponent {
//   title = 'app';
// }
