import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { SchemaService } from '../../schema/schemaService';
import { MatTabChangeEvent } from '@angular/material/tabs';
import {  MatPaginator} from '@angular/material/paginator';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import {MatPaginatorDefaultOptions } from '@angular/material/paginator';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: false,
})
export class TablesComponent extends BaseComponent{

  displayedTableColumns: Array<string> = new Array<string>();
  tables = new MatTableDataSource([]);

  @ViewChild('tablePaginator')
  tablePaginator!: MatPaginator;

  constructor(@Inject(SESSION_STORAGE) private sessionStorage : WebStorageService,
   appService: SchemaService){ super(appService); }
  
  ngOnInit() {
    // Initialization logic if needed
  }

  ngAfterViewInit() {
    this.tables.paginator = this.tablePaginator;
    this.GetData();
  }

  public GetData()
  {
    this.connectStr = sessionStorage.getItem('ConnectStr') as string;
    this.DBType = sessionStorage.getItem('DBType') as string;
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
}
