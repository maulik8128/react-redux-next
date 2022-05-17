import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import TodosContextProveder from './store/todo-context';
function App() {
  return (
    <TodosContextProveder>
      <NewTodo />
      <Todos />
    </TodosContextProveder>
  );
}

export default App;
