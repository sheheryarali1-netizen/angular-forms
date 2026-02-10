import { Component } from '@angular/core';

type Mode = 'template' | 'reactive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public mode: Mode = 'template';

  public toggleMode(mode: Mode) {
    this.mode = mode;
  }
}
