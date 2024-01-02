import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateList } from '../features/todo/todoSlice'

function AddTodo() {
    const [inputText, setInputText] = useState('');
    const dispatcher = useDispatch()
    const text = useSelector(state => state.oldText);
    const [addBtnText, setAddBtnText] = useState('Add Todo');
    let updationId = useSelector(state => state.updationId)

    useEffect(() => {
      if(updationId !== '') {
        setInputText(text);
        setAddBtnText('Update Todo');
      }
    }, [updationId])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatcher(addTodo(inputText));
        if(updationId !== '')  {
          setInputText('');
          setAddBtnText('Add Todo');
          updationId = ''
        }
        setInputText('');
    }

  return (
    <form  className="space-x-3 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={inputText}
        onChange= {(e) => {
            setInputText(e.target.value);
        }}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {addBtnText}
      </button>
    </form>
  )
}

export default AddTodo