
import { Component, OnInit } from '@angular/core';
import { LoguinService } from '../../servicio/loguin.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  model: any = {};

  constructor(private loguinService:LoguinService, private router:Router) { }

  ngOnInit(): void {
  }

  
  // Submit del formulario: Registro de usuario
  onSubmit() {
  
    this.loguinService.registrarUsuario(this.model.nombre, this.model.edad, this.model.telefono, this.model.email, this.model.patente, this.model.modelo, this.model.anio).subscribe(
      (val) => {  },
      response => {
         Swal.fire("Error al registrar el usuario", "Intente nuevamente.", 'error');
        },
      () => {
          Swal.fire("WERBEN", "Usuario registrado correctamente", 'success');
        });
 
     }


}

