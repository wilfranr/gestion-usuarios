import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nombre: string = '';
  correo: string = '';
  rol: string = '';
  nombreUsuario: string | null = null;
  rolUsuario: string | null = null;
  mostrarFormulario: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const datosGuardados = localStorage.getItem('registroUsuario');
      if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        this.nombreUsuario = datos.nombre;
        this.rolUsuario = datos.rol;
      }
    }
  }

  guardar(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.nombre.trim() && this.correo.trim() && this.rol.trim()) {
        const datos = {
          nombre: this.nombre,
          correo: this.correo,
          rol: this.rol,
        };
        localStorage.setItem('registroUsuario', JSON.stringify(datos));
        this.nombreUsuario = this.nombre;
        this.nombre = '';
        this.correo = '';
        this.rol = '';
        this.mostrarFormulario = false;
      }
    }
  }
  cerrarSesion(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('registroUsuario');
      this.nombreUsuario = null;
      this.rolUsuario = null;
    }
  }
}
