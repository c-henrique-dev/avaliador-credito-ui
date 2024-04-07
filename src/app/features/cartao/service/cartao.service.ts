import { Injectable, Injector } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/http-base/http-base.service';
import { Cartao } from '../model/cartao.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartaoService extends HttpBaseService {
  private readonly endpoint = 'cartao';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  criarCartao(payload: Cartao): Observable<Cartao> {
    return this.httpPost(`${this.endpoint}/create`, payload);
  }

  cartaoPorRenda(renda: number): Observable<Cartao[]> {
    let params = new HttpParams();
    params = params.set('renda', renda.toString());
    return this.httpGet(`${this.endpoint}/getCartoesRendaAteh`, params);
  }
}
