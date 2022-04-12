import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.profile);
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const handleSubmit = (text) => {
    dispatch (setName(text));
  }

  return (
    <div className="wrapper__profile">
      <h3>Ваш профиль:</h3>
      <div>Имя: {showName && <span>{name}</span>}</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={showName}
              value={showName}
              onChange={handleClick}
            />
          }
          label="Показать имя"
        />
      </FormGroup>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};
