import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewColorPaletteNav = ({
  open,
  savePalette,
  AppBar,
  handleDrawerOpen,
  palettes,
  colors
}) => {
  const [paletteName, setPaletteName] = React.useState('');

  const handleSavePalette = () => {
    const isUnique = palettes.every(
      (palette) => palette.paletteName !== paletteName
    );

    if (isUnique && paletteName !== '') {
      if (colors.length !== 0) {
        savePalette(paletteName);
      } else {
        alert('Palette is Empty');
      }
    } else {
      alert('Chose Unique Palette Name');
    }
  };
  return (
    <>
      <div>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" open={open} color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>
            <TextField
              variant="filled"
              id="filled-basic"
              label="Enter Palette Name"
              value={paletteName}
              onChange={() => setPaletteName(event.target.value)}
            ></TextField>
            <Button variant="contained" onClick={handleSavePalette}>
              SAVE PALETTE
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NewColorPaletteNav;
