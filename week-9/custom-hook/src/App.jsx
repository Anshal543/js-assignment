import Profile from "./components/SWR";
import Track from "./components/Track";
import UseIsOnline from "./components/UseIsOnline";
import useTodos from "./components/UseTodo";

function App() {
  const { todos, loading } = useTodos();
  const isOnline = UseIsOnline()

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => <Track key={todo.id} todo={todo.todo} />)
      )}
      <Profile />
      {
        isOnline ? <p>Online</p> : <p>Offline</p>
      }
    </div>
  );
}




export default App;




