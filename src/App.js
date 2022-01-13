import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState("")
  const [todoList, setDotoList] = useState([])

  const onChangeValue = (event) => {
    setInputValue(event.target.value)
  }
  const submit = () => {
    setDotoList([...todoList, inputValue])
    setInputValue("")
  }
  const deleteBtn = (e, index1) => {
    setDotoList(todoList.filter((item, index) => index !== index1))
  }
  return (
    <div className="app ">
      <div className="main">
        <h1 >To-Do List </h1>
        <div className='addTask'>
          <input type="text"
            className="form-control"
            placeholder="Enter to do work"
            value={inputValue}
            onChange={onChangeValue}
          />

          <button onClick={() => submit()} className="btn btn-primary">Add</button>

        </div>

      </div>

      <div className='list'>
        {todoList && todoList.length > 0 && todoList.map((item, index) => {
          return (

            <h4 key={index} >
              <span>
                {index + 1}.{"  "+item}
              </span>
              <button onClick={(e) => deleteBtn(e, index)} className='btn btn-danger'>X</button>
            </h4>
          )
        })}
      </div>
    </div>

  );
}

export default App;