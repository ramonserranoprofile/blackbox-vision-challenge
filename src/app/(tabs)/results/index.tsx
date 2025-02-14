// app/results/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { resetQuiz } from '../../../actions'
import { useDispatch } from 'react-redux';
import Animated, { FadeIn, FadeOutDown } from 'react-native-reanimated';

const ResultsScreen = () => {    
    const params = useLocalSearchParams();
    const dispatch = useDispatch()

    const score = parseInt(params.score as string) || 0;
    const perfectScore = parseInt(params.perfectScore as string) || 0;
    
    const restartGame = () => {
        dispatch(resetQuiz()); // 🔥 Reset Redux state  before redirect
        router.push('/(tabs)/question'); 
    };
    const HorizontalLine = () => (
    <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 10 }} />
    );
    
    return (
        <Animated.View 
                    entering={FadeIn.duration(400)}
                    exiting={FadeOutDown.duration(300)}
                    style={styles.container}
                >                      
            <View style={styles.scoreContainer}>
                <Text style={styles.title}>¡Game Finished!</Text>
                <Text style={styles.scoreText}>Score: {score}</Text>
                <Text style={styles.maxScore}>Top score: {perfectScore}</Text>
                <HorizontalLine />
                <View style={styles.button}>
                    <Button  title="¡Play Again!" onPress={restartGame} />
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#25292e",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 30,
        color: "red",
    },
    scoreContainer: {
        backgroundColor: "#cccccc",
        padding: 20,
        width: "100%",
        borderRadius: 10,
        marginBottom: 30,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        elevation: 3, // Para Android
    },
    scoreText: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        color: "#2196F3",
    },
    maxScore: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 20,
        color: "#28a745",
    },
    button: {
        display: "flex",
        width: "auto",
        height: 40,    
        fontWeight: "bold",    
        marginVertical: 5,
        color: "#25292e",
        textAlign: "center",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 5,
    },
});

export default ResultsScreen;