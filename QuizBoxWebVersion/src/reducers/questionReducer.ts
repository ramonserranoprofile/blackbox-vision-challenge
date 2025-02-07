// reducers/questionsReducer.ts

interface QuestionState {
    questions: any[];
    currentIndex: number;
    score: number;
    perfectScore: number;
    loading: boolean;
    error: string | null;
}

const initialState: QuestionState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    perfectScore: 0,
    loading: false,
    error: null
};

export const questionsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FETCH_QUESTIONS':
        return {
            ...state,
            questions: action.payload.questions,
            perfectScore: action.payload.perfectScore,
            loading: false
        };
        case 'ANSWER_QUESTION':
        return {
            ...state,
            score: action.payload.isCorrect ? 
            state.score + (action.payload.questionType === 'multiple' ? 10 : 5) : 
            state.score,
            currentIndex: state.currentIndex + 1
        };
        case 'FETCH_ERROR':
        return { ...state, error: 'Error fetching questions', loading: false };
        default:
        return state;
    }
};