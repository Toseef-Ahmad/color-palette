import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DragableColorBox from './DragableColorBox';
import { ChromePicker } from 'react-color';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ButtonContainer = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

const ColorsList = styled('div')({
  height: 'calc(100vh - 16vh)',
});

export default function NewColorPalette(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState('purple');
  const [colors, setColors] = React.useState([]);
  const [colorName, setColorName] = React.useState('');
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const addNewColor = () => {
    const newColor = {
      color: color,
      name: colorName,
    };
    setColors((oldColor) => {
      return [...oldColor, newColor];
    });
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeColorName = ({ target }) => {
    setColorName(target.value);
  };

  const savePalette = () => {
    const newPalette = {
      paletteName: 'New Palette',
      id: 'new-palette',
      colors: colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
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
          <Button variant="contained" onClick={savePalette}>
            SAVE PALETTE
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Paltte</Typography>
        <ButtonContainer>
          <Button variant="contained" color="error">
            CLEAR PALETTE
          </Button>
          <Button variant="contained" color="primary">
            RANDOM PALETTE
          </Button>
        </ButtonContainer>
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
          onClick={addNewColor}
        >
          ADD COLOR
        </Button>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ColorsList>
          {colors.map(({ color, name }) => (
            <DragableColorBox color={color} colorName={name} />
          ))}
        </ColorsList>
      </Main>
    </Box>
  );
}
