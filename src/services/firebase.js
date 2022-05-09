import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC1yWv818Pl1mTrOabTBFyrZJ9qJBNy6j4",
  authDomain: "messanger-59b50.firebaseapp.com",
  databaseURL: "https://messanger-59b50-default-rtdb.firebaseio.com",
  projectId: "messanger-59b50",
  storageBucket: "messanger-59b50.appspot.com",
  messagingSenderId: "887355527461",
  appId: "1:887355527461:web:945ba2b346c265f9aa8acc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
  };
  export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
  };
  export const logOut = async () => {
    await signOut(auth);
  };
  
  export const userRef = ref(db, "user");
  export const userNameRef = ref(db, "user/name");
  export const userShowNameRef = ref(db, "user/showName");
  export const chatsRef = ref(db, "chats");
  export const msgsRef = ref(db, "messages");
  export const getChatRefById = (id) => ref(db, `chats/${id}`);
  export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
  export const getMsgsListRefById = (chatId) =>
    ref(db, `messages/${chatId}/messageList`);
