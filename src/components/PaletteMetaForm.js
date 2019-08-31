import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const PaletteMetaForm = ({
  handleSubmit,
  handleChange,
  hideForm,
  newPaletteName
}) => {
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
    hideForm();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>{" "}
      <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's
            unique.
          </DialogContentText>
          <Picker />
          <TextValidator
            value={newPaletteName}
            name="newPaletteName"
            label="Palette Name"
            fullWidth
            margin="normal"
            onChange={handleChange}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Palette Name already used"]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Palette
          </Button>
        </DialogActions>{" "}
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
