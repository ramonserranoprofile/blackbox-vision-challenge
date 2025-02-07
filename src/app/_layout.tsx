
import "@/global.css";
import React from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Let's get this party started</Text>
      </View>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="question"
            options={{ title: 'Pregunta', headerShown: false }}
          />
          <Stack.Screen 
            name="results"
            options={{ title: 'Resultados', headerShown: false }}
          />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});