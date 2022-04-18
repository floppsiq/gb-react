import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./Form.styles.css";

export const Form = ({ onSubmit, textBtn }) => {
  const [value, setValue] = useState("");

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        fullWidth
        margin="dense"
        value={value}
        onChange={handleChange}
        label="Введите текст"
        variant="filled"
        inputRef={inputRef}
      />
      <Button type="submit" size="medium" variant="contained">
        {textBtn}
      </Button>
    </form>
  );
};
