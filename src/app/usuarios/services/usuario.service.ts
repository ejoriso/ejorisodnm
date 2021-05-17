import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'http://192.168.1.132/apidemo/public/';

  constructor(private http: HttpClient) {
    console.log('Servicio Persona');
  }
  getUsuarios() {
    let header = new HttpHeaders().set('Type-Content', 'aplication/json');
    return this.http.get(this.url, {
      headers: header,
    });
  }
}
