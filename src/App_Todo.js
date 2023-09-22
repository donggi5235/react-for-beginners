import { useState } from "react";

function App() {
  const [Todo, setTodo] = useState("");
  const [TodoList, setTodoList] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (Todo === "") {
      return;
    }
    setTodoList((currentArray) => [Todo, ...currentArray]);
    setTodo("");
  };
  console.log(TodoList);

  return (
    <div>
      <h1>My To Do List ({TodoList.length})</h1>
      <form action="" name="" method="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do..."
          onChange={onChange}
          value={Todo}
        />
        <button>Add Todo</button>
      </form>
      <hr />
      {TodoList.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </div>
  );
}

export default App;
