import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista/lista.component';
import { usuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [ListaComponent, UsuarioComponent, LoginComponent],

  imports: [CommonModule, usuariosRoutingModule],
})
export class UsuariosModule {}
