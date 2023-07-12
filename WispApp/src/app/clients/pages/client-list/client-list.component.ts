import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clienteservices.service';
import { delay } from 'rxjs';

@Component({
  selector: 'client-list-page',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  
  public clients: any [] = [];
  public isLoading: boolean = false;
 
  constructor( public clienteService :ClientService) { }
  ngOnInit(): void{
    
  }
  searchClient(term: string):void {
    this.isLoading = true;
    console.log(term)
    setTimeout(() => 
    {
        //this.router.navigate(['/']);
        console.log(this.isLoading)
        this.isLoading = false;
    },
    5000);
    console.log(this.isLoading)
  }
  abrirModal() {
    this.clienteService.abrirModal();
  }
}