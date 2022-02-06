import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFromComponent } from './clientes-from/clientes-from.component';
import { FormsModule } from'@angular/forms';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';

@NgModule({
  declarations: [
    ClientesFromComponent,
    ClientesListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ], exports: [
    ClientesFromComponent,
    ClientesListaComponent
  ]
})
export class ClientesModule { }
