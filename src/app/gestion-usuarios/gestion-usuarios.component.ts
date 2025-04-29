import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './gestion-usuarios.component.html',
})
export class GestionUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  nuevoUsuario: any = { nombre: '', correo: '', rol: '' };
  modoEditar: boolean = false;
  indiceEditar: number = -1;

  ngOnInit(): void {
    const data = localStorage.getItem('usuarios');
    this.usuarios = data ? JSON.parse(data) : [];
  }

  guardarUsuario() {
    if (this.modoEditar) {
      this.usuarios[this.indiceEditar] = { ...this.nuevoUsuario };
      this.modoEditar = false;
      this.indiceEditar = -1;
    } else {
      this.usuarios.push({ ...this.nuevoUsuario });
    }
    this.nuevoUsuario = { nombre: '', correo: '', rol: '' };
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  editarUsuario(index: number) {
    this.nuevoUsuario = { ...this.usuarios[index] };
    this.modoEditar = true;
    this.indiceEditar = index;
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  cerrarSesion() {
    localStorage.removeItem('registroUsuario');
    localStorage.removeItem('usuarios');
    location.href = '/';
  }
}
