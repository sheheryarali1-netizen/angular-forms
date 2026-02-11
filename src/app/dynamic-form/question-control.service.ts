import { Injectable } from '@angular/core';
import { Question } from './question';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class QuestionControlService {
  public mapQuestionToFormGroup(questions: Question<string | number>[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });

    return new FormGroup(group);
  }
}
