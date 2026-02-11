import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css'],
})
export class JobApplicationFormComponent {
  constructor(
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
  ) {}

  public questions$ = this.questionService.loadQuestions();

  public formGroup = this.formBuilder.group({});
}
