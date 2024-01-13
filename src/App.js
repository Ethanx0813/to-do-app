import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoApp from './TodoApp';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Todo App</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
