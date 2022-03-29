import "./Message.styles.css";

export const Message = ({ author, text }) => {
  return (
    <div className="message">
      <span className="message__author">{author}: </span>
      <span className="message__text">{text}</span>
    </div>
  );
};
