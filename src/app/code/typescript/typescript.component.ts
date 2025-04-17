import { Component , AfterViewInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css'],
  imports: [MatFormField, FormsModule],
  standalone: true
})

export class TypeScriptComponent extends BaseComponent {
  codeTypeScript: string = '';
  ORM: string = 'None';
  
  ngAfterViewInit() {
    this.GetData();
  }
  public GetData(): void {
    this.connectStr = sessionStorage.getItem('ConnectStr') as string;
    this.DBType = sessionStorage.getItem('DBType') as string;
    this.selectedTable =  sessionStorage.getItem('SelectedTable') as string;
    this.appService.getCode(this.connectStr, this.DBType, this.selectedTable, "TypeScript", this.ORM).subscribe(
      data => {
        this.codeTypeScript = data;
      });
  }

  createFiles(fileType:String): void {

  }
}