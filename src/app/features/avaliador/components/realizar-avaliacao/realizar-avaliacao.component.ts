import { Component } from '@angular/core';
import { CartaoAvaliador } from '../../model/cartao-avaliador.model';
import { AvaliadorService } from '../../service/avaliador.service';

@Component({
  selector: 'app-realizar-avaliacao',
  templateUrl: './realizar-avaliacao.component.html',
  styleUrls: ['./realizar-avaliacao.component.css'],
})
export class RealizarAvaliacaoComponent {
  inputCpf: string = '';
  inputRenda!: number;
  estaVazio!: boolean;
  cartoes: CartaoAvaliador[] = [];

  constructor(private avaliadorService: AvaliadorService) {}

  realizarAvaliacao(cpf: string, renda: number) {
    this.avaliadorService.realizarAvaliacao(cpf, renda).subscribe((cartoes) => {
      this.cartoes = cartoes;
      if (this.cartoes.length == 0) {
        this.estaVazio = true;
      } else {
        this.estaVazio = false;
      }
    });
  }

  buscarCartoes() {
    console.log(this.inputCpf);
    this.realizarAvaliacao(this.inputCpf, this.inputRenda);
  }
}
