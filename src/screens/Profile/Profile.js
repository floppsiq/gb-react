import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { logOut } from "../../services/firebase";
import {
  initProfileTrack,
  setName,
  setNameFB,
  setShowName,
  stopProfileTrack,
  toggleCheckbox,
} from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.profile);
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(setShowName(!showName));
  };

  const handleSubmit = (text) => {
    dispatch(setNameFB(text));
  };

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, []);

  return (
    <div className="wrapper__profile">
      <Button type="submit" size="medium" variant="contained" onClick={logOut}>
        LOGOUT
      </Button>
      <h3>Ваш профиль:</h3>
      <div>Имя: {showName && <span>{name}</span>}</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={showName}
              value={showName}
              onClick={handleClick}
            />
          }
          label="Показать имя"
        />
      </FormGroup>
      <Form onSubmit={handleSubmit} textBtn={"Сменить имя"} />
    </div>
  );
};
