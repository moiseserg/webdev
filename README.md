# Creación de una página web en Github

## Crear una cuenta en el sitio de github

1. Ingresar al sitio [github](https://github.com/)

2. Ingresar tus datos en el formulario

<img align="center" width="50%"  src='https://github.com/moiseserg/webdev/blob/master/docs/images/githubSignIn.png' >



3. Indicar el plan de uso de github - unlimited public. 
De esta forma todo mundo podrá ver tu código fuente... al ser un proyecto escolar. No debería haber problema por ustedes.

<img align="center" width="50%" src='https://github.com/moiseserg/webdev/blob/master/docs/images/github02.png'>


 
 
4. Responder la encuesta (si se desea).

<img align="center" width="50%"  src='https://github.com/moiseserg/webdev/blob/master/docs/images/github03.png'>



5. Ir a la guía si se desea una introducción más completa o irse directamente a crear un proyecto. En este caso irse directamente a crear el proyecto y continuar con los siguientes pasos.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/github04.png' width="50%">


6. Se te enviará un correo electrónico a la cuenta que hayas indicado. En caso de no encontrarla revisa tu *spam*.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/github06.png' width="50%">

7. Hay que verificar en su correo electrónico al darle clic al link recibido
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/github07.png' width="40%">

8. Si deseas ingresar cuentas adicionales para administrar tu cuenta, en estas opciones puedes hacerlo.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/github08.png' width="60%">


## Crear un proyecto

1. Usar la opción **Crear repositorio** en el menú de la parte superior derecha de la página.

<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitNewRep01.png' width="40%">

2. Definir el nombre del repositorio, una descripción, si es público y una licencia si es que se desea proteger su contenido.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitNewRep02.png' width="50%"> 
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/licencias.png' width="35%">

## Configurar el proyecto como *gituhub pages*


1. Ir a la pestaña de código  (**code**) y seleccionar la opción de crear un nuevo archivo (**create new file**). La opción que permite configurar el sitio se verá más adelante (**settings**). Ya terminado el proyecto se puede descargar completamente usando la opción **clone or download** que permite descargar el proyecto completo en un **.zip** o descargar el repositorio por línea de comandos.

<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode01.png' width="65%">

2. Al crear el archivo, según se ve en la imagen se debe crear la carpeta **docs**, en este caso como se desea un archivo **index.html**, se escribe lo marcado en el recuadro. Note que se crea una carpeta al poner la diagonal.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode02.png' width="45%">

3. Se debe escribir el código según se desee, en la imagen se muestra un ejemplo básico.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode03.png' width="65%">

4. Para guardar el archivo, irse al final de la página. Para agregar el archivo se debe escribir un *commit*, esto es un mensaje que describe el detalla de la actualización. Si no se desea escribir nada, se puede dejar la opción que aparece por default. Es importante que todo se escriba en el *master*, pues es lo que aparecerá visible del proyecto. Se pueden crear otros hilos cuando se trabaja en equipo o por partes. 
El botón **commit file** permite subir el archivo.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode04.png' width="40%">

5. Después de subir el archivo, debe asegurarse que se escribió en el *master*. El archivo se puede modificar usando la opción de editar que se marca en la parte derecha,... Es importante que navegue en las otras opciones.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode03a.png' width="65%">


6. Hasta este punto la página no está configurada, si se desea accesar a ella aparecerá como no encontrada. 
La url que se genera es: **usuario**.github.io/**proyecto**.  Donde **usuario** es el nombre del usuario en el github, y proyecto en este ejemplo es **webdev**
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode05.png' width="65%">


7. Ahora se configurará el proyecto para funcionar como **github pages**. Ir al menú **Settings**.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode07.png' width="65%">


8. Ubicar la opcion **Github Pages** dentro de la página. Enseguida aparece la opción **source** que indica la ruta donde se tomarán las páginas para ser publicadas. La opción **master branch** permite usar el hilo maestro para hacer las publicaciones.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode08.png' width="65%">


y después de aplicarlo generará algo como lo siguiente:
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode08a.png' width="65%">


9. En nuestro caso, se meterán las páginas en la carpeta **docs**, como se muestra en la siguiente imagen.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode09.png' width="65%">

Después de hacerlo, se podrá ver el index creado en los pasos anteriores. Así mismo se podrá accesar a las carpetas y archivos creados dentro de docs.
<img src='https://github.com/moiseserg/webdev/blob/master/docs/images/gitCode09a.png' width="65%">

10. Lo que queda es subir los archivos de su proyecto.


### Revisar las siguientes ligas para más detalles:
* [páginas para usuarios y proyectos](https://help.github.com/articles/user-organization-and-project-pages/)

* [configurando github para publicar páginas](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)



La información de este  documento es un formato llamado markdown que se usa para editar de manera fácil páginas denominadas *wikis*


You can use the [editor on GitHub](https://github.com/moiseserg/webdev/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/moiseserg/webdev/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
