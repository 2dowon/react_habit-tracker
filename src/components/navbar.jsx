import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
    return (
        <nav className="navbar">
            <i className="fas fa-leaf navbar-logo"></i>
            <span className="navbar-title">Habit Tracker</span>
            <span className="navbar-count">{totalCount}</span>
        </nav>
    );
});

export default Navbar;
