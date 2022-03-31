import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Divider } from "@mui/material";

export const ChatList = ({ chatList }) => {
  return (
    <List sx={{ width: "100%", maxWidth: 300, mr: 2}}>
      {chatList.map(({ id, name, letter }) => (
          <>
        <ListItem key={id} >
            <ListItemAvatar>
            <Avatar>{letter}</Avatar>
            </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
        <Divider variant="inset"/>
        </>
      ))}
    </List>
  );
};
