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


**Instalar axios react-redux redux redux-thunk react-router-dom**
Antes de esto debí actualizar react y react-dom ya que react-redux no es compatible con la versión 17 de react que vino preinstalada en este challenge.

```bash
npm install react@18 react-dom@18
```

Luego, instalar los tipos de React y otros paquetes necesarios:

```bash
npm install @types/react@18.3.1 @types/react-dom@18.3.1 axios react-redux redux redux-thunk @reduxjs/toolkit html-entities react-router-dom
```

Logica de Question:
Explicación de la lógica de Question:
* Se obtiene la pregunta y las respuestas de la API.
* Se mezclan las respuestas.
* Se muestra la pregunta y las posibles respuestas.
* Se selecciona una respuesta.
* Se muestra si la respuesta es correcta o incorrecta.
* Se calcula el puntaje.
* Se muestra el puntaje obtenido al final del juego.
* Se muestra el porcentaje de respuestas correctas.
* Se muestra el botón para jugar de nuevo.
* Se muestra el botón para ir a la pantalla de resultados.
* Se muestra el botón para ir a la pantalla de inicio.
* Se muestra el botón para ir a la pantalla de la siguiente pregunta.
* Se muestra el botón para ir a la pantalla de la pregunta anterior.

Logica de Results:

Explicación de la lógica de Results:
* Se muestra el puntaje obtenido al final del juego.
* Se muestra el porcentaje de respuestas correctas.
* Se muestra el botón para jugar de nuevo.
* Se muestra el botón para ir a la pantalla de inicio.
* Se muestra el botón para ir a la pantalla de la pregunta anterior.
* Se muestra el botón para ir a la pantalla de la siguiente pregunta.
* Se muestra el botón para ir a la pantalla de resultados.

**Crear el archivo App.scss**

```scss
// Container
.container {
  width: 100%;
  max-width: 480px;
}

// Header
.header {
  h1 {
    font-weight: 800;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 6px;
  }

  h3 {
    font-weight: 300;
    font-size: 1.25rem;
    margin: 0;
  }
}

.question {
  margin-top: 20px;
}

.question__title {
  font-size: 24px;
  margin-bottom: 20px;
}

.question__answers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.question__answer {
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.question__answer--selected {
  background-color: #f0f0f0;
}

.question__answer--correct {
  background-color: #d4edda;
}

.question__answer--incorrect {
  background-color: #f8d7da;
}

.question__button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.results {
  margin-top: 20px;
}

.results__title {
  font-size: 24px;
  margin-bottom: 20px;
}

.results__score {
  font-size: 20px;
  margin-bottom: 10px;
}

.results__percentage {
  font-size: 20px;
  margin-bottom: 10px;
}

.results__button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
``` 

**Crear el archivo App.tsx**

```typescript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './components/Question';
import Results from './components/Results';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Question} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
};

export default App;
``` 

**Crear el archivo index.tsx**

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

**Crear el archivo react-app-env.d.ts**

```typescript
/// <reference types="react-scripts" />
```

**Crear el archivo Question.tsx**

```typescript
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchQuestions } from '../../actions';
import { RootState } from '../../reducers';
import { QuestionType } from './types';
import { shuffleArray } from './utils';


const Question: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const questions = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const question = questions[questionNumber];
    if (answer === question.correct_answer) {
      setScore(score + 5);
    }
  };

  const handleNextQuestion = () => {
    if (questionNumber < 9) {
      setQuestionNumber(questionNumber + 1);
      setSelectedAnswer('');
    } else {
      const percentage = (score / 50) * 100;
      setPercentage(percentage);
      history.push('/results');
    }
  };

  const handlePlayAgain = () => {
    setQuestionNumber(0);
    setSelectedAnswer('');
    setScore(0);
    setPercentage(0);
    dispatch(fetchQuestions());
    history.push('/');
  };

  return (
    <div className="container">
      {questions.length > 0 && questionNumber < 10 && (
        <div className="question">
          <h2 className="question__title">{questions[questionNumber].question}</h2>
          <div className="question__answers">
            {shuffleArray([...questions[questionNumber].incorrect_answers, questions[questionNumber].correct_answer]).map((answer, index) => (
              <div
                key={index}
                className={`question__answer ${selectedAnswer === answer ? 'question__answer--selected' : ''} ${answer === questions[questionNumber].correct_answer ? 'question__answer--correct' : ''} ${selectedAnswer && selectedAnswer !== answer && answer === questions[questionNumber].correct_answer ? 'question__answer--incorrect' : ''}`}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
          <button className="question__button" onClick={handleNextQuestion} disabled={!selectedAnswer}>Next question</button>
        </div>
      )}
    </div>
  );
};  

export default Question;

```

**Crear el archivo Results.tsx**

```typescript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../reducers';
import { fetchQuestions } from '../../actions';

const Results: React.FC = () => {
  const score = useSelector((state: RootState) => state.score);
  const percentage = useSelector((state: RootState) => state.percentage);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePlayAgain = () => {
    dispatch(fetchQuestions());
    history.push('/');
  };

  return (
    <div className="container">
      <div className="results">
        <h2 className="results__title">Results</h2>
        <p className="results__score">Score: {score}</p>
        <p className="results__percentage">Percentage: {percentage}%</p>
        <button className="results__button" onClick={handlePlayAgain}>Play again</button>
      </div>
    </div>
  );
};

export default Results;
```

**Crear el archivo QuestionTypes.ts**

```typescript  
export type QuestionType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
```

**Crear el archivo shuffleArray.ts**

```typescript
export const shuffleArray = (array: string[]): string[] => {
  return [...array].sort(() => Math.random() - 0.5);
};
```
**Crear los archivos reducers.ts, actions.ts y index.ts en la carpeta src**

**Crear el archivo actions.ts**

```typescript  
import axios from 'axios';
import { Dispatch } from 'redux';
import { QuestionType } from './components/Question/types';

export const fetchQuestions = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10');
      const questions: QuestionType[] = response.data.results.map((question: any) => ({
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        question: question.question,
        correct_answer: question.correct_answer,
        incorrect_answers: question.incorrect_answers,
      }));
      dispatch({ type: 'FETCH_QUESTIONS', payload: questions });
    } catch (error) {
      console.error(error);
    }
  };
};
```

**Crear el archivo reducers.ts**

```typescript
import { combineReducers } from 'redux';
import { QuestionProps } from './components/Question/types';

type Action = {
    type: string;
    payload: QuestionProps[];
};

const questionsReducer = (state: QuestionProps[] = [], action: Action) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS':
        return action.payload;
        default:
        return state;
    }
};

const scoreReducer = (state: number = 0, action: Action) => {
    switch (action.type) {
        case 'SET_SCORE':
        return action.payload;
        default:
        return state;
    }
};

const percentageReducer = (state: number = 0, action: Action) => {
    switch (action.type) {
        case 'SET_PERCENTAGE':
        return action.payload;
        default:
        return state;
    }
};

export default combineReducers({
    questions: questionsReducer,
    score: scoreReducer,
    percentage: percentageReducer,
});
```

**Crear el archivo index.ts**

```typescript
export * from './QuestionTypes';
export * from './shuffleArray';
```

**Crear el archivo index.ts**

```typescript
export * from './Question';
export * from './Results';
```

** crear file store.ts**

```typescript

