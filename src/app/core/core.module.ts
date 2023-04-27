import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataAccessModule } from './data-access/data-access.module';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    DataAccessModule
  ]
})
export class CoreModule { }
