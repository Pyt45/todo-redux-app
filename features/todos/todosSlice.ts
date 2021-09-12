import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../../types/Todo';

const todosState: Todo[] = [
    {
        id: 0,
        title: 'breakfast',
        body: 'eat breakfast at 8',
        completed: false
    },
    {
        id: 1,
        title: 'running',
        body: 'running at 9',
        completed: false
    }
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: todosState
    },
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            action.payload.id = state.todos.length + 1;
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => {
                return todo.id != action.payload
            });
        },
    }
});

/*updateTodo: (state, action: PayloadAction<Todo>) => {
    const todo: Todo = state.todos.find(e => e.id == action.payload.id);
    
}*/
export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;