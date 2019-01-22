import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat breakfast", complete: true },
    { id: 2, text: "Eat Lunch", complete: false },
    { id: 3, text: "Eat Dinner", complete: false }
  ]
});

export default TodosContext;