import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clienteservices.service';

@Component({
  selector: 'modal-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  public ocultarModal: boolean = true;

  constructor( public clienteService :ClientService) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.clienteService.cerrarModal();
  }
}
