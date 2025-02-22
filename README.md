CRUD API con Interfaz de Usuario
Este proyecto es una API CRUD (Create, Read, Update, Delete) para gestionar usuarios, desarrollada en TypeScript con Express. Además, incluye una interfaz de usuario (UI) construida con HTML, CSS y JavaScript para interactuar con la API de manera visual.

Tabla de Contenidos
Características

Tecnologías Utilizadas

Instalación

Uso

Endpoints de la API

Estructura del Proyecto

Contribución

Licencia

Características
CRUD de Usuarios: Permite crear, leer, actualizar y eliminar usuarios.

Interfaz de Usuario: Una UI sencilla para interactuar con la API sin necesidad de herramientas externas como Postman.

Validaciones: Evita la creación de usuarios duplicados y maneja errores de manera adecuada.

Soft Delete: Los usuarios no se eliminan físicamente, sino que se marcan como eliminados.

Tecnologías Utilizadas
Backend:

Node.js

Express

TypeScript

Frontend:

HTML

CSS

JavaScript

Herramientas:

Nodemon (para reinicio automático del servidor)

Postman (para pruebas de la API)

Instalación
Sigue estos pasos para configurar el proyecto en tu máquina local:

Clona el repositorio:

git clone https://github.com/tu-usuario/user-crud-api.git
cd user-crud-api

Instala las dependencias:

npm install
Compila el código TypeScript:
******************************
npm run build
Inicia el servidor:
*****************************
npm start
O, para desarrollo con reinicio automático:
************************************
npm run dev
Abre la interfaz de usuario:
*******************************************
Visita http://localhost:3000 en tu navegador.


Uso
Interfaz de Usuario
La interfaz de usuario te permite:

Agregar usuarios: Llena el formulario y haz clic en "Guardar".

Editar usuarios: Haz clic en "Editar" en la tabla, modifica los datos y guarda.

Eliminar usuarios: Haz clic en "Eliminar" en la tabla.

API
Puedes interactuar directamente con la API usando herramientas como Postman o curl. Los endpoints disponibles son:

Endpoints de la API
Método	Endpoint	Descripción
GET	/api/users	Obtener todos los usuarios.
GET	/api/users/:id	Obtener un usuario por ID.
GET	/api/users/search/name	Buscar usuarios por nombre.
GET	/api/users/search/name-and-id	Buscar usuarios por nombre e ID.
POST	/api/users	Crear un nuevo usuario.
PUT	/api/users/:id	Actualizar un usuario existente.
DELETE	/api/users/:id	Eliminar un usuario (soft delete).
