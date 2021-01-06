import Container from "@material-ui/core/Container";
import React from "react";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./contacts-table/ContactsTable";

// import axios from 'axios'
//
// const axiosInstance = axios.create({
//     baseURL: 'https://randomuser.me/api/',
//     withCredentials: true
// })

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    titleContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();

  console.log(contacts.data);

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.titleContainer}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <LinearProgress color="secondary" />;
            }
            if (contacts.isError) {
              return <div>...isError</div>;
            }
            return <ContactsTable data={contacts.data} />;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
