import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function DialogSelect({ city, setCity, getWeatherInfoAction }) {
  const [open, setOpen] = useState(false);

  const [selectCity, setSelectCity] = useState("zagreb");

  const handleChange = (event) => {
    console.log("pressed");
    setSelectCity(event.target.value);
  };
  const handleClickOpen = () => {
    console.log("pressed");

    setOpen(true);
  };
  const handleClose = (event) => {
    console.log("pressed");

    setOpen(false);
  };

  const handleOk = (event) => {
    console.log("pressed");
    setCity(selectCity);
    getWeatherInfoAction(selectCity);
    setOpen(false);
  };

  return (
    <div className="dialog">
      {console.log("rendered")}
      <Button className="btn-open" onClick={handleClickOpen}>
        select city
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a city</DialogTitle>
        <DialogContent>
          <form className={"container"}>
            <FormControl className={"form-control"}>
              <InputLabel>City</InputLabel>
              <Select
                native
                value={selectCity}
                onChange={handleChange}
                input={<Input />}
              >
                <option value={"zagreb"}>Zagreb</option>
                <option value={"oslo"}>Oslo</option>
                <option value={"losAngeles"}>Los Angeles</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
