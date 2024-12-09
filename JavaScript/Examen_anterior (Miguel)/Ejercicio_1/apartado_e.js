// e) Validar formato de la contraseña (0,75 puntos)

function validarContrasena(contrasena) {
    const patron = /^_[0-9]{3}[A-Z][a-z]_$/;
    return patron.test(contrasena);
  }
  