import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import Link from 'next/link';

const Add = () => {
    const todos = useAppSelector(state => state.todos.todos);
    const dispatch = useAppDispatch();;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex flex-col items-center justify-center mt-8">
            <form>
                <div className="flex flex-col">
                    <input type="text" className="border border-green-400 shadow-2xl mb-8 rounded-lg p-4 ring-2 focus:outline-none placeholder-opacity-50 placeholder-green-400" placeholder="title"/>
                    <input type="text" className="border border-green-400 shadow-2xl mb-8 rounded-lg p-4 ring-2 focus:outline-none placeholder-opacity-50 placeholder-green-400" placeholder="details"/>
                    <button className="bg-green-400 text-white px-8 py-1 rounded-lg mx-auto transition duration-500 ease-in-out hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110">
                        Add
                    </button>
                </div>
            </form>
            <Link href='/todos/'>
                <a className="mt-2 text-green-400 mx-auto cursor-pointer">
                    back
                </a>
            </Link>
        </div>
    );
};

export default Add;