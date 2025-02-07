// actions.ts
import axios from 'axios';
import { Dispatch } from 'redux';
import { decode } from 'html-entities';
import { shuffleArray } from './components/Question/utils';
// Configuración global de Axios para CORS
axios.defaults.withCredentials = false;
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
const BASE_URL = import.meta.env.VITE_API_URL;


export const fetchQuestions = () => {
    return async (dispatch: Dispatch) => {
        try {
        const response = await axios.get(BASE_URL, {
            params: {
            amount: 10,            
            },
            // Usar proxy para desarrollo
            baseURL: import.meta.env.NODE_ENV === 'development' 
            ? 'https://cors-anywhere.herokuapp.com/' 
            : undefined
        });

        if (response.data.response_code !== 0) {
            throw new Error(`API Error Code: ${response.data.response_code}`);
        }
        //funcion para limpiar texto con codificacion
        const decoded = (text: string) => decode(text).trim();
        
        const processedQuestions = response.data.results.map((question: any) => ({
            category: decoded(question.category),
            type: decoded(question.type),
            difficulty: decoded(question.difficulty),
            question: decoded(question.question),
            correct_answer: decoded(question.correct_answer),
            answers: shuffleArray([
            ...question.incorrect_answers.map((a: string) => decoded(a)),
            decoded(question.correct_answer)
            ])
        }));

        dispatch({
            type: 'FETCH_QUESTIONS',
            payload: {
            questions: processedQuestions,
            perfectScore: processedQuestions.reduce((acc: number, q: any) => 
                acc + (q.type === 'multiple' ? 10 : 5), 0)
            }
        });

        } catch (error) {
        console.error('Error:', error);
        dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching questions' });
        }
    };
};
