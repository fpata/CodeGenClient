import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSharpComponent } from './csharp.component';

@Component({
  selector: 'app-efdbcontext',
  templateUrl: './csharp.component.html',
  styles: [
  ],
  imports: [FormsModule],
  standalone: true
})
export class EFDBContextComponent extends CSharpComponent {
  ngAfterViewInit()
  {
    this.GetCSharpCode('CSharpDBContext','None');
  } 
}
