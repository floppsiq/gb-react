import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { logIn, signUp } from "../../services/firebase";

export const Home = ({ isSignUp }) => {
  const [error, setError] = useState("");
  const handleSubmit = async ({ login, pass }) => {
    try {
      if (isSignUp) {
        await signUp(login, pass);
      } else {
        await logIn(login, pass);
      }
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <>
      <div className="wrapper__home">
        <h1>Главная</h1>
        <LoginForm onSubmit={handleSubmit} />
        {error && <h5>{error}</h5>}
        <Link to={isSignUp ? "/" : "/signup"}>
          {isSignUp ? "to login" : "to signup"}
        </Link>
      </div>
    </>
  );
};
