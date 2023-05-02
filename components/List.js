import React, { useState } from 'react'
import { StyleSheet, Text, FlatList, TextInput, Button, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import CheckBox from './Checkbox';
import { MaterialIcons } from '@expo/vector-icons';

const List = () => {
  const [todos, setTodos] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [todoText, setTodoText] = useState('');

  const submitTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText('');
    }
  };
  
  const deleteHandler = index => {
    const newCompletedItems = [...completedItems];
    newCompletedItems.splice(index, 1);
    setCompletedItems(newCompletedItems);
  };

  const toggleCompleted = index => {
    const newTodoItems = [...todos];
    const updatedItem = { ...newTodoItems[index], completed: true };
    newTodoItems.splice(index, 1);
    setTodos(newTodoItems);
    setCompletedItems([...completedItems, updatedItem]);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.todoItem}>

        <TouchableOpacity onPress={() => toggleCompleted(index)} >

          <Text style={[styles.todoText, item.completed && styles.completedText]}>
            <CheckBox />
            {item.text}
          </Text>
        </TouchableOpacity>

        {item.completed && (
          <TouchableOpacity onPress={() => deleteHandler(index)}>
            <MaterialIcons size={25} color='black' name='delete' />
          </TouchableOpacity>
        )}
      </View>
    );
  };



  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>

        <View>

          <Text style={styles.heading}>List </Text>

          <TextInput
            style={styles.input}
            placeholder=""
            value={todoText}
            onChangeText={text => setTodoText(text)}
          />
          <TouchableOpacity style={styles.button} onPress={submitTodo}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>

          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>

        <Text style={styles.heading}>Completed List </Text>

        <FlatList
          data={completedItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />



      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#0A4D68',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10
  },
  todoText: {
    fontSize: 18
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#B04759'
  },

});
export default List;