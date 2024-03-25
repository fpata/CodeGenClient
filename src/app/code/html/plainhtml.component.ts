import { Component, AfterViewInit } from '@angular/core';
import { HTMLComponent } from './html.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plainHtml',
  templateUrl: './plainHtml.component.html'
})

export class PlainHtmlComponent extends HTMLComponent
{

  ngAfterViewInit()
  {
    this.GetHtmlCode('HTML','None');
  } 
}