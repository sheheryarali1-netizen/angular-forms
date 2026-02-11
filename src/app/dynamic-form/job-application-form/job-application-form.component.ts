import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TextQuestion } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css'],
})
export class JobApplicationFormComponent {
  constructor(
    private formBuilder: FormBuilder,
    private questionService: QuestionService,
  ) {}

  public formGroup = this.formBuilder.group({});

  public questions$ = this.questionService.loadQuestions();
}
