import { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { MessageList } from "../../components/MessageList/MessageList";
import { addMessageWithReplay } from "../../store/messages/actions";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { AUTHORS } from "../../utils/constants";

export function Chat() {
  const { id } = useParams();
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id])
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  const timeout = useRef();
  const wrapperRef = useRef();

  const sendMessage = (text) => {
    dispatch(
      addMessageWithReplay(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`,
        },
        id
      )
    );
  };

  // useEffect(() => {
  //   const lastMessage = messages?.[messages?.length - 1];
  //   if (lastMessage?.author === AUTHORS.human) {
  //     timeout.current = setTimeout(() => {
  //       dispatch(
  //         addMessage(
  //           {
  //             author: AUTHORS.robot,
  //             text: "Сообщение отправлено",
  //             id: `msg-${Date.now()}`,
  //           },
  //           id
  //         )
  //       );
  //     }, 1000);
  //   }

  //   return () => {
  //     clearTimeout(timeout.current);
  //   };
  // }, [messages]);

  // if (!messages) {
  //   return <Navigate to="/chats" replace />;
  // }

  return (
    <div className="App" ref={wrapperRef}>
      <div className="message-list">
        <Form onSubmit={sendMessage} textBtn={"Отправить"} />
        <MessageList messages={messages} />
      </div>
    </div>
  );
}
