import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormModule } from './template-form/template-form.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TemplateFormModule,
    ReactiveFormModule,
    DynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
