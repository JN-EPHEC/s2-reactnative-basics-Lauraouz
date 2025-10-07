

import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import TodoItem from "../../components/TodoItem";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>📝 My Todo List</Text>
        <TodoItem text="✅ Learn React Native" />
        <TodoItem text="🎨 Build a static UI" />
        <TodoItem text="🧠 Practice with StyleSheet" />
        <TodoItem text="🚀 Understand props and components" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

