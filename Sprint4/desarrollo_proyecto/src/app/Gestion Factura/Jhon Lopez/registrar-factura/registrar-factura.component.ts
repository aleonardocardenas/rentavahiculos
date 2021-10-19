import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var mensaje1:any;
declare var todovectorcompleto:any;

@Component({
  selector: 'app-registrar-factura',
  templateUrl: './registrar-factura.component.html',
  styleUrls: ['./registrar-factura.component.css']
})
export class RegistrarFacturaComponent implements OnInit {
  
  //Nombretitulo = "Profe Jhon";
  //todovectorcompleto ="";
    datosfactura = new FormGroup({
    Sexo_usuario: new FormControl(''),
    nombre_usuario: new FormControl(''),
    correo_usuario: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl(''), 
  });
 

  facturausuario(){
    alert(this.datosfactura.value.nombre_usuario);

    //this.todovectorcompleto = mensaje1();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
