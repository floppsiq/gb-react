import { DeleteSharp } from "@mui/icons-material";
import { Avatar, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";

export const ChatListPres = ({ chats, handelRemoveChat, handleSubmit}) => (    
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