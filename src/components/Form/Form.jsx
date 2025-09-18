import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";
import "./style.css";

const Form = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const newTodo = {
      id: todos.length + 1,
      todo: value,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setValue("");
  }

  function deleteFn(id) {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  }

  function getProducts() {
    console.log("Productlar alindi ham githubqa kirgizdik !!!");
  }

  useEffect(() => {
    getProducts();
  }, [todos]);

  return (
    <div className="form">
      Form
      <Input
        setValue={setValue}
        value={value}
        type="text"
        label="Todo"
        pl="Todo PL"
      />
      <Button onClick={addTodo} title="Create" />
      <List todos={todos} deleteFn={deleteFn} />
    </div>
  );
};

export default Form;
