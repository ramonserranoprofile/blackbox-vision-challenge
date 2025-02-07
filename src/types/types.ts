// srv/types/types.ts


export interface QuestionProps {
    category: string;
    type: "multiple" | "boolean";
    difficulty: "easy" | "medium" | "hard";
    question: string;
    correct_answer: string;
    answers: string[]; // Changed
}

export interface ResultsProps {
    score: number;
    perfectScore: number;
    askedQuestions?: number; // Optional 
    totalQuestions?: number; // Optional
}

export type QuestionActionTypes = 
    | { type: 'FETCH_QUESTIONS'; payload: { questions: QuestionProps[]; perfectScore: number } }
    | { type: 'ANSWER_QUESTION'; payload: { isCorrect: boolean; questionType: string } }
    | { type: 'FETCH_ERROR'; payload: string };