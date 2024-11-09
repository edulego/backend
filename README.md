# backend
backend Node express, PostgreSQL

Crear el directorio
mkdir backend

cd backend

Iniciar el proyecto
npm init

Instalar los paquetes
npm install express sequelize pg pg-hstore body-parser cors --save

 

ARBOL DE DIRECTORIOS Y ARCHIVOS

app
            config
                        db.config.js
            controllers
                        bienes.controller.js
            models
                        index.js
                        bienes.model.js
            routes
                        bienes.routes.js

INSERTAR DATOS EN LA DB
INSERT INTO public.bienes (title, description, published, "createdAt", "updatedAt")
VALUES('Departamento Coruña', 'Departamento Coruña con 140 m2 frente a vía principal', true, current_timestamp, current_timestamp),
('Casa de 2 plantas', 'Sector la Carolina con todos los accesos y servicios', true, current_timestamp, current_timestamp);

Correr el servidor
node ./server.js


 
