import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [JobApplicationFormComponent, QuestionComponent],
  imports: [CommonModule],
  exports: [JobApplicationFormComponent],
  providers: [QuestionService],
})
export class DynamicFormModule {}
