/**
 * Middleware para registrar y pasar errores al siguiente middleware.
 * Registra el error en la consola y luego pasa el error al siguiente middleware.
 *
 * @param {Error} err - Objeto de error.
 * @param {object} req - Objeto de solicitud HTTP.
 * @param {object} res - Objeto de respuesta HTTP.
 * @param {function} next - Función para pasar al siguiente middleware.
 */
function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

/**
 * Middleware para manejar los errores y enviar una respuesta de error al cliente.
 * Devuelve una respuesta JSON con el mensaje de error y la pila de errores (stack trace).
 *
 * @param {Error} err - Objeto de error.
 * @param {object} req - Objeto de solicitud HTTP.
 * @param {object} res - Objeto de respuesta HTTP.
 * @param {function} next - Función para pasar al siguiente middleware.
 */
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack, // mostrar información del error
  });
}

module.exports = { logErrors, errorHandler };
