import { Component, AfterViewInit } from '@angular/core';
import { HTMLComponent } from './html.component';

@Component({
  selector: 'app-bootstrapHml',
  templateUrl: './html.component.html'
})

export class BooStrapHtmlComponent extends HTMLComponent
{

  ngAfterViewInit()
  {
    this.GetHtmlCode('HTML','BootStrap');
  } 
}