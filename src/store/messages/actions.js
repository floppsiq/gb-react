export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const CLEAR_MESSAGES = "MESSAGES::CLEAR_MESSAGES";

export const addMessage = (newMsg, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    newMsg,
    chatId,
  },
});

export const clearMessages = (chatId) => ({
  type: CLEAR_MESSAGES,
  payload: chatId,
});
