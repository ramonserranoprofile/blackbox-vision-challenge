import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store'; // Ajusta la ruta según tu estructura
import { Dispatch } from 'redux';
import axios from 'axios';
import { decode } from 'html-entities';
import { shuffleArray } from '../utils/shuffleArray';
import { API_URL } from '@env';

console.log('API URL:', API_URL); // Para debuggear

export const resetQuiz = () => ({
    type: 'RESET_QUIZ'
});


export const fetchQuestions = (): ThunkAction<void, RootState, unknown, Action> => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(API_URL, { params: { amount: 10 } });

            if (response.data.response_code !== 0) {
                throw new Error(`API Error Code: ${response.data.response_code}`);
            }

            const decoded = (text: string) => decode(text).trim();
            const processedQuestions = response.data.results.map((question: any) => ({
                category: decoded(question.category),
                type: decoded(question.type),
                difficulty: decoded(question.difficulty),
                question: decoded(question.question),
                correct_answer: decoded(question.correct_answer),
                answers: shuffleArray([
                    ...question.incorrect_answers.map((a: string) => decoded(a)),
                    decoded(question.correct_answer),
                ]),
            }));

            dispatch({
                type: 'FETCH_QUESTIONS',
                payload: {
                    questions: processedQuestions,
                    perfectScore: processedQuestions.reduce(
                        (acc: number, q: any) => acc + (q.type === 'multiple' ? 10 : 5),
                        0
                    ),
                },
            });
        } catch (error) {
            console.error('Error fetching questions:', error);
            dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching questions' });
        }
    };
};