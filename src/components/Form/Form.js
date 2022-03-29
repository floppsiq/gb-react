import { useState } from "react";
import "./Form.styles.css";

export const Form = ({ onSubmit }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }

    const handleChange = (e) => {
        setValue (e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={value} onChange={handleChange} type="text" className="form__input"/>
      <input type="submit" className="form__submit" />
    </form>
  );
};
