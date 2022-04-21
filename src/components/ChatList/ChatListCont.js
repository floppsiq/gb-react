import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import {
  clearMessages,
  initMessagesForChat,
} from "../../store/messages/actions";
import { ChatListPres } from "./ChatListPres";

export const ChatListCont = () => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
      letter: `${newChatName.slice(0, 1).toUpperCase()}`,
    };
    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id));
  };

  const handelRemoveChat = (id) => {
    dispatch(deleteChat(id));
    dispatch(clearMessages(id));
  };

  return (
    <ChatListPres
      chats={chats}
      handelRemoveChat={handelRemoveChat}
      handleSubmit={handleSubmit}
    />
  );
};
