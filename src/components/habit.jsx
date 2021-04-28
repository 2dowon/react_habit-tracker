import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
    const handleIncrement = () => {
        onIncrement(habit);
    };

    const handleDecrement = () => {
        onDecrement(habit);
    };

    const handleDelete = () => {
        onDelete(habit);
    };

    return (
        <li className="habit">
            <span className="habit-name">{habit.name}</span>
            <span className="habit-count">{habit.count}</span>
            <button
                className="habit-btn habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <button
                className="habit-btn habit-decrease"
                onClick={handleDecrement}
            >
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-btn habit-delete" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
});

export default Habit;
