
import "@/global.css";
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemedView style={styles.header}>
        <Image 
          source={require('../assets/logo.png')}
          resizeMode="contain"
          style={styles.logo}          
        />        
        <ThemedText style={styles.title}>Let's get this party started</ThemedText>
      </ThemedView>
      
      
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen 
          name="(tabs)" 
          options={{ headerShown: false }}          
        />
        <Stack.Screen name="+not-found" options={{}} />
      </Stack>
    </Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#424242",
  },
  logo: {
    width: 200,
    height: 60,
    
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#aacccc"
  },
});