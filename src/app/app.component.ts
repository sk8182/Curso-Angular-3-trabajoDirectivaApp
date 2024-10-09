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
  nombre:string="";
  apellido:string="";
  entradas: { titulo: string }[];


  constructor(){


    this.entradas =[

      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JS cada vez más funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedó pascal?"}
    ]

  }

  registrarUsuario(){
    
    this.registrado=true;

    this.mensaje="usuario registrado con éxito!";
  }
}
