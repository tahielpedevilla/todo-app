import React from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddIcon } from '@chakra-ui/icons';

const AddTodo = ({ addTodo }) => {

    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'Agrega tu tarea',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }

        const todo = {
            id: nanoid(),
            body: content,
        };

        addTodo(todo);
        setContent('');
    }

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='2'>
                <Input
                    variant='filled'
                    placeholder='Tarea'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button colorScheme='blue' px='8' type='submit'>
                    <AddIcon />
                </Button>
            </HStack>
        </form>
    )
}

export default AddTodo
