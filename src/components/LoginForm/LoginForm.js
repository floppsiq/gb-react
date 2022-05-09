import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const LoginForm = ({ onSubmit }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ login, pass });

    setLogin("");
    setPass("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        fullWidth
        margin="dense"
        value={login}
        label="Введите почту"
        variant="filled"
        onChange={handleChangeLogin}
      />
      <TextField
        fullWidth
        margin="dense"
        value={pass}
        label="Введите пароль"
        type="password"
        variant="filled"
        onChange={handleChangePass}
      />
      <Button type="submit" size="medium" variant="contained">
        Отправить
      </Button>
    </form>

    // <form onSubmit={handleSubmit} className="login__form">
    //   <input type="email" value={login} onChange={handleChangeLogin} />
    //   <input type="password" value={pass} onChange={handleChangePass} />
    //   <input type="submit" />
    // </form>
  );
};
