import "./App.css";
import { ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { Home } from "./screens/Home/Home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "./store/chats/actions";
import { selectChats } from "./store/chats/selectors";
import { selectMessages } from "./store/messages/selectors";
import { addMessage, clearMessages } from "./store/messages/actions";

// const initialChats = [
//   { id: "chat1", letter: "А", name: "Андрей" },
//   { id: "chat2", letter: "О", name: "Олег" },
//   { id: "chat3", letter: "И", name: "Игорь" },
//   { id: "chat4", letter: "В", name: "Виктор" },
//   { id: "chat5", letter: "С", name: "Семен" },
//   { id: "chat6", letter: "С", name: "Сергей" },
// ];

// const initMessages = initialChats.reduce((acc, chat) => {
//   acc[chat.id] = [];
//   return acc;
// }, {});

function App() {
  
  const chats = useSelector(selectChats, shallowEqual);
  const messages = useSelector(selectMessages)
  const dispatch = useDispatch();

  // const [messages, setMessages] = useState(initMessages);
  

  const addNewMessage = (newMsg, id) => {
    // setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    dispatch(addMessage(newMsg, id));
  };

  const addNewChat = (newChat) => {
    // setChats((prevChats) => [...prevChats, newChat]);
    dispatch(addChat(newChat));
    // setMessages((prevMessages) => ({ ...prevMessages, [newChat.id]: [] }));
  };

  const removeChat = (id) => {
    // setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
    dispatch(deleteChat(id));
    dispatch(clearMessages(id))
    // setMessages((prevMessages) => {
    //   const newMessages = { ...prevMessages };
    //   delete newMessages[id];
    //   return newMessages;
    // });
  };

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
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/chats"
            element={
              <ChatList
                deleteChat={removeChat}
                addChat={addNewChat}
                chats={chats}
              />
            }
          >
            <Route
              path=":id"
              element={<Chat addMessage={addNewMessage} messages={messages} />}
            />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
