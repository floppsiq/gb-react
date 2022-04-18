import "./App.css";
import { ChatList } from "./components/ChatList/ChatList";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from "./screens/Chat/Chat";
import { Profile } from "./screens/Profile/Profile";
import { Home } from "./screens/Home/Home";
import { ChatListCont } from "./components/ChatList/ChatListCont";

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<ChatList />}>
            <Route path=":id" element={<Chat />} />
          </Route>
          <Route path="*" element={<h4>404</h4>} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
