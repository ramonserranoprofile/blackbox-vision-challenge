// src/app/index.tsx


// to redirect automatically 
// export default function IndexScreen() {
//   return <Redirect href="/(tabs)/question" />;
// } 


// srv/app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router, Redirect } from 'expo-router';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


const HorizontalLine = () => (
  <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", marginVertical: 10 }} />
)
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Welcome to the QuizBox App!</ThemedText>
      <ThemedText>Ready to start the quiz?</ThemedText>
      <HorizontalLine />
      <Button
        title="Start Quiz"
        onPress={() => router.push("/(tabs)/question")}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});