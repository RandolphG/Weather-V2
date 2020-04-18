import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const confirmBtns = ["cancel", "ok"];
export default function DialogSelect({ city, setCity, getWeatherInfoAction }) {
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    event.persist();
    event.preventDefault();
    setCity(event.target.value);
    console.log("city selected");
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
    getWeatherInfoAction(city);
    console.log(`selected: ${city}`);
  };

  return (
    <div className="dialog">
      <Button className="btn-open" onClick={handleClickOpen}>
        select city
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Choose a city</DialogTitle>
        <DialogContent>
          <form className={"container"}>
            <FormControl className={"form-control"}>
              <InputLabel htmlFor="demo-dialog-native">City</InputLabel>
              <Select
                native
                value={city}
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
          {confirmBtns.map((item, idx) => (
            <Button key={idx} onClick={handleClose} color="primary">
              {item}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
