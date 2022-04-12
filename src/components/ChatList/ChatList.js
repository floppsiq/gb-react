import { DeleteSharp } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  IconButton,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";
import "./ChatList.styles.css";

export const ChatList = ({ chats, addChat, deleteChat }) => {
  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
      letter: `${newChatName.slice(0, 1).toUpperCase()}`,
    };
    addChat(newChat);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 300, mr: 2 }}>
        {chats.map((chat) => (
          <>
            <ListItem key={chat.id} sx={{ justifyContent: "space-between" }}>
              <Link to={`/chats/${chat.id}`} className="chat__link">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>{chat.letter}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={chat.name} />
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => deleteChat(chat.id)}
              >
                <DeleteSharp color="primary" />
              </IconButton>
            </ListItem>
            <Divider variant="inset" />
          </>
        ))}
        <Form onSubmit={handleSubmit} />
      </List>
      <Outlet />
    </>
  );
};
