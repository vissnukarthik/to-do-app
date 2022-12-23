import {React,useState} from 'react';
import './App.css';
import Form from './components/Form';
import ToList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState();
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>karthis To do List</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
      {console.log(inputText)}
      <ToList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
 