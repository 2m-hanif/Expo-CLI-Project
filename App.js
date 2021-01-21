import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem.js";
import AddTodo from "./Components/AddTodo";
import { View, FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#777",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, KEY: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  return (
    <View>
      <Header />
      <View style={styles.content}>
        <AddTodo
         handleSubmit={handleSubmit} 
         />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};


export default App;
