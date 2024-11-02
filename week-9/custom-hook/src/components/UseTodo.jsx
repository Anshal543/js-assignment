import axios from "axios";
import { useEffect, useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(() => Math.floor(Math.random() * 100));
  console.log(skip);

  useEffect(() => {
    const fetchTodos = () => {
      setLoading(true);
      axios
        .get(`https://dummyjson.com/todos?skip=${skip}&limit=20`)
        .then((res) => {
          setTodos(res.data.todos);
        })
        .catch((error) => console.error("Error fetching todos:", error))
        .finally(() => setLoading(false));
    };
    fetchTodos();
    const interval = setInterval(() => {
      setSkip(Math.floor(Math.random() * 100));
      fetchTodos();
    }, 5000);
    return () => clearInterval(interval);
  }, [skip]);

  return { todos, loading };
}

export default useTodos;
