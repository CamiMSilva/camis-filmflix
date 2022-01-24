import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material/material.module';
import { SspPipe } from './pipes/ssp/ssp.pipe';



@NgModule({
  declarations: [
    SspPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SspPipe,
    MaterialModule
  ]
})
export class SharedModule { }
