import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ColumnsComponent } from './schema/columns/columns.component';
import { TablesComponent } from './schema/tables/tables.component';
import { TypeScriptComponent } from './code/typescript/typescript.component';
import {MaterialModule} from './material/material.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {PocoComponent, CSharpComponent,DALComponent,DapperComponent
  ,EFDBContextComponent,EFFluentMapComponent, EFDataAnnotationComponent } from './code/csharp/index';
import { FormsModule } from '@angular/forms';
import { SchemaService } from './schema/schemaService';
import { HttpClientModule } from '@angular/common/http';
import { PlainHtmlComponent,BooStrapHtmlComponent, HTMLComponent, MaterialHtmlComponent } from './code/html/index';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppComponent
  ],
  providers: [
    provideAnimationsAsync('noop'),
    SchemaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
