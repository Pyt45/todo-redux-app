import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { removeTodo } from '../../features/todos/todosSlice';

const TodoListDiteals = () => {
    const todos = useAppSelector(state => state.todos.todos);
    const dispatch = useAppDispatch();
    const route = useRouter();
    const todo = todos.find(e => e.id == Number(route.query.id));

    const deleteTodo = () => {
        if (todo)
            dispatch(removeTodo(Number(route.query.id)));
        route.push('/todos');
    } 

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <Link href='/todos/'>
                <h1 className="cursor-pointer text-2xl mb-6 text-green-400">All Tasks</h1>            
            </Link>
            <div className="text-white w-72 h-9 bg-green-400 mb-5 rounded-lg">
                <h2 className="mt-1 text-center">{todo && todo.title}</h2>
            </div>
            <div className="text-white w-72 h-9 bg-green-400 mb-5 rounded-lg">
                <h2 className="mt-1 text-center">{todo && todo.body}</h2>
            </div>
            <div className="text-white w-72 h-9 bg-green-400 mb-5 rounded-lg">
                <h2 className="mt-1 text-center">completed: {todo && JSON.stringify(todo.completed)}</h2>
            </div>
            <button onClick={deleteTodo} className="bg-green-400 text-white w-28 rounded-lg transition duration-500 ease-in-out hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110">remove</button>
        </div>
    );
};

export default TodoListDiteals;