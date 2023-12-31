import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [listElements, setListElements] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editingElementId, setEditingElementId] = useState(null);
  const [editText, setEditText] = useState('');

  const fetchListElements = async () => {
    try {
      const response = await fetch('http://localhost:8070/listelement/getAll');
      const data = await response.json();
      setListElements(data);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchListElements();
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddClick = async () => {
    if (inputText.trim() !== '') {
      try {
        await fetch('http://localhost:8070/listelement/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: inputText })
        });
        fetchListElements();
        setInputText('');
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      await fetch(`http://localhost:8070/listelement/delete/${id}`, {
        method: 'DELETE'
      });
      fetchListElements();
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  const handleEditClick = (id, text) => {
    setEditingElementId(id);
    setEditText(text);
  };
  
  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };
  
  const handleUpdateClick = async (id) => {
    if (editText.trim() !== '') {
      try {
        await fetch(`http://localhost:8070/listelement/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: editText })
        });
        fetchListElements();
        setEditingElementId(null);
        setEditText('');
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
        <div className="App-flex">
          <input
            type="text"
            id="userInput"
            name="userInput"
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddClick}>
            Add
          </button>
        </div>
        <div>
          <ul>
          {listElements.map((element) => (
  <li key={element.id}>
    {editingElementId === element.id ? (
      <div>
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
        />
        <button onClick={() => handleUpdateClick(element.id)}>
          Update
        </button>
      </div>
    ) : (
      <div>
        {element.text}
        &nbsp;
        <button onClick={() => handleDeleteClick(element.id)}>
          Delete
        </button>
        &nbsp;
        <button onClick={() => handleEditClick(element.id, element.text)}>
          Edit
        </button>
      </div>
      )}
    </li>))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;