import { Component, Input } from '@angular/core';
import { Question } from '../question';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input()
  public question!: Question<string | number>;

  @Input()
  public formGroup!: FormGroup;

  public isValid() {
    return this.formGroup.controls[this.question.key].valid;
  }
}
