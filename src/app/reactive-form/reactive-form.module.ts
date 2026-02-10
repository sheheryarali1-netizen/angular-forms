import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProfileFormComponent],
})
export class ReactiveFormModule {}
