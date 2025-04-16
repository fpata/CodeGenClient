import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MatPaginator, } from '@angular/material/paginator';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatRadioButton,MatRadioGroup,MatRadioChange } from '@angular/material/radio';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent {
  title = 'CodeGenClient';
  selectedTabIndex = 0;
  @ViewChild('appTables') appTables:any;
  @ViewChild('appColumns') appColumns:any;
  @ViewChild('appCSharp') appCSharp:any;
  @ViewChild('appTypeScript') appTypeScript:any;

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedTabIndex = tabChangeEvent.index;
    this.setDataInTabs(this.selectedTabIndex);

  }

  setDataInTabs(tabIndex: number) {

    switch (tabIndex) {
      case 0:
        this.appTables.GetData();
        break;
      case 1:
        this.appColumns.GetData();
        break;
      case 2:
        this.appCSharp.GetData();
        break;
      case 3:
        this.appTypeScript.GetData();
        break;
        default:
        break;  
    }
  }
}
