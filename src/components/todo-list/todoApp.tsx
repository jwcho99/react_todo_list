import React, { useState } from 'react'
import TodoList from './todoList'
import TodoModal from './todoModal'

export interface Todo {
    id: number
    text: string
    status: 'in progress' | 'blocked' | 'completed'
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            status: 'in progress',
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (updatedTodo: Todo) => {
        setTodos(
            todos.map((todo) =>
                todo.id === updatedTodo.id ? updatedTodo : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const openModal = (todo?: Todo) => {
        setEditingTodo(todo || null)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setEditingTodo(null)
        setIsModalOpen(false)
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold mb-4'>Todo List</h1>
            <button
                onClick={() => openModal()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4'
            >
                Add Todo
            </button>
            <TodoList
                todos={todos}
                onEdit={openModal}
                onDelete={deleteTodo}
                onStatusChange={updateTodo}
            />
            {isModalOpen && (
                <TodoModal
                    todo={editingTodo}
                    onClose={closeModal}
                    onSave={(text) => {
                        if (editingTodo) {
                            updateTodo({ ...editingTodo, text })
                        } else {
                            addTodo(text)
                        }
                        closeModal()
                    }}
                />
            )}
        </div>
    )
}

export default TodoApp
