import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function NewColorPaletteMetaForm(props) {
  const [open, setOpen] = React.useState(false);
  const [paletteName, setPaletteName] = React.useState('');
  const { handleSavePalette} = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error">
            <Link to="/">GO BACK</Link>
      </Button>
      <Button variant="contained" onClick={handleClickOpen} >
            SAVE PALETTE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Chose A Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for you new Beautiful palette, name should be unique.!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            variant="standard"
            id="filled-basic"
            label="Enter Palette Name"
            type="text"
            fullWidth
            value={paletteName}
            onChange={() => setPaletteName(event.target.value)}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleSavePalette(paletteName)}>SAVE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewColorPaletteMetaForm;