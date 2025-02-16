// src/app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router, Redirect } from 'expo-router';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HorizontalLine } from "@/components/HorizontalLine";
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Welcome to the QuizBox App!</ThemedText>
      <ThemedText>Ready to start the quiz?</ThemedText>
      <HorizontalLine />
      <View style={styles.button}>
        <Button
          title="Start Quiz"
          onPress={() => router.push("/(tabs)/question")}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"       
  },
  button: {
    width: "95%",
    margin: 10,    
    justifyContent: "center",    
    textAlign: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
});