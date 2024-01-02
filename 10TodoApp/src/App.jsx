import { useState, useEffect } from "react";
import { TodoContextProvider } from "./Contexts";
import "./App.css";
import {TodoItem, TodoForm} from "./Components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
  }
  

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((task) => task.id === id ? todo : task ));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  }

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('savedTodos'))
    if(savedData && savedData.length > 0) {
      setTodos(savedData);
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem('savedTodos', JSON.stringify(todos));
  }, [todos])
  
  

  return (
    <TodoContextProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />  
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((prev) => (
                <div key={prev.id}
                className='w-full'
                >
                  <TodoItem todo={prev} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
