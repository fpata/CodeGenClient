import { Component, AfterViewInit } from '@angular/core';
import { CSharpComponent } from './csharp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dal',
  templateUrl: './csharp.component.html'
})

export class DALComponent extends CSharpComponent
{

  ngAfterViewInit()
  {
    this.GetCSharpCode('CSharpDAL','None');
  } 
}