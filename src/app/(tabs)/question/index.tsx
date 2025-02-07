// app/(tabs)/question/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../../actions/index';
import { RootState } from '../../../store/index';
import { QuestionProps } from '../../../types/types'; // Asegúrate de tener esta ruta
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOutDown } from 'react-native-reanimated';

const QuestionScreen = () => {    
    const dispatch = useDispatch();
    const router = useRouter();
    const { questions, currentIndex, score, perfectScore, loading, error } = useSelector((state: RootState) => state.questions);
    
    useEffect(() => {
        dispatch(fetchQuestions() as any);
    }, [dispatch]);
    
    const handleAnswer = (answer: string) => {
        if (!questions || currentIndex >= questions.length) return;
        
        const currentQuestion = questions[currentIndex];
        const isCorrect = answer === currentQuestion.correct_answer;
        
        dispatch({
        type: 'ANSWER_QUESTION',
        payload: { isCorrect, questionType: currentQuestion.type },
        });


        // Verify after update state
        const nextIndex = currentIndex + 1;
        if (nextIndex >= questions.length) {
            router.push({
                pathname: '/(tabs)/results',
                params: { 
                    score: score + (isCorrect ? getScoreValue(questions[currentIndex]?.type) : 0),
                    perfectScore: perfectScore + getScoreValue(questions[currentIndex]?.type)
                }
            });
        }
    };
    const getScoreValue = (type: string) => {
        switch (type) {
            case 'multiple':
                return 10;            
            case 'boolean':
                return 5;
            default:
                return 0;
        }
    };

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>Error: {error}</Text>;
    if (!questions || questions.length === 0) return <Text>No hay preguntas disponibles</Text>;
    if (currentIndex >= questions.length) return <Text>Cargando siguiente pregunta...</Text> 

    const currentQuestion = questions[currentIndex];

    return (
        <Animated.View 
            entering={FadeIn.duration(400)}
            exiting={FadeOutDown.duration(300)}
            style={styles.container}
        >
            <Text style={styles.header}>Question {currentIndex + 1} of {questions.length}</Text>
            <Text style={styles.category}>Category: {questions[currentIndex]?.category}</Text>
            <Text style={styles.difficulty}>Difficulty: {questions[currentIndex]?.difficulty}</Text>                
            <Text style={styles.question}>{currentQuestion.question}</Text>
            {currentQuestion.answers.map((answer: string, index: any) => (
                <View key={index} style={styles.button}>
                    <Button
                        key={`${index}-${answer}`}
                        title={answer}
                        onPress={() => handleAnswer(answer)}
                    />
                </View>
            ))}        
            <Text style={styles.score}>Current Score: {score} / {perfectScore}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 25,
        alignItems: 'center',
    },
    category: {
        alignItems: "center",
        textAlign: 'center',
        fontSize: 16,
        color: '#6c757d',
    },
    difficulty: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 16,                
    },
    question: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
        marginVertical: 25,
        color: '#343a40',
    },
    score: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 26,
        color: '#28a745',
        fontWeight: 'bold',
    },
    button: {
        display: 'flex',
        alignItems: 'center',       
        textAlign: 'center',
        borderRadius: 5,
        flexDirection: 'row',        
        justifyContent: 'center',
        marginTop: 5,
    },
    
});
export default QuestionScreen;