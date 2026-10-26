# Documentación del proyecto Curso JS DOM

## 1. Introducción

### ¿Qué es Git?
Git es un sistema de control de versiones distribuido. Guarda el historial de cambios
de un proyecto en forma de commits, permite volver a cualquier versión anterior y
trabajar en paralelo mediante ramas. Cada desarrollador tiene una copia completa del
repositorio, que se sincroniza con un remoto como GitHub.

### ¿Qué es Git Flow?
Git Flow es una metodología de ramas que define cómo organizar el trabajo:
- **main**: código en producción, cada versión lleva un tag.
- **develop**: integración de lo que irá en la próxima versión.
- **feature/\***: una rama por funcionalidad, sale de develop y vuelve a develop.
- **release/\***: prepara una versión, se fusiona en main (con tag) y en develop.
- **hotfix/\***: arreglos sobre producción, salen de main y vuelven a main y develop.

### ¿Por qué lo usamos?
Somos tres desarrolladores trabajando a la vez en secciones distintas. Git Flow permite
que cada uno trabaje aislado en su feature, mantener en main una versión estable para el
cliente, preparar versiones de forma controlada y corregir errores con hotfix sin mezclar
trabajo a medias.

## 2. Usuario 1: repositorio y estructura inicial
El Usuario 1 crea el repositorio `curso-js-dom` en GitHub.

![Repositorio creado](img/C01.png)

Clona el repositorio, inicializa Git Flow (`main` para producción y `develop` para desarrollo) y sube la rama `develop`.

![git flow init y rama develop](img/C02.png)

Da acceso al repositorio como colaborador.

![Colaboradores](img/C03.png)

Añade el boilerplate y la estructura inicial: cabecera con imagen de fondo, barra de navegación con Home, descripción del curso y footer.

![Página Home](img/C04.png)

## 3. Usuario 2: features de contenido y atributos

### feature/contingutHTML
Crea la rama desde `develop`, implementa el ejemplo de `innerHTML` con su explicación, la sube y la fusiona en `develop` con `--no-ff`.

![feature/contingutHTML](img/C05.png)

Resultado antes y después de pulsar el botón:

![Sección contenido](img/C06.png)
![Contenido cambiado](img/C07.png)

### feature/atributsHTML
Mismo proceso con los ejemplos de `src` y `setAttribute()`.

![feature/atributsHTML](img/C08.png)
![Sección atributos](img/C09.png)

## 4. Usuario 3: feature de estilos y release v1.0

### feature/estilsCSS
Crea la rama con los ejemplos de `element.style` (código comentado) y la fusiona en `develop`.

![feature/estilsCSS](img/C10.png)
![Sección estilos](img/C11.png)

### release/v1.0
Crea `release/v1.0` desde `develop`, la fusiona en `main`, la etiqueta como `v1.0` y la vuelve a fusionar en `develop`.

![release v1.0 (1)](img/C12.png)
![release v1.0 (2)](img/C13.png)
![Tag v1.0 en GitHub](img/C14.png)

## 5. Usuario 1: hotfix/milloresV_1_0
Crea `hotfix/milloresV_1_0` desde `main` para mejorar la sección de contenido (texto personalizado y botón para restaurar). Lo fusiona en `main` y `develop` y crea el tag `v1.0.1`.

![hotfix/milloresV_1_0](img/C15.png)
![Tags v1.0 y v1.0.1](img/C16.png)

## 6. Resultado final
Gráfico de ramas del repositorio (Insights → Network):

![Network graph](img/C17.png)

## Enlaces
- Repositorio: https://github.com/Mauro-vs/curso-js-dom
- Documentación: https://mauro-vs.github.io/curso-js-dom/
