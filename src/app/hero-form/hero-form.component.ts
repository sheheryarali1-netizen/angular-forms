import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  public powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
  ];

  public model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
