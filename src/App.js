import "./App.css";
// import { useEffect, useState } from "react";
// import { Form } from "./components/Form/Form";
// import { AUTHORS } from "./utils/constants";
// import { MessageList } from "./components/MessageList/MessageList";
import { ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./components/Profile/Profile";

const Home = () => <h1>Home page</h1>;

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/chats"
          >
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <section className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/chats" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

// const messageList = [];

// function App() {
//   const [messages, setMessages] = useState(messageList);

//   const addMessage = (newMsg) => {
//     setMessages([...messages, newMsg]);
//   };

//   const sendMessage = (text) => {
//     addMessage({
//       author: AUTHORS.human,
//       text,
//       id: `msg-${Date.now()}`,
//     });
//   };

//   useEffect(() => {
//     let timeOut;

//     if (
//       messages.length > 0 &&
//       messages[messages.length - 1].author === AUTHORS.human
//     ) {
//       timeOut = setTimeout(() => {
//         addMessage({
//           author: AUTHORS.robot,
//           text: "Сообщение отправлено",
//           id: `msg-${Date.now()}`,
//         });
//       }, 1500);
//     }
//     return () => {
//       clearTimeout(timeOut);
//     };
//   }, [messages]);

//   return (
//     <div className="App">
//       <ChatList />
//       <div className="message-list">
//         <Form onSubmit={sendMessage} />
//         <MessageList messages={messages} />
//       </div>
//     </div>
//   );
// }

export default App;
