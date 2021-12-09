# Hackaton JOBMadrid
## JOBMadrid'21 Networking Grid

PROYECTO

Para hacerles la vida más fácil a los asistentes de los eventos de Networking y negocios se nos ha pedido que creemos un panel con todas las empresas participantes. Así, las empresas y asistentes que quieran puedan filtrar y buscar de forma fácil la empresa que les interese.

Para poder hacerlo se plantea el diseño de una página donde los usuarios pueden filtrar por industria. Con ello, se pueden ver las distintas empresas de ese sector con su información básica y el enlace a su página web.


## TASKS

✅ Task 1 → Puedo ver la barra superior con el botón de filter y las chips de filtro (botones con cada uno de los nombres de industria que se encuentran en la lista de compañías del enunciado) 

✅ Task 2 → Si no hay ninguna chip de filtro seleccionada puedo ver la lista completa de compañías

✅ Task 3 → Al seleccionar un filtro, se ven únicamente las empresas que contienen ese filtro

✅ Task 4 → Al hacer click en website me lleva a una página externa

✅ Task 5 → La card de cada empresa contiene la siguiente información: Nombre, Año, Industria, Tamaño, Link a la web 


¡¡IMPORTANTE!!

Este proyecto está basado en una API con la data de las compañías participantes y existe un problema con las cors de la url del API del Hackathon que hacen que no funcione correctamente en Chrome. Para ello, como solución, existe una extensión para Chrome que arregla el problema.

https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc


## Calidad de código

Codefactor Code **A**

[![CodeFactor](https://www.codefactor.io/repository/github/barbaraestevez/jobmadrid-networking-grid)](https://www.codefactor.io/repository/github/barbaraestevez/jobmadrid-networking-grid)


## Comenzar

¿Que necesitas para instalar el software?

```
Necesitas tener instalado Node JS
```


### Instalación

1. Descarga este repositorio en zip o clona el mismo en tu dispositivo (IMPORTANTE!! Si clonas el repositorio, ten en cuenta que no podrás añadir tus commits)
2. Abre una terminal en la carpeta raíz de tu repositorio
3. Instala las dependencias locales ejecutando en la terminal el comando:

```
npm install
```


### Arrancar el proyecto

Para arrancar el proyecto, ejecuta el comando:

```
npm start
```

- Se abrirá una ventana en tu navegador pretederminado, que mostrará tu web.
- Los ficheros sobre lo que trabajarás estan dentro de la carpeta `src/`


### Publicar el proyecto en GitHub Pages

Introducir el comando

```
npm run githubpages
```

A continuación configurar Pages en GitHub:

1.  Ir al repo.
2.  Ir a Settings.
3.  Ir a Pages.
4.  Elegir la rama master o main.
5.  Elegir la carpeta `/docs`.
6.  Y guardar.


## Construido con

- HTML
- SASS
- GULP
- REACT

## Autor/a

- **Bárbara Estévez** [Github](https://github.com/barbaraestevez)

## Licencia

Este proyecto está bajo la Licencia MIT License.