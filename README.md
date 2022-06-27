# PortfolioDinamico

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.  
El proyecto consiste, en traspasar el portfolio estático generado en el módulo dos del Plan Argentina Programa, a un proyecto Angular para hacerlo dinamico. Durante el Módulo 3, solo se tomarán los datos de forma dinámica, pero en modo local, ya sea con variables, arrays u objetos o desde un fichero json.

## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Generación del proyecto

Ejecute `ng build` para compilar el proyecto. Los archivos de compilación se almacenarán en el directorio `dist/`.

## Hoja de Ruta

**26/06/2022**

- Creación del proyecto Angular y traspaso del portfolio estatico al componente principal.
- Creación de los componentes base y traspaso del html y css a su correspondiente componente.

**27/06/2022**

- El componente encabezado recibe los datos a traves de `property binding` e `interpolación`
- El componente banner recibe los datos desde un objeto `perfil`
- El componente sobreMi recibe los datos desde un objeto `sobreMi`
- El componente experiencia fue dividido en dos componentes separados
  - Componente experienciaList que recibe un objeto `experienciaList` con todas las experiencias y lo pasa uno por uno por parámetro al componente experiencia para ser mostrados
  - Componente experiencia que recibe un objeto `experiencia` para mostrar los datos
- El componente habilidades fue dividido en los componentes
  - habilidad-item recibe un objeto `habilidad` del componente habilidad-list
  - habilidad-list recibe un objeto `habilidades` para pasar listar las habilidades
- Se reordeno la estructura de carpeta de los componentes para mejor entendimiento de la estructura
