import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import { BaseComponent } from '../base/base.component';
import { SchemaService } from '../schema/schemaService';
import { MatTableDataSource } from '@angular/material/table';
import { FormsModule, NgModel } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioButton,MatRadioGroup } from '@angular/material/radio';
import { MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatFormFieldModule, MatRadioGroup, MatRadioButton, FormsModule, MatOption, CommonModule, MatInputModule],
  standalone: true
})

export class HeaderComponent extends BaseComponent {

   constructor(@Inject(SESSION_STORAGE) private sessionStorage : WebStorageService,
    appService: SchemaService){ super(appService); }

  displayedTableColumns: Array<string> = new Array<string>();
  tables = new MatTableDataSource([]);

  btnConnect_click($event:any) {
    this.connectStr = this.connectStr.split('\\').join('/');
    if (!this.connectStr.startsWith('Data Source')) this.connectStr = 'Data Source=' + this.connectStr;
    sessionStorage.setItem('ConnectStr',this.connectStr);
    sessionStorage.setItem('DBType',this.DBType);
    this.appService.getTables(this.connectStr, this.DBType).subscribe(
      data => {
        this.tables.data = data;
        var keysArray = new Array<string>();
        Object.keys(this.tables.data[0]).forEach(function (k) {
          keysArray.push(k);
        });
        this.displayedTableColumns = keysArray;
      });
  }

  btnClear_click($event:any) {
    window.location.reload();
    sessionStorage.clear();
  }

  cbTables_Select($event:any) {
    this.selectedTable = $event.value.name;
    sessionStorage.setItem('SelectedTable',this.selectedTable);
  }
}