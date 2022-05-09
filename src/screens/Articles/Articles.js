import {
  Alert,
  Avatar,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesStatus,
} from "../../store/articles/selectors";
import { FETCH_STATUSES } from "../../utils/constants";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const status = useSelector(selectArticlesStatus);

  const sendRequest = () => {
    dispatch(getArticles());
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <div className="wrapper__articles">
        <h1>Статьи</h1>
        {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}
        <List sx={{ width: "100%", maxWidth: 1500, mr: 2 }}>
          {articles.map((article) => (
            <React.Fragment key={article.id}>
              <ListItem sx={{ justifyContent: "space-between" }}>
                <ListItemAvatar>
                  <Avatar
                    alt={article.title}
                    src={article.imageUrl}
                    variant="square"
                  />
                </ListItemAvatar>
                <ListItemText primary={article.title} />
              </ListItem>
              <Divider variant="inset" />
            </React.Fragment>
          ))}
        </List>
        <Button
          type="submit"
          size="medium"
          variant="contained"
          onSubmit={sendRequest}
        >
          Запросить статьи
        </Button>
      </div>
    </>
  );
};
