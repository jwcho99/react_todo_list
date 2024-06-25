import React from 'react'
import TodoItem from './todoItem'
import { Todo } from './todoApp'

interface TodoListProps {
    todos: Todo[]
    onEdit: (todo: Todo) => void
    onDelete: (id: number) => void
    onStatusChange: (todo: Todo) => void
}

export default function TodoList({
    todos,
    onEdit,
    onDelete,
    onStatusChange,
}: TodoListProps) {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onStatusChange={onStatusChange}
                />
            ))}
        </div>
    )
}
