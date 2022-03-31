//import logo from "./logo.svg";
import "./App.css";
//import { Message } from "./components/Message/Message";
import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";

const messageList = [];

const chatList = [
  { id: 1, letter: "А", name: "Андрей" },
  { id: 2, letter: "О", name: "Олег" },
  { id: 3, letter: "И", name: "Игорь" },
  { id: 4, letter: "В", name: "Виктор" },
  { id: 5, letter: "С", name: "Семен" },
  { id: 6, letter: "С", name: "Сергей" },
];

function App() {
  const [messages, setMessages] = useState(messageList);

  /*const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: name }]);
  };*/

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    //console.log(messages);
    let timeOut;

    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHORS.human
    ) {
      timeOut = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "Сообщение отправлено",
          id: `msg-${Date.now()}`,
        });
      }, 1500);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [messages]);

  return (
    <div className="App">
      <ChatList chatList={chatList} />
      <div className="message-list">
        <Form onSubmit={sendMessage} />
        <MessageList messages={messages} />
      </div>
    </div>
  );
}

export default App;
