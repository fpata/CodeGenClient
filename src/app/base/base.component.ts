import { Component, OnInit, ViewChild } from '@angular/core';
import { SchemaService } from '../schema/schemaService';

@Component({
  selector: 'app-base',
  template: ``,
  styles: []
})
  export class BaseComponent {
  selectedTable: string = '';
connectStr: string = '';
DBType: string = "SQLite";

constructor(protected appService: SchemaService) { }

  }
