import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AccessDeniedComponent } from './security/components/access-denied/access-denied.component';

@NgModule({
  declarations: [AccessDeniedComponent],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, TranslateModule, RouterModule, ReactiveFormsModule]
})
export class SharedModule {
}
