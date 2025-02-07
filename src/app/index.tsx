// src/app/index.tsx


// to redirect automatically 
// export default function IndexScreen() {
//   return <Redirect href="/(tabs)/question" />;
// } 


// srv/app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { router, Redirect } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Quiz App!</Text>
      <Button 
        title="Start Quiz" 
        onPress={() => router.push('/(tabs)/question')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});