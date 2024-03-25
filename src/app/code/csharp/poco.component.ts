import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSharpComponent } from './csharp.component';
@Component({
  selector: 'app-poco',
  templateUrl: './csharp.component.html',
  styles: [
  ]
})
export class PocoComponent extends CSharpComponent{
  ngAfterViewInit() {
    this.GetCSharpCode('CSharpEntity','None');
  }

  
}
