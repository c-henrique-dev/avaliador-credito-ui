import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../model/cliente.model';
import { catchError } from 'rxjs';
import { SnackBarService } from 'src/app/shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css'],
})
export class CriarClienteComponent implements OnInit {
  formCliente!: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private snackBarService: SnackBarService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formCliente = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      idade: ['', Validators.required],
    });
  }

  limparFormulario() {
    this.formCliente.reset();
  }

  criarCliente(payload: Cliente) {
    this.clienteService
      .criarCliente(payload)
      .pipe(
        catchError((error) => {
          this.snackBarService.open(error.error.errors[0]);
          return [];
        })
      )
      .subscribe((resposta) => {
        this.limparFormulario();
        this.snackBarService.open('Cliente cadastrado com sucesso!');
      });
  }

  salvarCliente() {
    const payload: Cliente = {
      nome: this.formCliente.controls['nome'].value,
      cpf: this.formCliente.controls['cpf'].value,
      idade: this.formCliente.controls['idade'].value,
    };
    this.criarCliente(payload);
  }
}
