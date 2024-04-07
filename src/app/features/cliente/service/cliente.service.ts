import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/http-base/http-base.service';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends HttpBaseService {
  private readonly endpoint = 'cliente';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  criarCliente(payload: Cliente) {
    return this.httpPost(`${this.endpoint}/create`, payload);
  }
}
