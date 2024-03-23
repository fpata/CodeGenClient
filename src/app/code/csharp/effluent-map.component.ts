import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSharpComponent } from './csharp.component';

@Component({
  selector: 'app-effluent-map',
  templateUrl: './csharp.component.html',
  styles: [
  ]
})
export class EFFluentMapComponent extends CSharpComponent{
  ngAfterViewInit() {
    this.GetCSharpCode('CSharpEntity','EFFluentMap');
  }
}
