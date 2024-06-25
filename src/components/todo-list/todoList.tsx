import React from 'react'
import TodoItem from './todoItem'
import { Todo } from './todoApp'

interface TodoListProps {
    todos: Todo[]
    onEdit: (todo: Todo) => void
    onDelete: (id: number) => void
    onStatusChange: (todo: Todo) => void
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onEdit,
    onDelete,
    onStatusChange,
}) => {
    return (
        <ul className='space-y-2'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onStatusChange={onStatusChange}
                />
            ))}
        </ul>
    )
}

export default TodoList
