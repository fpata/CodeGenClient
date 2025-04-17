import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MatPaginator, } from '@angular/material/paginator';
import {  MatTableDataSource } from '@angular/material/table';
import {  MatRadioButton,MatRadioGroup,MatRadioChange } from '@angular/material/radio';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { createInjectableType } from '@angular/compiler';
import { MatCard,MatCardContent } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatDivider } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {  RouterOutlet } from '@angular/router';
import { SchemaService } from './schema/schemaService';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ MatCard,MatCardContent,MatToolbar,MatDivider, NavigationMenuComponent, HeaderComponent, RouterOutlet, MatFormFieldModule, MatInputModule],
  providers: [SchemaService, BrowserModule ,HttpClient],
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
