import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor(private UsuarioService: UsuarioService) {
    this.UsuarioService.getUsuarios().subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit(): void {}
}
