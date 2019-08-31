import React, { useState } from "react";
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
  const [open, setOpen] = useState(true);
  const [stage, setStage] = useState("form");

  function handleClose() {
    setOpen(false);
    hideForm();
    stage !== "form" && setStage("form");
  }

  const changeStage = () => {
    stage === "form" && setStage("emoji");
  };

  const savePalette = emoji => {
    handleSubmit(newPaletteName, emoji.native);
  };

  const renderCurrentStage = () => {
    return stage === "form" ? (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>{" "}
        <ValidatorForm onSubmit={changeStage}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's
              unique.
            </DialogContentText>
            <TextValidator
              value={newPaletteName}
              name="newPaletteName"
              label="Palette Name"
              fullWidth
              margin="normal"
              onChange={handleChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name already used"
              ]}
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
    ) : (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">
          Click on emoji to save your palette
        </DialogTitle>{" "}
        <Picker onSelect={savePalette} title="Pick emoji..." emoji="point_up" />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>{" "}
      </Dialog>
    );
  };

  return <div>{renderCurrentStage()}</div>;
};

export default PaletteMetaForm;
