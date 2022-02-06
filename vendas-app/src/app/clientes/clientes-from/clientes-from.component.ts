import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-clientes-from',
  templateUrl: './clientes-from.component.html',
  styleUrls: ['./clientes-from.component.css']
})
export class ClientesFromComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] = [];
  id: number = 0;

  constructor( private service: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
     ) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    let params = this.activatedRouter.params.subscribe(x => {

      if (x && x['id']) {
          this.service.getClienteById(x['id']).subscribe(response => {
              this.cliente = response;
          });
      }
  });
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes/lista']);
  }

  onSubmit(){
    if(this.id){

      this.service
        .atualizar(this.cliente)
        .subscribe( response =>{
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
        })

    }else{
      this.service
        .salvar(this.cliente)
        .subscribe( response => {
          this.success = true;
          this.errors = [];
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
        )
    }
  }

}
