import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroFormComponent],
})
export class TemplateFormModule {}
