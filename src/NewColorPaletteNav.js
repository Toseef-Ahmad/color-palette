import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import NewColorPaletteMetaForm from './NewColorPaletteMetaForm';
import 'emoji-mart/css/emoji-mart.css';
import styles from './styles/NewColorPaletteNavStyles';

const drawerWidth = 300;

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
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              COLOR PALETTE
            </Typography>
          </Toolbar>
          <div className={classes.navBarButtons}>
            <NewColorPaletteMetaForm
              palettes={palettes}
              colors={colors}
              savePalette={savePalette}
            />
          </div>
        </AppBar>
      </div>
    </>
  );
};

export default withStyles(styles)(NewColorPaletteNav);
