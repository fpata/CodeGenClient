import { Component, AfterViewInit } from '@angular/core';
import { HTMLComponent } from './html.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-materialHml',
  templateUrl: './html.component.html'
})

export class MaterialHtmlComponent extends HTMLComponent
{

  ngAfterViewInit()
  {
    this.GetHtmlCode('HTML','Material');
  } 
}