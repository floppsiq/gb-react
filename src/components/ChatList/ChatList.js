import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./ChatList.styles.css";

const chatList = [
  { id: "chat1", letter: "А", name: "Андрей" },
  { id: "chat2", letter: "О", name: "Олег" },
  { id: "chat3", letter: "И", name: "Игорь" },
  { id: "chat4", letter: "В", name: "Виктор" },
  { id: "chat5", letter: "С", name: "Семен" },
  { id: "chat6", letter: "С", name: "Сергей" },
];

export const ChatList = () => {
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 300, mr: 2 }}>
        {chatList.map(({ id, name, letter }) => (
          <>
            <Link to={`/chats/${id}`} className="chat__link">
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>{letter}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
            <Divider variant="inset" />
          </>
        ))}
      </List>
      <Outlet />
    </>
  );
};
