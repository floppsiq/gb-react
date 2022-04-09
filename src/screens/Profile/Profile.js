import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  return (
    <div className="wrapper__profile">
      <h3>Ваш профиль:</h3>
      <div>Имя: {state.showName && <span>{state.name}</span>}</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.showName}
              value={state.showName}
              onChange={handleClick}
            />
          }
          label="Показать имя"
        />
      </FormGroup>
    </div>
  );
};
