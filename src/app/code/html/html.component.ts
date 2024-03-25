import { BaseComponent } from "../../base/base.component";
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-html',
    templateUrl:'./html.component.html'
  })

export class HTMLComponent extends BaseComponent
{
   public code: string ='';
    
    GetHtmlCode(codeType: string, orm: string): void {
        this.connectStr = sessionStorage.getItem('ConnectStr') as string;
        this.DBType = sessionStorage.getItem('DBType') as string;
        this.selectedTable =  sessionStorage.getItem('SelectedTable') as string;
          this.appService.getCode(this.connectStr, this.DBType, this.selectedTable, codeType, orm).subscribe(
          data => {
            this.code = data;
          });
      }
}