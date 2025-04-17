import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule]
})
export class AppModule { }