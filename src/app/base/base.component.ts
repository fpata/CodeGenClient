import { Component, OnInit, ViewChild } from '@angular/core';
import { SchemaService } from '../schema/schemaService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-base',
  template: ``,
  styles: [],
  imports: [FormsModule],
  standalone: true
})
  export class BaseComponent {
  selectedTable: string = '';
connectStr: string = '';
DBType: string = "SQLite";

constructor(protected appService: SchemaService) { }

  }
