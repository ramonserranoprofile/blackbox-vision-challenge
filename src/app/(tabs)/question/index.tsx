// app/(tabs)/question/index.tsx
import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { fetchQuestions } from "@/actions/index";
import { RootState } from "@/store/index";
import { useRouter } from "expo-router";
import Animated, { FadeIn, FadeOutDown } from "react-native-reanimated";

const QuestionScreen = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch();

  const router = useRouter();
  const { questions, currentIndex, score, perfectScore, loading, error } =
    useSelector((state: RootState) => state.questions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (questions.length > 0 && currentIndex >= questions.length) {
      router.push({
        pathname: "/results",
        params: {
          score,
          perfectScore,
        },
      });
    }
  }, [currentIndex, questions.length, score, perfectScore, router]);

  const handleAnswer = (answer: string) => {
    if (!questions || currentIndex >= questions.length) return;

    const currentQuestion = questions[currentIndex];
    const isCorrect = answer === currentQuestion.correct_answer;

    dispatch({
      type: "ANSWER_QUESTION",
      payload: { isCorrect, questionType: currentQuestion.type },
    });
  };

  // if (loading)
  //   return <ActivityIndicator size="large" style={styles.indicator} />;
  // if (error) return <Text>Error: {error}</Text>;
  // if (!questions || questions.length === 0)
  //   return <ActivityIndicator size="large" />;
  

  // const currentQuestion = questions[currentIndex];

  if (loading || !questions?.length)
    return <ActivityIndicator size="large" style={styles.indicator} />;  
  if (currentIndex >= questions.length)
      return <ActivityIndicator size="large" style={styles.indicator} />
  if (error) return <Text style={styles.error}>Error: {error}</Text>;
  const currentQuestion = questions[currentIndex];

  return (
    <Animated.View
      entering={FadeIn.duration(400)}
      exiting={FadeOutDown.duration(300)}
      style={styles.container}
    >
      <Text style={styles.header}>
        Question {currentIndex + 1} of {questions.length}
      </Text>
      <Text style={styles.category}>
        Category: {questions[currentIndex]?.category}
      </Text>
      <Text style={styles.difficulty}>
        Difficulty: {questions[currentIndex]?.difficulty}
      </Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      <Animated.View
        entering={FadeIn.duration(400)}
        exiting={FadeOutDown.duration(300)}
        style={styles.gridContainer}
      >
        {currentQuestion.answers.map((answer: string, index: number) => (
          <View key={index} style={styles.buttonWrapper}>
            <Button
              key={`${index}-${answer}`}
              title={answer}
              onPress={() => handleAnswer(answer)}
            />
          </View>
        ))}
      </Animated.View>
      <View
        style={{
          flex: 0,
          alignContent: "center",
          justifyContent: "center",
          marginVertical: 20,
          
        }}
      >
        <Text style={styles.score}>
          Current Score: {score} / {perfectScore}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#25292e" },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4ec9b0",
    textAlign: "center",
    marginBottom: 15,
  },
  category: { fontSize: 16, color: "#37a3f0", textAlign: "center" },
  difficulty: { fontSize: 16, color: "#E2C08D", textAlign: "center" },
  question: {
    height: '15%',
    fontSize: 20,
    color: "#6161b0",
    textAlign: "center",
    marginVertical: 20,
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    height: '20%',
    color: "#28a745",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 20,
  },
  error: { fontSize: 18, color: "red", textAlign: "center" },
  indicator: { flex: 1, justifyContent: "center", alignItems: "center" },
  gridContainer: {
    height: '20%',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonWrapper: {
    width: "100%",
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default QuestionScreen;