# Chat App

## Índice

- [1. Preámbulo](#1-preámbulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
- [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

---

## 1. Preámbulo

## 2. Resumen del proyecto

En este proyecto construirás una aplicación de mensajería instantánea. Esta
aplicación requerirá que las personas puedan registrarse e iniciar sesión para
poder enviar mensajes a un canal de chat general y también la creación de
canales temáticos donde cada persona podrá ingresar por su cuenta.

Para acercar este proyecto lo más posible a entornos profesionales le daremos
gran importancia al desarrollo a través de
[Historias de Usuaria](https://www.atlassian.com/es/agile/project-management/user-stories)
para definir alcance y prioridad de las funcionalidades que desarrollarás. Para
esto te ayudaremos como coaches jugando el rol de _Product Owner_. Te
entregaremos las primeras historias ya hechas, para que tengas una base para
partir, y durante el proceso tendrás que seguir escribiendo tus propias
historias para abarcar todas las funcionalidades.

Para implementar mensajes instantáneos en un chat ocuparás la librería
[Socket.io](https://socket.io), que te permitirá ocupar _web sockets_ para
mantener conexiones abiertas entre las personas que estén conectadas dentro del
chat y el “servidor” que centralizará la comunicación, recibiendo los mensajes y
enviándolos de nuevo a los “clientes”.

Alojarás esta aplicación en la plataforma [Heroku](https://www.heroku.com/) y
construirás con [GitHub Actions](https://github.com/features/actions) tu propio
_pipeline_ de Integración Continua y Entrega Continua (CI/CD) para automatizar
el despliegue que hará que tu proyecto esté disponible a través de Internet para
cualquier persona. Para almacenar los datos ocuparás la base de datos PostgreSQL
en la versión que provee nativamente Heroku.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a
> partir de los objetivos de aprendizaje declarados en
> [`project.yml`](./project.yml), al crear el repo del proyecto para un cohort
> en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una
> [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

### 4.1 Historias de Usuaria

Las Historias de Usuaria actualmente son esenciales en el desarrollo de software
ágil. En pocas palabras, son descripciones en texto de una funcionalidad de la
aplicación en desarrollo, desde el punto de vista de quienes la ocuparán, las
usuarias. Las utilizamos a lo largo de todo el proceso de desarrollo y vamos
creando nuevas historias a medida que vamos aprendiendo sobre lo que es
prioritario y lo que reporta mayor valor para nuestras usuarias.

Existen varias formas o estructuras para escribir una historia. Durante este
proyecto ocuparemos la fórmula _Persona + Necesidad + Propósito_ que captura a
qué segmento de usuarios apunta, qué necesidad de aquellas personas satisface y
el propósito que ellas tienen detrás de esa necesidad.

Esta herramienta, aunque útil, no soluciona automáticamente todos los problemas.
Es muy fácil caer en la trampa de intentar poner absolutamente todos los
aspectos de una funcionalidad en una única historia y comprometernos con su
desarrollo en un sprint de 1 o 2 semanas, para luego darnos cuenta que el
trabajo requerido era mayor al esperado y terminar acarreando la misma historia
en progreso sprint tras sprint.

Para evitar historias muy grandes es importante aplicar un enfoque iterativo al
escribirlas. Si es necesario podemos “romper” una historia grande en historias
más pequeñas que comprendan incrementos de una misma funcionalidad. Por ejemplo,
podemos implementar el inicio de sesión asumiendo que los datos siempre están
correctos o haciendo las validaciones más críticas, y si queremos agregar poder
recuperar contraseña, entoncws podemos tener una historia aparte que contemple
solo eso.

### 4.2 El rol de _Product Owner_

> 1. Rol de PO en equipos ágiles en general
> 2. Mencionar que el rol PO no es "fijo" y sus responsabilidadese no son
>    "exclusivas"
> 3. Mencionar la importancia de desarrollar estas habilidades
> 4. Describir interacción que habrá con coach para cumplir rol de PO
> 5. Mencionar importancia de negociación de alcance y prioridad

### 4.3 WebSockets

Los WebSockets son una avanzada tecnología que permiten abrir una comunicación
interactiva bidireccional entre el navegador de un “cliente” y un “servidor”.
Este tipo de conexiones permite chatear con personas a través de la web, algo no
posible con conexiones tradicionales.

Imaginemos una aplicación que requiera recargar manualmente la página cada vez
que queramos ver los mensajes nuevos, no sería ni muy instantánea ni muy útil.
Con WebSockets, cargaremos la página una vez y la conexión quedará abierta para
que simplemente recibamos los mensajes de otras personas manejando _eventos_.

Con la librería [Socket.io](https://socket.io) podemos implementar conexiones de
este tipo sin tener que hacer muchas cosas manualmente. Así, familiarizándote
con ella podrás agregar la comunicación instantánea a tu aplicación sin muchas
demoras y así podrás enfocarte en las funcionalidad más complejas.

![Diagrama de comunicación bidireccional cliente-servidor](./bidirectional-communication.png)

### 4.4 Heroku y Postgres

Heroku es una plataforma similar a Firebase. Ambas pertenecen a la categoría
llamada “Plataforma como Servicio”, en inglés _Platform-as-a-Service_ (PaaS).
Estas plataformas permiten alojar aplicaciones para que nuestro trabajo quede
disponible por Internet a cualquier persona.

Una de las ventajas de Heroku, es la rapidez del proceso, pues detecta
automáticamente algunas características de nuestro proyecto y nos evita tener
que hacer muchas configuraciones de forma manual. Es posible tener una
aplicación corriendo en Heroku ¡en menos de 5 minutos!

Este tipo de tecnologías es muy importante actualmente en el desarrollo de
aplicaciones, ya sea front-end, back-end o full-stack, puesto que automatizan
una de las tareas esenciales del desarrollo de software: el _despliegue_. Le
llamamos “desplegar” (hacer _deployment_) al acto de tomar el código de nuestra
aplicación y moverlo a uno de estos servicios para que nuestros cambios más
actuales queden disponibles para usuarios. Durante el bootcamp muchas veces
hiciste esto con `firebase deploy` para desplegar los cambios a Firebase o
quizás configurando tu repositorio para que el código se viera en
[GitHub Pages](https://pages.github.com/).

> TODO: Insertar diagrama localhost vs deployment

Así como Firebase permitía guardar datos en su base de datos Firestore, Heroku
permite conectar de forma nativa con otra base de datos, PostgreSQL (también
llamada solo Postgres), una de las más conocidas y utilizadas en la industria.
Usualmente configurar bases de datos puede llegar a ser una tarea compleja,
especialmente si queremos configurarlas en los entornos de “producción”. Heroku
simplifica todo este proceso con Postgres entregándonos los beneficios y
ahorrándonos hacer muchas configuraciones.

Para el desarrollo de este proyecto trabajarás haciendo despliegues a Heroku y
ocupando su servicio nativo de Postgres para persistir tus datos.

### 4.5 El _pipeline_ de Integración Continua

Para lograr que nuestro código pueda estar disponible para cualquier persona, es
necesario desplegar nuestra aplicación, tal como con GitHub Pages y Firebase.
Una forma en que hiciste esto fue ejecutando `firebase deploy`. A lo largo del
desarrollo es muy probable que tengamos que realizar esta tarea muchas veces,
incluso varias veces al día. Esto transforma el despliegue en una tarea
recurrente que propensa a errores: puede que nos equivoquemos en el comando
exacto a ejecutar; quizás nos olvidamos de correr antes las pruebas o verificar
algo de forma manual; incluso puede ocurrir que estemos desplegando a una
plataforma que requiera varios pasos adicionales que debamos repetir una y otra
vez.

Como seres humanos, tenemos una gran habilidad para realizar tareas “difusas”,
que requieren pensamiento creativo, pero si la tarea es simplemente realizar y
marcar acciones de una lista, bueno, ahí no nos va tan bien. Afortunadamente ya
se ha vuelto un estándar de la industria (al menos las partes más avanzadas)
usar herramientas que permiten ejecutar todos estos pasos de forma automática a
través de un _pipeline_ de “Integración Continua”. Un _pipeline_ es simplemente
una “línea de producción”, un proceso que automatizamos para desplegar nuestra
aplicación, un canal por donde pasa nuestro código cumpliendo distintas etapas,
las que van acercando cada vez más nuestro trabajo a “producción”. Por ejemplo,
podríamos tomar nuestro código, correr las pruebas y solo si todas pasaron con
éxito entonces podríamos desplegar a alguna plataforma (Firbase, Heroku, etc.).

![Diagrama de pipeline de Integración Continua](./ci-pipeline.png)

Este proyecto contempla la construcción de un _pipeline_ de Integración Continua
para ejecutar todos los pasos previos al despliegue y también el despliegue
mismo. Para esto utilizarás
[GitHub Actions](https://github.com/features/actions).

### 4.6 Estructura de archivos

El _boilerplate_ contiene una estructura de archivos como punto de partida:

```text
.
├── .gitignore
├── docker-composer.yml
├── project.yml
├── README.md
├── apache2
├── html
└── php-playground
```

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Desarrollo iterativo con Historia de Usuaria

### 5.2 Despliegue automatizado con un _pipeline_ de CI

### 5.3 Persistencia de datos con una base de datos

### 5.4 Modularización del código

### 5.5 Pruebas unitarias

Deberás incluir pruebas unitarias para el plugin que desarrolles hasta cubrir
como mínimo el 70% de _statements_ (_sentencias_), _functions_ (_funciones_),
_lines_ (_líneas_), y _branches_ (_ramas_) de tus componentes.

## 6. Pistas, tips y lecturas complementarias

### 6.1 Historias de Usuaria

### 6.2 Comunicación en tiempo real con Socket.io

### Otros recursos

- Lorem Ipsum
