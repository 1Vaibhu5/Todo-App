import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, ListGroup } from "react-bootstrap";
function App() {
  // const [count, setCount] = useState(0)
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handlesubmit = (event) => {
    if (!task.trim()) return;
    const updateList = [...list, task];
    setList(updateList);
    console.log("first", updateList);
    setTask("");
  };

  const editTask = (index) => {
    const update = prompt("Edit task", list[index]);
    if (update && update.trim()) {
      const updateList = [...list];
      updateList[index] = update;
      setList(updateList);
      console.log("edit", updateList);
    }
  };
  const deleteTask = (index) => {
    // alert("Testing");
    confirm("are you sure")
    const updateList = list.filter((_,i)=>i!==index);
    setList(updateList)
  };
  return (
    <>
      <div style={{ width: "500px", border: "1px solid black" }}>
        <h1 className="app" >Todo App</h1>
        <form action={handlesubmit}>
          <input
            placeholder="Add a new Todo"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ width: "300px", height: "40px", fontSize: "1.4rem" }}
          />

          <button className="btn-add" onClick={handlesubmit}>
            Add
          </button>
          <h2>Task list</h2>
        </form>
      </div>

      <ListGroup className="mt-3">
        {list.map((t, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-item-center"
          >
            {t}
            <button onClick={() => editTask(index)} className="edit-btn">Edit</button>
            <button onClick={() => deleteTask(index)} className="delete-btn">Delete</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default App;
