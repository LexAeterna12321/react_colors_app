import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

const ColorPickerForm = ({ isPaletteFull, colors, setColors }) => {
  const [currentColor, setCurrentColor] = useState("teal");
  const [newColorName, setNewColorName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorUnique", () => {
      return colors.every(({ color }) => color !== currentColor);
    });
  });

  const updateCurrentColor = newColor => {
    setCurrentColor(newColor);
  };

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    const newColors = [...colors, newColor];
    setColors(newColors);
    setNewColorName("");
  };

  const handleChange = e => {
    setNewColorName(e.target.value);
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={newColor => updateCurrentColor(newColor.hex)}
      />
      <ValidatorForm onSubmit={addNewColor}>
        <TextValidator
          name="newColorName"
          value={newColorName}
          onChange={handleChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "This field is required",
            "Color name must be unique",
            "Color already exists"
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: isPaletteFull ? "grey" : currentColor }}
          type="submit"
          disabled={isPaletteFull}
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
