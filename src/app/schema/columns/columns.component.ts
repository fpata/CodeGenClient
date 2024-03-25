import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent } from '../../base/base.component';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { SchemaService } from '../../schema/schemaService';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})

export class ColumnsComponent extends BaseComponent {
  tableColumns = new MatTableDataSource([]);
  displayedColumns: Array<string> = new Array<string>();

  constructor(@Inject(SESSION_STORAGE) private sessionStorage : WebStorageService,
  appService: SchemaService){ super(appService); }


  @ViewChild('columnPaginator') columnPaginator!: MatPaginator ;

  ngOnInit() {
    this.tableColumns.paginator = this.columnPaginator;
  }

  ngAfterViewInit()
  {
    this.GetData();
  }

  public GetData(): void {
    this.connectStr = sessionStorage.getItem('ConnectStr') as string;
    this.DBType = sessionStorage.getItem('DBType') as string;
    this.selectedTable =  sessionStorage.getItem('SelectedTable') as string;
      this.appService.getColumns(this.connectStr, this.DBType, this.selectedTable).subscribe(
        data => {
          this.tableColumns.data = data;

          var keysArray = new Array<string>();
          Object.keys(this.tableColumns.data[0]).forEach(function (k) {
            keysArray.push(k);
          });
          this.displayedColumns = keysArray;
        });
  }
}