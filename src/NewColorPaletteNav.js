import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';

const drawerWidth = 300;

const styles = {
  navBarButtons: {
    display: 'flex',
    height: 64,
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    '& button': {
      margin: 10,
    },
  },
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NewColorPaletteNav = ({
  open,
  savePalette,
  handleDrawerOpen,
  palettes,
  colors,
  classes,
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
              COLOR PALETTE
            </Typography>
          </Toolbar>
          <div className={classes.navBarButtons}>
            <TextField
              variant="filled"
              id="filled-basic"
              label="Enter Palette Name"
              value={paletteName}
              onChange={() => setPaletteName(event.target.value)}
            ></TextField>

            <Button variant="contained" color="error">
              <Link to="/">GO BACK</Link>
            </Button>

            <Button variant="contained" onClick={handleSavePalette}>
              SAVE PALETTE
            </Button>
          </div>
        </AppBar>
      </div>
    </>
  );
};

export default withStyles(styles)(NewColorPaletteNav);
