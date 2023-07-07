import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clienteservices.service';

@Component({
  selector: 'client-list-page',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

 
  constructor( public clienteService :ClientService) { }
  ngOnInit(): void{
    
  }
  public clients: any [] = [];
  searchClient(term: string) {
    console.log(term)
    
  }
  abrirModal() {
    this.clienteService.abrirModal();
  }
}