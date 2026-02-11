import { Injectable } from '@angular/core';
import {
  NumberQuestion,
  Question,
  SelectQuestion,
  TextQuestion,
} from './question';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  public loadQuestions() {
    const questions: Question<string | number>[] = [
      new TextQuestion({
        key: 'name',
        value: '',
        label: 'Name',
        order: 1,
        required: true,
      }),

      new SelectQuestion({
        key: 'department',
        value: '',
        label: 'Department',
        order: 3,
        required: true,
        options: ['Engineering', 'Sales', 'Marketting', 'Finance'],
      }),

      new TextQuestion({
        key: 'alias',
        value: '',
        label: 'Alias',
        order: 4,
      }),

      new NumberQuestion({
        key: 'age',
        value: 0,
        label: 'Age',
        order: 2,
        required: true,
      }),
    ];

    return of(questions.sort((a, b) => (a.order || 0) - (b.order || 0)));
  }
}
