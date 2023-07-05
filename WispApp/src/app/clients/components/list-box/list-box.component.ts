import { Component, Input } from '@angular/core';

@Component({
  selector: 'client-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent{

  @Input()
  public clients: any[]= []; 
  constructor() { }



}
