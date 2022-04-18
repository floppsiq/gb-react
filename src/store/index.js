import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "messanger",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
