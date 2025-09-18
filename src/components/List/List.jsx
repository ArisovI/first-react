const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" />
          <span style={{ textDecoration: "line-through" }}>
            {todo.id} {todo.todo}
          </span>
          <button onClick={() => props.deleteFn(todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
