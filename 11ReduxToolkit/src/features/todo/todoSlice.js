import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    oldText: "",   //task1
    updationId: ''
}

const todoSlice = createSlice({
    name: 'sliceOfTodo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let task = '';
            if(state.updationId !== '') {
                task = {
                    id: state.updationId,
                    text: action.payload
                }    
                state.todos = state.todos.map((value) => value.id === state.updationId ? task: value);
                state.updationId = ''
            } else {
                task = {
                    id: nanoid(),
                    text: action.payload
                }
                state.todos.push(task);
            }
            console.log(state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((value) => value.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.oldText = action.payload.text;
            state.updationId = action.payload.id;
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, updateList} = todoSlice.actions

export default todoSlice.reducer