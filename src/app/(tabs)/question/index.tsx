// app/(tabs)/question/index.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { fetchQuestions } from '../../../actions/index';
import { RootState } from '../../../store/index';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOutDown } from 'react-native-reanimated';

const QuestionScreen = () => { 
    const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
    //const dispatch = useDispatch();
    const router = useRouter();
    const { questions, currentIndex, score, perfectScore, loading, error } = useSelector((state: RootState) => state.questions);
    
    useEffect(() => {
        dispatch(fetchQuestions());
    }, [dispatch]);

    
    useEffect(() => {
        if (questions.length > 0 && currentIndex >= questions.length) {
            router.push({
            pathname: "/(tabs)/results",
            params: {
                score,
                perfectScore,
            },
        });
    }}, [currentIndex, questions.length, score, perfectScore, router]);


    const handleAnswer = (answer: string) => {
        if (!questions || currentIndex >= questions.length) return;
        
        const currentQuestion = questions[currentIndex];
        const isCorrect = answer === currentQuestion.correct_answer;
        
        dispatch({
        type: 'ANSWER_QUESTION',
        payload: { isCorrect, questionType: currentQuestion.type },
        });    
    };

    if (loading) return <ActivityIndicator size="large" style={styles.indicator}/>;
    if (error) return <Text>Error: {error}</Text>;
    if (!questions || questions.length === 0) return <ActivityIndicator size="large" />;
    if (currentIndex >= questions.length) return <Text>Loading next question...</Text>;

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
    backgroundColor: "#25292e",
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 25,
    alignItems: "center",
    color: "#4ec9b0",
    fontWeight: "bold",
  },
  category: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    color: "#37a3f0",
  },
  difficulty: {
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
    color: "#E2C08D",
  },
  question: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 25,
    color: "#6161b0",
  },
  score: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 20,
    fontSize: 26,
    color: "#28a745",
    fontWeight: "bold",
  },
  button: {
    display: "flex",
    width: "100%",
    height: 40,
    fontWeight: "bold",
    marginVertical: 5,    
    textAlign: "center",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 5,
  }, 

  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
});
    
export default QuestionScreen;