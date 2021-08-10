import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton, useColorMode, Heading, HStack } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaUser } from '@react-icons/all-files/fa/FaUser';
import { FaRegUser } from '@react-icons/all-files/fa/FaRegUser';
import { db } from '../firebase_config';

const App = () => {

  const [todos, setTodos] = useState([]);



  //Obtener todo
  function getTodos() {
    db.collection("todos").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }

  // Delete todo
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  useEffect(() => { getTodos() }, []);

  // Add todo
  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <HStack spacing={3} alignSelf='flex-end'>
        <IconButton
          icon={colorMode === 'light' ? <FaRegUser /> : <FaUser />}
          isRound='true'
          size='lg'
          alignSelf='flex-end'
        />
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          isRound='true'
          size='lg'
          alignSelf='flex-end'
          me='1'
          onClick={toggleColorMode}
        />
      </HStack>
      <Heading
        mb='8'
        fontWeight='extrabold'
        size='2xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
      >
        lista de tareas
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  )
}

export default App