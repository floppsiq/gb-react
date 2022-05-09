import { onValue, push } from "firebase/database";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { auth, getMsgsListRefById, getMsgsRefById } from "../../services/firebase";
import { addMessageWithReplay } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
  //const messages = useSelector(getMessages);
  const dispatch = useDispatch();
  
  const wrapperRef = useRef();

  const sendMessage = (text) => {    
    push(getMsgsListRefById(id), {
      author: auth.currentUser.email,
      text,
      id: `msg-${Date.now()}`,
    });
    // dispatch(
    //   addMessageWithReplay(
    //     {
    //       author: AUTHORS.human,
    //       text,
    //       id: `msg-${Date.now()}`,
    //     },
    //     id
    //   )
    // );
  };
  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <div className="App" ref={wrapperRef}>
      <div className="message-list">
        <Form onSubmit={sendMessage} textBtn={"Отправить"} />
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
