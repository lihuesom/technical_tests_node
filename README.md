# Prueba Técnica: API RESTful utilizando Node.js con JavaScript

Este proyecto es una API RESTful desarrollada en Node.js y JavaScript como parte de una prueba técnica. La finalidad de la prueba es implementar operaciones CRUD sobre una entidad de información.

## Estructura del proyecto

La estructura del proyecto esta basado bajo Single Responsibility Principle

- `routes`: contiene las rutas de la API.
- `services`: contiene las clases para validar las peticiones HTTP.

## Funcionalidades

La API ofrece las siguientes funcionalidades:

- **Crear**: Permite crear una nueva entidad proporcionando los campos necesarios como nombre, descripción y fecha de creación.
- **Leer**: Permite obtener información de una entidad existente proporcionando su ID.
- **Actualizar**: Permite actualizar los campos de una entidad existente mediante su ID.
- **Eliminar**: Permite eliminar una entidad existente utilizando su ID.

## Entidad de Información

La entidad de información utilizada en este proyecto es una constante definida en el código llamada **products**. Cada entidad cuenta con los siguientes campos:

- **ID**: Identificador único de la entidad.
- **Nombre**: Nombre descriptivo de la entidad.
- **Descripción**: Descripción detallada de la entidad.
- **Precio**: Valor de la entidad
- **Imagen**: Imagen generado por medio de la libreria faker-js.
- **Fecha de Creación**: Fecha en la que se creó la entidad.

## Ejecutar el Proyecto
1. Clonar el repositorio 

```javascript
git clone git@github.com:lihuesom/technical_tests_node.git
```

2. Instala las dependencias:

```javascript
npm install
```

3. Inicia el servidor:

```javascript
npm start
```
El proyecto estará disponible en `http://localhost:3000`.

## Abrir Documentación de Postman

1. Abre la aplicación de Postman.
2. Importa la documentación (test_tiui.postman_collection) en Postman siguiendo estos pasos:
   - Haz clic en "Import" en la parte superior izquierda de la ventana de Postman.
   - Selecciona la opción "File" y busca el archivo JSON de la documentación.
   - Haz clic en "Open" para importar el archivo.
3. Ahora tendrás la documentación en tu colección de Postman.

¡Listo! Ahora puedes clonar el repositorio, ejecutar el proyecto y acceder a la documentación de Postman importando el archivo JSON en la aplicació

## Uso de la API

Una vez que el servidor esté en ejecución, puedes realizar solicitudes HTTP a la API utilizando herramientas como cURL, Postman u otros clientes HTTP.

A continuación, se muestra un ejemplo de cómo realizar algunas solicitudes:

- **Crear una entidad**:
  ```
  POST http://localhost:3000/api/v1/products/
  Content-Type: application/json
  {
        "name": "Handmade Frozen Sausages",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "price": 10000,
        "image": "https://picsum.photos/seed/YGDFQH2BN/640/580"
  }
  ```

- **Obtener una entidad**:
  ```
  GET http://localhost:3000/api/v1/products/:id
  ```

  Reemplaza `:id` con el ID de la entidad que deseas obtener.

- **Actualizar una entidad**:
  ```
  PATCH http://localhost:3000/api/v1/products/:id
  Content-Type: application/json

  {
    "name": "Nuevo nombre de la entidad"
  }
  ```

  Reemplaza `:id` con el ID de la entidad que deseas actualizar.

- **Eliminar una entidad**:
  ```
  DELETE http://localhost:3000/api/v1/products/:id
  ```

  Reemplaza `:id` con el ID de la entidad que deseas eliminar.

Recuerda reemplazar `http://localhost:3000` con la URL correspondiente si has configurado una diferente.

¡Disfruta explorando y probando la API!
