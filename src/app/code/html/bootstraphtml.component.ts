import { Component, AfterViewInit } from '@angular/core';
import { HTMLComponent } from './html.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bootstrapHml',
  templateUrl: './html.component.html',
  imports: [FormsModule],
})

export class BooStrapHtmlComponent extends HTMLComponent
{

  ngAfterViewInit()
  {
    this.GetHtmlCode('HTML','BootStrap');
  } 
}