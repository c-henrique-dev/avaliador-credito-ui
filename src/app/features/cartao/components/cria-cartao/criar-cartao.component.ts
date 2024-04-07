import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartaoService } from '../../service/cartao.service';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';
import { Cartao } from '../../model/cartao.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-cartao',
  templateUrl: './criar-cartao.component.html',
  styleUrls: ['./criar-cartao.component.css'],
})
export class CriarCartaoComponent implements OnInit {
  formCartao!: FormGroup;
  listaCartoes = ['VISA', 'MASTERCARD'];

  constructor(
    private cartaoService: CartaoService,
    private snackBarService: SnackBarService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCartao = this.formBuilder.group({
      nome: ['', Validators.required],
      bandeira: ['', Validators.required],
      renda: ['', Validators.required],
      limite: ['', Validators.required],
    });
  }

  limparFormulario() {
    this.formCartao.reset();
  }

  criarCartao(payload: Cartao) {
    this.cartaoService
      .criarCartao(payload)
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

  salvarCartao() {
    const payload: Cartao = {
      nome: this.formCartao.controls['nome'].value,
      bandeira: this.formCartao.controls['bandeira'].value,
      limite: this.formCartao.controls['limite'].value,
      renda: this.formCartao.controls['renda'].value,
    };
    console.log(payload);
    this.criarCartao(payload);
  }
}
