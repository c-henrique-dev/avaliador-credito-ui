import { Component } from '@angular/core';
import { AvaliadorService } from '../../service/avaliador.service';
import { Cartao } from 'src/app/features/cartao/model/cartao.model';

@Component({
  selector: 'app-situacao-cliente',
  templateUrl: './situacao-cliente.component.html',
  styleUrls: ['./situacao-cliente.component.css'],
})
export class SituacaoClienteComponent {
  inputCpf!: string;
  cartoes: Cartao[] = [];

  constructor(private avaliadorService: AvaliadorService) {}

  situacaoCliente(cpf: string) {
    this.avaliadorService.situacaoCliente(cpf).subscribe((situacaoCliente) => {
      this.cartoes = situacaoCliente.cartoes;
      console;
    });
  }

  pesquisar() {
    this.situacaoCliente(this.inputCpf);
  }
}
