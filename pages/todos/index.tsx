import React from 'react';
import { useAppSelector } from '../../App/hooks';
import Link from 'next/link';

const HomeTodos = () => {
    const todos = useAppSelector(state => state.todos.todos);
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <div className="flex justify-between">
                <h1 className="text-2xl mb-6 text-green-400">All Tasks</h1>
                <div className="text-white bg-green-400 w-28 h-9 rounded-lg ml-20 cursor-pointer">
                    <Link href='/todos/add'>
                        <h2 className="text-center mt-1">Add</h2>
                    </Link>
                </div>
            </div>
            { todos && todos.map(todo => (
                <div className="text-white w-72 h-9 bg-green-400 mb-5 rounded-lg cursor-pointer" key={todo.id}>
                    <Link  as={`/todos/${todo.id}`} href="/todos/[id]">
                        <h2 className="mt-1 text-center">{todo.title}</h2>
                    </Link>
                </div>
            )) }
        </div>
    );
};

export default HomeTodos;