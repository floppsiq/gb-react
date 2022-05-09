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
import { onValue, remove, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { chatsRef, getChatRefById, getMsgsRefById } from "../../services/firebase";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { clearMessages, initMessagesForChat } from "../../store/messages/actions";
import { Form } from "../Form/Form";
import "./ChatList.styles.css";

export const ChatList = () => {
  const [chats, setChats] = useState([]);

  //const chats = useSelector(selectChats);

  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
      letter: `${newChatName.slice(0, 1).toUpperCase()}`,
    };
    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true });
    // dispatch(addChat(newChat));
    // dispatch(initMessagesForChat(newChat.id));
  };

  const handelRemoveChat = (id) => {
    remove(getChatRefById(id));
    set(getMsgsRefById(id), null);
    // dispatch(deleteChat(id));
    // dispatch(clearMessages(id));
  }

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 300, mr: 2 }}>
        {chats.map((chat) => (
          <React.Fragment key={chat.id}>
            <ListItem sx={{ justifyContent: "space-between" }}>
              <Link to={`/chats/${chat.id}`} className="chat__link">
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#1976d2" }}>{chat.letter}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={chat.name} />
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => handelRemoveChat(chat.id)}
              >
                <DeleteSharp color="primary" />
              </IconButton>
            </ListItem>
            <Divider variant="inset" />
          </React.Fragment>
        ))}
        <Form textBtn={"Добавить чат"} onSubmit={handleSubmit} />
      </List>
      <Outlet />
    </>
  );
};
