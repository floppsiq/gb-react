//import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message/Message";
import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form";

const name = "Иван";

const messageList = [];

function App() {
  const [messages, setMessages] = useState(messageList);

  useEffect(() => {
    //console.log(messages);
    if (messages.length > 0 && messages[messages.length - 1].author === name) {
      setMessages([...messages, { text: "Сообщение отправленно", author: "Robot" }]);
    }
  }, [messages]);

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: name }]);
  };

  return (
    <div className="App">
      <Form onSubmit={addMessage} />
      {messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))}
    </div>
  );
}

export default App;
