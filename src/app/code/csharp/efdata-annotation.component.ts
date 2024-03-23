import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CSharpComponent } from './csharp.component';

@Component({
  selector: 'app-efdata-annotation',
  templateUrl: './csharp.component.html',
  styles: [
  ]
})
export class EFDataAnnotationComponent extends CSharpComponent{
  ngAfterViewInit() {
    this.GetCSharpCode('CSharpEntity','EntityFramework');
  }
}
