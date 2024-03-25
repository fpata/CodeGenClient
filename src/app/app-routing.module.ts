import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablesComponent} from './schema/tables/tables.component';
import {ColumnsComponent} from './schema/columns/columns.component';
import {TypeScriptComponent} from './code/typescript/typescript.component';
import { EFDataAnnotationComponent,EFFluentMapComponent,EFDBContextComponent,DALComponent,DapperComponent,PocoComponent} from './code/csharp/index'
import { PlainHtmlComponent,BooStrapHtmlComponent, HTMLComponent, MaterialHtmlComponent } from './code/html/index';


const routes: Routes = [
    { path: 'Tables', component: TablesComponent },
    { path: 'Columns', component: ColumnsComponent },
    { path: 'Entity-POCO', component: PocoComponent },
    { path: 'Entity-Dapper', component: DapperComponent },
    { path: 'Entity-EntityFramework-DataAnnotations', component: EFDataAnnotationComponent },
    { path: 'Entity-EntityFramework-FluentMapping', component: EFFluentMapComponent },
    { path: 'EntityFramework-DBContext', component: EFDBContextComponent },
    { path: 'EntityFramework-DAL', component: DALComponent },
    { path: 'TypeScript', component: TypeScriptComponent },
    { path: 'PlainHtml', component: PlainHtmlComponent},
    { path: 'BootStrap', component: BooStrapHtmlComponent},
    { path: 'Material', component: MaterialHtmlComponent}
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {

    
}