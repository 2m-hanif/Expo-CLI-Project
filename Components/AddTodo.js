import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

const AddTodo = ({ handleSubmit }) => {
    const [text, setText] = useState('');

    const textChangeHandler = (value) => {
        setText(value);
    }

    return (
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='new Todo...'
                onChangeText={textChangeHandler}
            />
            <Button onPress={() => handleSubmit(text)} title='add todo' color='coral' />
        </View>
    )
}

export default AddTodo
