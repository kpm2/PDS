import logo from './logo.svg';
import './App.css';

function App() {
  const Add = async () => {
    if (document.getElementById("userInput")) {
      const listElement = document.getElementById("userInput").value;
      document.getElementById("userInput").value = "";
      
      if (listElement !== "") {
        try {
          await fetch("http://localhost:8070/listelement/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: listElement })
          });
        } catch (error) {
          console.error('Error during fetch:', error);
        }
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do list</h1>
        <div className="App-flex">
          <input type="text" id="userInput" name="userInput"></input>  
          <button type="button" onClick={Add}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;