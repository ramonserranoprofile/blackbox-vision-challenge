// components/Question.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../actions';
import { RootState } from '../../store';
import styles from "./Question.module.scss";


const Question: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        questions,
        currentIndex,
        score,
        perfectScore,
        loading,
        error
    } = useSelector((state: RootState) => state.questions);

    useEffect(() => {
        dispatch(fetchQuestions() as any);
    }, [dispatch]);

    const handleAnswer = (answer: string) => {
        if (!questions[currentIndex]) return;

        const isCorrect = answer === questions[currentIndex].correct_answer;
        
        dispatch({
        type: 'ANSWER_QUESTION',
        payload: {
            isCorrect,
            questionType: questions[currentIndex].type
        }
        });

        if (currentIndex + 1 >= questions.length) {
        navigate('/results', { state: { score, perfectScore } });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!questions.length) return null;

    const currentQuestion = questions[currentIndex];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Question {currentIndex + 1} of {questions.length}</h2>
                <div className={styles.meta}>
                    <span>Category: {currentQuestion.category}</span>
                    <span>Difficulty: {currentQuestion.difficulty}</span>
                </div>
            </div>
            
            <h3 className={styles.title}>{currentQuestion.question}</h3>
            
            <div className="answers-grid">
                {currentQuestion.answers.map((answer: string, index: number) => (
                <button
                    key={index}                    
                    onClick={() => handleAnswer(answer)}
                    className={styles.button}
                >
                    {answer}
                </button>
                ))}
            </div>
            
            <div className="score-display">
                Current Score: {score} / {perfectScore}
            </div>
            </div>
        );
};

export default Question;