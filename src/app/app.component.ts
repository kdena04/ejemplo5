import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo5';

  //propiedades
  nombreCliente ='';
  emailCliente = '';
  opinionCliente = '';
  statusCliente= '';
  municipioCliente = '';
  autorizacionCliente = false;

  enviado=false;

  //declaramos un formulario (formGroup)
  formContacto =  new FormGroup({
    nombre: new FormControl('',[
     Validators.required,
     Validators.minLength(10)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    opinion: new FormControl('',[
      Validators.required,
      Validators.maxLength(500)
    ]),
    status: new FormControl('',[
      Validators.required
    ]),
    municipio: new FormControl('',[
      Validators.required
    ]),
    autorizacion: new FormControl(false),
  });

  //metodo que se ejecuta cuando se envia el formulario
  onSubmit(){
    this.enviado = true;
    if(this.formContacto.valid){
      this.nombreCliente= this.formContacto.value.nombre!;
      this.emailCliente= this.formContacto.value.email!;
      this.opinionCliente= this.formContacto.value.opinion!;
      this.statusCliente= this.formContacto.value.status!;
      this.municipioCliente= this.formContacto.value.municipio!;
      this.autorizacionCliente= this.formContacto.value.autorizacion!;
    }
  }
}
