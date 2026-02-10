import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  public formGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      zipCode: [''],
      state: [''],
      country: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  public get aliases() {
    return this.formGroup.get('aliases') as FormArray;
  }

  public restoreDefault() {
    this.formGroup.patchValue({
      firstName: 'John',
      lastName: 'Smith',
    });
  }

  public onSubmit() {
    console.log('Form submitted:', this.formGroup.value);
  }

  public addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
