import React, { useState, useEffect, useRef } from "react";
import {
  SelectInput,
  useTranslate,
  useDataProvider,
  useNotify,
  required,
} from "react-admin";
import Button from "@material-ui/core/Button";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import EventsForm from './EventsForm'


const theme = createMuiTheme({
  orverrides: {
    MuiButton: {
      root: {
        backgroundColor: "#E94E1B",
        color: "#FFF",
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginBottom: 10,
    height: 56,
    width: 257,
    backgroundColor: "#00BFFF",
    "& > span": {
      color: "#fff !important",
    },
    "&:hover": {
      backgroundColor: "#CC4316",
    },
  },
  submit: {
    "& > span": {
      color: "white",
    },
  },
});

const SelectWithButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const { reference, choices } = props;
  const [options, setOptions] = useState(choices);
  const handleClick = () => setIsOpen(true);
  const translate = useTranslate();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const classes = useStyles();

  const close = () => setIsOpen(false);

  // const createDataToRequest = inputs => {
  //   const obj = {}
  //   const newInputs = Array.from(inputs)
  //   newInputs.forEach(input => {
  //     if (['dateStart', 'dateEnd'].includes(input.name)) {
  //       input.value = input.value
  //     }
  //   })
  //   newInputs.forEach(input =>
  //     input.name
  //       ? (obj[input.name] = input.name === 'role' ? +input.value : input.value)
  //       : null
  //   )
  //   return obj
  // }

  const handleSubmit = async () => {
    setIsOpen(true)
  }

  return (
    <form>
      <div className={classes.root}>
        <Button className={classes.button} onClick={handleClick}>
          Создать подмероприятие
        </Button>
      </div>
      <Dialog onClose={close} fullWidth open={isOpen} aria-label="Create">
        <DialogTitle>Здесь будут формы</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          ref={ref}
        >
          <EventsForm handleSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default SelectWithButton;
