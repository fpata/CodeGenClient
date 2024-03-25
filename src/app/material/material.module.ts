import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule } from '@angular/material/card';
import {MatTabsModule } from '@angular/material/tabs';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule } from '@angular/material/divider';
import {MatSelectModule } from '@angular/material/select';
import {MatTableModule } from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatRadioModule } from '@angular/material/radio';
import {MatTreeModule } from '@angular/material/tree';
import {MatIconModule } from '@angular/material/icon';
import {MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [ MatButtonModule,  MatToolbarModule, MatCardModule ,  MatTabsModule, MatFormFieldModule
  , MatInputModule, MatDividerModule, MatSelectModule,MatTableModule, MatPaginatorModule],
  exports: [MatButtonModule,  MatToolbarModule, MatCardModule ,  MatTabsModule, MatFormFieldModule
  , MatInputModule, MatDividerModule, MatSelectModule,MatTableModule, MatPaginatorModule,
  MatRadioModule, MatTreeModule, MatIconModule],
  declarations: []
})
export class MaterialModule { }

