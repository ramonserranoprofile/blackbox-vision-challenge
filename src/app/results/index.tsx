// app/results/index.tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { resetQuiz } from "@/actions/index";
import { useDispatch } from "react-redux";
import Animated, { FadeIn, FadeOutDown } from "react-native-reanimated";
import ConfettiCannon from "react-native-confetti-cannon";
import { HorizontalLine } from "@/components/HorizontalLine";
import { useEffect, useRef } from "react";

const ResultsScreen = () => {
    const params = useLocalSearchParams();
    const dispatch = useDispatch();
    const score = parseInt(params.score as string) || 0;
    const perfectScore = parseInt(params.perfectScore as string) || 0;
    const isPerfect = score === perfectScore;

    const restartGame = () => {
        dispatch(resetQuiz());
        router.push("/(tabs)/question");
    };

    const confettiRef = useRef(null);

    useEffect(() => {
        if (isPerfect && confettiRef.current) {
        confettiRef.current.start();
        }
    }, [isPerfect]);

    return (
        <Animated.View
            entering={FadeIn.duration(400)}
            exiting={FadeOutDown.duration(300)}
            style={styles.container}
        >
            {isPerfect && (
            <ConfettiCannon
                ref={confettiRef}                
                count={300}
                origin={{ x: 40, y: 40 }}
                explosionSpeed={350}
                fallSpeed={3000}
                fadeOut={false}
                />
            )}
            <Text style={styles.title}>
                {isPerfect ? "🌟 Perfect Score! 🌟" : "🎉 Game Finished! 🎉"}
            </Text>
            
            <View style={styles.button}>
                <Button title="¡Play Again!" onPress={restartGame} />
            </View>
            <HorizontalLine />
            <Text style={styles.scoreText}>Score: {score}</Text>
            <Text style={styles.maxScore}>Top Score: {perfectScore}</Text>
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
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFD700",
        textAlign: "center",
        marginVertical: 20,
    },
    scoreContainer: {
        backgroundColor: "#ececec",
        padding: 25,
        borderRadius: 15,
        marginBottom: 30,
        elevation: 4,
    },
    scoreText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4A90E2",
        textAlign: "center",
        marginBottom: 12,
    },
    maxScore: {
        fontSize: 20,
        color: "#32CD32",
        textAlign: "center",
        marginBottom: 15,
    },
    button: { width: "100%", margin: 5, borderRadius: 8, overflow: "hidden" },
});

export default ResultsScreen;
