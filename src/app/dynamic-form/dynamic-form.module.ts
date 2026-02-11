import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';

@NgModule({
  declarations: [JobApplicationFormComponent],
  imports: [CommonModule],
  exports: [JobApplicationFormComponent],
})
export class DynamicFormModule {}
