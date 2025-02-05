clic en el botón "Fork" para crear una copia del repositorio en mi cuenta 

git clone https://github.com/ramonserranoprofile/blackbox-vision-challenge.git

npm install

npm run dev | npm run build


**Requirements**
Desarrollar un juego llamado QuizBox Vision que consiste en 10 preguntas las cuales pueden ser verdadero/falso o multiple choice.

Por cada pregunta, es necesario mostrar los siguientes campos:
* Pregunta
* Categoría
* Dificultad
* Posibles respuestas
* Al seleccionar la respuesta, muestra si la misma fue correcta o no. No es necesario mostrar cuál era la respuesta correcta.

Al finalizar el juego, se muestra el puntaje obtenido. El mismo se calcula de la siguiente manera: 
* Respuesta correcta (verdadero/falso): *5 puntos*
* Respuesta correcta (multiple choice): *10 puntos*
* Respuesta incorrecta: *0 puntos*
* Todos los datos necesarios para el juego, están en [la siguiente API](https://opentdb.com/api.php?amount=10)
* El juego puede realizarse en React web o React Native.
* Cada pregunta debe presentarse en una pantalla distinta de la aplicación.
* El proyecto debe ser subido a un repositorio de GitHub y se debe enviar el link del repositorio.
* El proyecto debe ser subido a un repositorio de GitHub y se debe enviar el link del repositorio.
* El proyecto debe ser subido a un repositorio de GitHub y se debe enviar el link del repositorio.
* El proyecto debe ser subido a un repositorio de GitHub y se debe enviar el link del repositorio.

**Extra points**
* Utilizar Redux para manejar el estado de la aplicación.
* Utilizar React Navigation para manejar la navegación entre las pantallas.
* Utilizar React Hooks.
* Utilizar TypeScript.
* Utilizar Styled Components.
* Utilizar ESLint y Prettier.
* Utilizar Jest para realizar tests unitarios.
* Utilizar Cypress para realizar tests de integración.
* Utilizar Docker para el despliegue de la aplicación.
* Utilizar GitHub Actions para la integración continua.
* Utilizar Storybook para documentar los componentes.
* Utilizar Firebase para almacenar los datos del juego.
* Utilizar una base de datos en tiempo real para almacenar los datos del juego.

**Time to complete**
* 1 week

**Evaluation criteria**
* Code quality
* Code organization
* Use of best practices
* Use of the technologies mentioned in the requirements

**Submission**
* Send the link of the repository to the email address of the person who contacted you.

**Questions**
* If you have any questions, please contact the person who sent you this challenge.

**Good luck!**


Para este juego de trivia necesitaré una API que me proporcione preguntas y respuestas. La API que utilizaré es [la siguiente API](https://opentdb.com/api.php?amount=10).

1.- Obtiene 10 preguntas de la API al azar haciendo fetch a la API que contiene la data con las preguntas y respuestas.

2.- Luego muestra una pregunta por pantalla

3.- Permite seleccionar  la/las respuestas.

4.- Muestra retroalimentación inmediata / feedback si la respuesta es correcta o incorrecta. (no requerido).

5.- Calcula el puntaje según el tipo de pregunta.

6.- Muestra el resultado final al terminar.



```markdown
BLACKBOX-VISION-CHALLENGE/
│── src/
│   ├── components/
│   │   ├── Question.tsx
│   │   ├── Results.tsx
│   ├── styles/
│   │   ├── App.css
│   ├── types/
│   │   ├── QuestionTypes.ts
│   ├── utils/
│   │   ├── shuffleArray.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│── public/
│── package.json
│── tsconfig.json
│── README.md
```

**Crear componentes Question y Results**
Question y Results son componentes que se encargan de mostrar la pregunta, Results se encarga de mostrar el puntaje obtenido al final del juego. Se utilizó Plop para crear los componentes. Se modificó el archivo plopfile.js para que me cree los archivos de tipos y utils en la carpeta correcta. Adicionalmente se modificó la exportación a ES6 de los archivos creados por plopfile.js.

```bash
# primero se creó el componente Question
npx plop component
? Destination path src/components
? Component name Question
✔  ++ \src\components\Question\Question.tsx
✔  ++ \src\components\Question\index.ts
✔  ++ \src\components\Question\Question.module.scss
✔  ++ \src\components\Question\types.ts
✔  ++ \src\components\Question\utils.ts

# luego cree el componente Results
npx plop component
? Destination path src/components
? Component name Results
✔  ++ \src\components\Results\Results.tsx                                                                                      
✔  ++ \src\components\Results\index.ts
✔  ++ \src\components\Results\Results.module.scss
✔  ++ \src\components\Results\types.ts 
# //(este se modifico para devolver el tipo de dato correcto respecto del scoring del juego)
✔  ++ \src\components\Results\utils.ts 
# //(este se modifico para hacer el calculo de porcentaje de respuestas correctas)
```  
<!-- # // En el caso de Question: Se deben definir las datos asi: * Categoría * tipo de pregunta * Dificultad * Pregunta * Posibles respuestas => * correct_answer (mostrar si es correcta o no al elegir la respuesta) y el score de incorrect_answers  -->

**Crear types QuestionTypes** (Definir los tipos de datos que se utilizarán en el juego).
**Crear utils shuffleArray** (Función que se encarga de mezclar las respuestas de las preguntas).


```typescript
Se agrego la creación automática de los archivos de types y utils en el archivo plopfile.js


**Instalar axios**

```bash
npm install axios
```

**Instalar react-router-dom**

```bash
npm install react-router-dom
```

**Instalar react-redux**

```bash
npm install react-redux
```

**Instalar redux**

```bash
npm install redux
```

**Instalar redux-thunk**

```bash
npm install redux-thunk
```

