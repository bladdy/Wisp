import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ClientService {
    private _ocultarModal: boolean = true;
    $modal = new EventEmitter<any>();
    constructor() { }

    get ocultarModal() {
        return this._ocultarModal;
    }

    abrirModal( ) {
        this._ocultarModal = false;
    }

    cerrarModal() {
        this._ocultarModal = true;
    }

}
