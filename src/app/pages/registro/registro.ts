import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-registro',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  email = new FormControl('');
  password = new FormControl('');
  protected authService = inject(Auth);

  crearCuenta() {
    this.authService.crearCuenta(this.email.value ? this.email.value : '', this.password.value ? this.password.value : '');
  }

  iniciarSesion() {
    this.authService.iniciarSesion(this.email.value ? this.email.value : '', this.password.value ? this.password.value : '');
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
  }

}
