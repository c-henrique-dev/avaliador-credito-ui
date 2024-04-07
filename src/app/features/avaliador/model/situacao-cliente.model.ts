import { Cartao } from '../../cartao/model/cartao.model';
import { Cliente } from '../../cliente/model/cliente.model';

export interface SituacaoClienteModel {
  cliente: Cliente;
  cartoes: Cartao[];
}
