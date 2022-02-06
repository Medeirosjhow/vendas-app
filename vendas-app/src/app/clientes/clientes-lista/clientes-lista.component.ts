import { Cliente } from './../cliente';
import{ Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente = new Cliente;
  mensagemSucesso: string = "";
  mensagemErro: string = "";

  constructor(
    private service: ClientesService,
     private router: Router) {}

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe( response => this.clientes = response);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form']);
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe(
         response => {
           this.mensagemSucesso = 'Cliente Deletado com Sucesso!',
           this.ngOnInit();
          },
         erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
      )
  }

}
