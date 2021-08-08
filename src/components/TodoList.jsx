import React from 'react';
import {
    HStack,
    VStack,
    Text,
    IconButton,
    StackDivider,
    Spacer,
    Badge,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const TodoList = ({ todos, deleteTodo }) => {

    if (!todos.length) {
        return (
            <Badge colorScheme='red' p='4' m='4' borderRadius='lg'>
                ¡No tenes tareas pendientes!
            </Badge>
        );
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor='gray.500'
            borderWidth='2px'
            p={4}
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems='stretch'
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton
                        icon={<DeleteIcon />}
                        onClick={() => deleteTodo(todo.id)}
                    />
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList
