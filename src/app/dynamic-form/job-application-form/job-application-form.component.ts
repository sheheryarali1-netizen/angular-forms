import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css'],
})
export class JobApplicationFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  public formGroup = this.formBuilder.group({});
}
