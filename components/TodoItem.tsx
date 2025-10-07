import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface TodoItemProps {
  text: string;
}


const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default TodoItem;
