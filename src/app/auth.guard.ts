import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const datos = localStorage.getItem('registroUsuario');

  if (!datos) {
    router.navigateByUrl('/');
    return false;
  }

  const user = JSON.parse(datos);
  if (user.rol === 'Administrador') {
    return true;
  }

  router.navigateByUrl('/');
  return false;
};
