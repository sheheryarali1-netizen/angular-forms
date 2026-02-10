import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent {
  public formGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      zipCode: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    }),
  });

  public restoreDefault() {
    this.formGroup.patchValue({
      firstName: 'John',
      lastName: 'Smith',
    });
  }
}
