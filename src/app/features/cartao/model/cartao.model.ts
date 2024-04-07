import { BandeiraCartao } from '../enum/bandeira-cartao.enum';

export interface Cartao {
  id?: number;
  nome: string;
  bandeira: BandeiraCartao;
  renda: number;
  limite: number;
}
