import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';
import { Avaliador } from '../../model/avaliador.model';
import { AvaliadorService } from '../../service/avaliador.service';
import { catchError } from 'rxjs';
import { CartaoService } from 'src/app/features/cartao/service/cartao.service';
import { Cartao } from 'src/app/features/cartao/model/cartao.model';

@Component({
  selector: 'app-solicita-cartao',
  templateUrl: './solicitar-cartao.component.html',
  styleUrls: ['./solicitar-cartao.component.css'],
})
export class SolicitaCartaoComponent implements OnInit {
  formAvaliador!: FormGroup;
  cartoes!: Cartao[];
  inputValue: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private snackBarService: SnackBarService,
    private avaliadorService: AvaliadorService,
    private cartaoService: CartaoService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formAvaliador = this.formBuilder.group({
      cpf: ['', Validators.required],
      cartao: ['', Validators.required],
      endereco: ['', Validators.required],
      limite: ['', Validators.required],
    });
  }

  limparFormulario() {
    this.formAvaliador.reset();
  }

  solicitarCartao(payload: Avaliador) {
    this.avaliadorService
      .solicitarCartao(payload)
      .pipe(
        catchError((error) => {
          this.snackBarService.open(error.error.errors[0]);
          return [];
        })
      )
      .subscribe((resposta) => {
        this.limparFormulario();
        this.snackBarService.open('Cartão cadastrado com sucesso!');
      });
  }

  cartaoPorRenda(renda: number) {
    this.cartaoService.cartaoPorRenda(renda).subscribe((cartoes) => {
      this.cartoes = cartoes;
    });
  }

  pesquisar() {
    this.cartaoPorRenda(+this.inputValue);
  }

  salvarSolicitacao() {
    const payload: Avaliador = {
      cpf: this.formAvaliador.controls['cpf'].value,
      endereco: this.formAvaliador.controls['endereco'].value,
      idCartao: this.formAvaliador.controls['cartao'].value,
      limiteLiberado: this.formAvaliador.controls['limite'].value,
    };
    this.solicitarCartao(payload);
  }
}
