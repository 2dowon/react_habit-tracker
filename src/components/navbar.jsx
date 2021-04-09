import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    const habits = this.props.habits.filter((item) => item.count > 0);
    const counts = habits.length;
    return (
      <nav className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="habit-count navbar-count">{counts}</span>
      </nav>
    );
  }
}

export default Navbar;
