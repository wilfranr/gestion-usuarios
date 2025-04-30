import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contactenos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contactenos.component.html',
})
export class ContactenosComponent {
  contacto = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  };

  enviar(): void {
    console.log('Mensaje enviado:', this.contacto);

    alert('Gracias por contactarnos. Tu mensaje ha sido enviado.');

    this.contacto = {
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: '',
    };
  }
}
