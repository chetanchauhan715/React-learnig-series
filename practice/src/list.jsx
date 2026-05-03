function TodoList(){
    const todos = [
        {id:1 , text:"Chetan Chauhan"},
        {id:2 , text: "Building Website Using React"},
        {id:3 , text: "Learning React Components"},
];

return(
    <div>
        <h2>My React Todos</h2>

        <ul>
            {todos.map( (todo)=> {
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    </div>
);
}

function App2(){
    return(
        <div>
            <TodoList/>
        </div>
    );
}

export default App2;