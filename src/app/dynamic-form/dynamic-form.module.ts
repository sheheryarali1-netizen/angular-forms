import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionControlService } from './question-control.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JobApplicationFormComponent,
    QuestionComponent,
    QuestionsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [JobApplicationFormComponent],
  providers: [QuestionService, QuestionControlService],
})
export class DynamicFormModule {}
