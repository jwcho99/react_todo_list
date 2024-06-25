import React, { useState, useEffect } from 'react'
import { Todo } from './todoApp'

interface TodoModalProps {
    todo: Todo | null
    onClose: () => void
    onSave: (text: string) => void
}

const TodoModal: React.FC<TodoModalProps> = ({ todo, onClose, onSave }) => {
    const [text, setText] = useState('')

    useEffect(() => {
        if (todo) {
            setText(todo.text)
        }
    }, [todo])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSave(text)
        setText('')
    }

    return (
        <div
            className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'
            id='my-modal'
        >
            <div className='relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white'>
                <div className='mt-3 text-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        {todo ? 'Edit Todo' : 'Add Todo'}
                    </h3>
                    <form onSubmit={handleSubmit} className='mt-2 px-7 py-3'>
                        <input
                            type='text'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Enter todo text'
                            className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
                            autoFocus
                        />
                        <div className='items-center px-4 py-3'>
                            <button
                                id='ok-btn'
                                type='submit'
                                className='px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
                            >
                                Save
                            </button>
                        </div>
                    </form>
                    <div className='items-center px-4 py-3'>
                        <button
                            id='cancel-btn'
                            onClick={onClose}
                            className='px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoModal
