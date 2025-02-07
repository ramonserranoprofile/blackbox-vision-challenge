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
                <Button title="¡Play Again!" color="#4CAF50" onPress={restartGame} />
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333'
    },
    scoreContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        elevation: 3 // Para Android
    },
    scoreText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        marginBottom: 10,
        color: '#2196F3'
    },
    maxScore: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#666'
    }
});

export default ResultsScreen;