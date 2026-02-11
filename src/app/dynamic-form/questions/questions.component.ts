import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../question-control.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  constructor(private questionControlService: QuestionControlService) {}

  @Input()
  public questions: Question<string | number>[] | null = [];

  public formGroup: FormGroup = new FormGroup({});

  public ngOnInit() {
    this.formGroup = this.questionControlService.mapQuestionToFormGroup(
      this.questions || [],
    );
  }

  public onSubmit() {
    console.log('Form submitted:', this.formGroup.value);
  }
}
