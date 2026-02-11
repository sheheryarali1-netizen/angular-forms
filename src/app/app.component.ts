import { Component } from '@angular/core';

type Mode = 'template' | 'reactive' | 'dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public mode: Mode = 'dynamic';

  public toggleMode(mode: Mode) {
    this.mode = mode;
  }
}
