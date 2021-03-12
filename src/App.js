import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Form setTasks={setTasks} />
      <br />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
