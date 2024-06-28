import React from 'react'
import { Todo } from './todoApp'

interface TodoItemProps {
    todo: Todo
    onEdit: (todo: Todo) => void
    onDelete: (id: number) => void
    onStatusChange: (todo: Todo) => void
}

export default function TodoItem({
    todo,
    onEdit,
    onDelete,
    onStatusChange,
}: TodoItemProps) {
    const statusColors = {
        'in progress': 'bg-yellow-200',
        blocked: 'bg-red-200',
        completed: 'bg-green-200',
    }

    const formatDate = (date: Date | null) => {
        const actual_date = date || new Date()
        return actual_date.toLocaleDateString()
    }

    return (
        <li
            className={`flex items-center justify-between p-2 border rounded ${
                statusColors[todo.status]
            }`}
        >
            <div>
                <span>{todo.text}</span>
                <p className='text-sm text-gray-500'>
                    Due: {formatDate(todo.dueDate)}
                </p>
            </div>
            <div>
                <select
                    value={todo.status}
                    onChange={(e) =>
                        onStatusChange({
                            ...todo,
                            status: e.target.value as Todo['status'],
                        })
                    }
                    className='mr-2 p-1 border rounded'
                >
                    <option value='in progress'>In Progress</option>
                    <option value='blocked'>Blocked</option>
                    <option value='completed'>Completed</option>
                </select>
                <button
                    onClick={() => onEdit(todo)}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2'
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(todo.id)}
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
