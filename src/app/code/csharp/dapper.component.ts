import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSharpComponent } from './csharp.component';

@Component({
  selector: 'app-dapper',
  templateUrl: './csharp.component.html',
  styles: [
  ]
})
export class DapperComponent extends CSharpComponent {
  ngAfterViewInit()
  {
    this.GetCSharpCode('CSharpEntity','Dapper');
  } 
}
