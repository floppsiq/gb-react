import { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";

// const chats = [
//   { id: "chat1", letter: "А", name: "Андрей" },
//   { id: "chat2", letter: "О", name: "Олег" },
//   { id: "chat3", letter: "И", name: "Игорь" },
//   { id: "chat4", letter: "В", name: "Виктор" },
//   { id: "chat5", letter: "С", name: "Семен" },
//   { id: "chat6", letter: "С", name: "Сергей" },
// ];

const initMessages = {
  chat1: [],
  chat2: [],
  chat3: [],
  chat4: [],
  chat5: [],
  chat6: [],
};

export function Chat() {
  const { id } = useParams();
  const [messages, setMessages] = useState(initMessages);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages({ ...messages, [id]: [...messages[id], newMsg] });
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "Сообщение отправлено",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  if (!messages[id]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App" ref={wrapperRef}>
      <div className="message-list">
        <Form onSubmit={sendMessage} />
        <MessageList messages={messages[id]} />
      </div>
    </div>
  );
}
