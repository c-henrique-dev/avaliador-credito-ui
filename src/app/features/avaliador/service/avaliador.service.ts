import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/http-base/http-base.service';
import { Avaliador } from '../model/avaliador.model';
import { Observable } from 'rxjs';
import { CartaoAvaliador } from '../model/cartao-avaliador.model';
import { SituacaoClienteModel } from '../model/situacao-cliente.model';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AvaliadorService extends HttpBaseService {
  private readonly endpoint = 'avaliacao-credito';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  solicitarCartao(payload: Avaliador): Observable<String> {
    return this.httpPost(`${this.endpoint}/solicitarCartao`, payload);
  }

  realizarAvaliacao(cpf: string, renda: number): Observable<CartaoAvaliador[]> {
    return this.httpPost(`${this.endpoint}/realizarAvaliacao`, { cpf, renda });
  }

  situacaoCliente(cpf: string): Observable<SituacaoClienteModel> {
    let params = new HttpParams().set('cpf', cpf);
    return this.httpGet(`${this.endpoint}/situacaoCliente`, params);
  }
}
