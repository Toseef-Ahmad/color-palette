import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { Picker } from 'emoji-mart';

export default function NewColorPaletteMetaForm(props) {
  const [open, setOpen] = React.useState(true);
  const [paletteName, setPaletteName] = React.useState('');
  const [isEmoji, setIsEmoji] = React.useState(false);
  const [isForm, setIsForm] = React.useState(false);

  const { palettes, colors, savePalette } = props;

  const handleClickOpen = () => {
    setIsForm(true);
  };

  const handleClose = () => {
    setIsForm(false);
  };

  const handleClickOpenEmojiPicker = () => {
    setIsEmojy(true);
    setIsForm(false);
  }

  const handleClickCloseEmoji = () => {
    setIsEmoji(false);
  }

  const handleSavePalette = () => {
    const isUnique = palettes.every(
      (palette) => palette.paletteName !== paletteName
    );

    if (isUnique && paletteName !== '') {
      if (colors.length !== 0) {
        setIsForm(false);
        setIsEmoji(true);
      } else {
        alert('Palette is Empty');
      }
    } else {
      alert('Chose Unique Palette Name');
    }
  };

  return (
    <div>
      <Button variant="contained" color="error">
            <Link to="/">GO BACK</Link>
      </Button>
      <Button variant="contained" onClick={handleClickOpen} >
            SAVE PALETTE
      </Button>
      <Dialog open={isEmoji} onClose={handleClickCloseEmoji}>
        <Picker onSelect={(emojiObj) => savePalette({name: paletteName, emoji: emojiObj.native})}/>
      </Dialog>
      <Dialog open={isForm} onClose={handleClose}>
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
          <Button onClick={handleSavePalette}>SAVE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewColorPaletteMetaForm;