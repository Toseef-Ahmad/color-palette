import React from 'react';
import { ChromePicker } from 'react-color';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@mui/styles';
import styles from './styles/NewColorPaletteColorPickerStyles';

const NewColorPaletteColorPicker = withStyles(styles)((props) => {
  const [color, setColor] = React.useState('maroon');
  const [colorName, setColorName] = React.useState('maroon');
  const { classes } = props;

  const handleClick = () => {
    const newColor = {
      color: color,
      name: colorName,
      id: uuidv4(),
    };
    props.addNewColor(newColor);
  };

  return (
    <>
      <div className={classes.root}>
        <ChromePicker
          color={color}
          onChangeComplete={(newColor) => setColor(newColor.hex)}
        />

        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={colorName}
          onChange={() => setColorName(event.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ backgroundColor: color }}
          onClick={handleClick}
          className={classes.addButton}
        >
          ADD COLOR
        </Button>
      </div>
    </>
  );
});

export default NewColorPaletteColorPicker;
