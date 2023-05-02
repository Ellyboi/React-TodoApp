const TodosLogic = () => {
  const todos = [
    // ...
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ul>
  );
};
export default TodosLogic;
