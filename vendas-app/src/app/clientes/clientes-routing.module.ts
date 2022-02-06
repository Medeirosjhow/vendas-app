import { LayoutComponent } from './../layout/layout.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFromComponent } from './clientes-from/clientes-from.component'
import { AuthGuard } from '../auth.guard';
const routes: Routes = [

  { path: 'clientes', component: LayoutComponent, canActivate: [AuthGuard] , children:[
    { path: 'form',  component: ClientesFromComponent},
    { path: 'form/:id',  component: ClientesFromComponent},
    { path: 'lista', component: ClientesListaComponent},
    { path: '', redirectTo: '/clientes/lista', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
