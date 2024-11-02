import { useState } from "react";
import Profile from "./components/SWR";
import Track from "./components/Track";
import useDimension from "./components/Use-dimension";
import UseIsOnline from "./components/UseIsOnline";
import UseMouseOver from "./components/UseMouseOver";
import userInterval from "./components/UserInterval";
import useTodos from "./components/UseTodo";
import useDebounce from "./components/Debounce";

function App() {
  const { todos, loading } = useTodos();
  const isOnline = UseIsOnline()
  const mousePointer = UseMouseOver()
  const dimension = useDimension()
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce(inputValue,1000)


  userInterval(()=>{
    setCount(count+1)
  },[1000])

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
      
        <div>your mouse position is x: {mousePointer.x} y: {mousePointer.y}</div>
        width: {dimension.width} height: {dimension.height}
        timer is at {count}
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    </div>
  );
}




export default App;




