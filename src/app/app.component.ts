import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de usuarios';
  mensaje = "";
  registrado=false;

  registrarUsuario(){
    
    this.registrado=true;

    this.mensaje="usuario registrado con éxito!";
  }
}
