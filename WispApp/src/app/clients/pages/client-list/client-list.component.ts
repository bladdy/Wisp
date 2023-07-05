import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-list-page',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent{

  public clients: any [] = [];
  searchClient(term: string) {
    console.log(term)

  }
}