import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message/Message";

const text = "Первые шаги в React";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text={text} />
        <Message text="УРА!" />
      </header>
    </div>
  );
}

export default App;
