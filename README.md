# Express Tasks

Express Tasks es una aplicación web que permite registrar tareas para el control de las actividades diarias de las personas de manera autónoma.



# Instalación

```shell
https://github.com/DeltaBairon/proyecto1_clud_computing
npm install
npm run build
npm start
```

# 📝 Task & Notes Manager — Plataforma PaaS con Node.js y Express
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Router%20API-lightgrey?logo=express)
![EJS](https://img.shields.io/badge/EJS-Templates-orange?logo=ejs)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)
![GitLab CI](https://img.shields.io/badge/GitLab-CI/CD%20Ready-orange?logo=gitlab)
![PaaS](https://img.shields.io/badge/Platform-PaaS-success?logo=heroku)
![JSON](https://img.shields.io/badge/Data-JSON%20Storage-yellow?logo=json)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?logo=checkmarx)

## 🚀 Descripción del Proyecto
Esta aplicación permite gestionar notas o tareas a través de una interfaz web dinámica construida con Node.js, Express y EJS. Funciona como una **plataforma PaaS (Platform as a Service)** que facilita a los usuarios el acceso, creación y eliminación de notas sin necesidad de instalar software localmente. El proyecto está diseñado para ejecutarse en la nube mediante contenedores Docker y pipelines de integración continua, simplificando el despliegue y la escalabilidad.

## ⚙️ Estructura del Proyecto
├── src/
│   ├── controllers/
│   │   └── index.controller.js       
│   ├── routes/
│   │   └── index.js                  
│   ├── views/
│   │   ├── partials/                
│   │   ├── index.ejs                
│   │   ├── new-entry.ejs            
│   │   ├── about.ejs                
│   │   └── 404.ejs                  
│   ├── public/css/
│   │   └── main.css                  
│   ├── books.json                    
│   ├── config.js                    
│   └── app.js                        
├── test/
│   └── basic.test.js                 
├── Dockerfile                       
├── .gitlab-ci.yml                   
├── .github/workflows/javascript.yml 
├── package.json                      
├── README.md                         

## 💡 Funcionamiento General
El sistema implementa un flujo CRUD simple (Create, Read, Delete) sobre un archivo JSON. Los controladores en `src/controllers/index.controller.js` manejan las peticiones y renderizan vistas dinámicas mediante EJS.  
- **renderIndexPage:** muestra todas las notas cargadas desde `books.json`.  
- **renderNewEntryPage:** despliega el formulario para crear una nueva nota.  
- **createNewEntry:** recibe los datos del formulario (título, autor, imagen, descripción), genera un ID único con UUID y guarda la nota en el archivo JSON.  
- **deleteBook:** elimina una nota por su ID y actualiza el archivo JSON.  

La información se procesa con `fs` (File System) y se almacena localmente en formato JSON, actuando como una base de datos ligera. Esto permite un entorno simple pero funcional para entornos educativos o despliegues rápidos en plataformas PaaS.

## 🌐 Enfoque PaaS
El proyecto está pensado para ejecutarse en plataformas cloud como **Heroku, Render o Railway**, donde se despliega como servicio PaaS. Esto permite:
- Escalabilidad automática sin gestión de infraestructura.
- Despliegue mediante contenedores Docker o pipelines CI/CD.
- Facilidad para exponer la aplicación a través de dominios públicos HTTPS.
- Accesibilidad desde cualquier dispositivo con conexión a Internet.

## 🧩 Tecnologías Utilizadas
- **Node.js** — entorno de ejecución backend.
- **Express.js** — framework para la gestión de rutas y controladores.
- **EJS** — motor de plantillas para vistas dinámicas.
- **JSON** — persistencia de datos ligera.
- **Docker** — contenedor para despliegue cloud.
- **GitHub Actions / GitLab CI** — automatización de pruebas y despliegue continuo.

## 🧪 Ejecución Local
```bash
# Clonar el repositorio
git clone https://github.com/DeltaBairon/proyecto1_clud_computing.git
cd task-notes-manager

# Instalar dependencias
npm install

# Ejecutar el servidor en modo desarrollo
npm run dev

# Acceder desde el navegador
http://localhost:3000
