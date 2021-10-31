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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import DragableColorList from './DragableColorList';
import { arrayMove } from 'react-sortable-hoc';

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
  const [colors, setColors] = React.useState(
    props.palettes[Math.floor(Math.random() * props.palettes.length)].colors
  );
  const [colorName, setColorName] = React.useState('');
  const [paletteName, setPaletteName] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const addNewColor = () => {
    const newColor = {
      color: color,
      name: colorName,
      id: uuidv4(),
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

  const handleClick = (id) => {
    setColors((oldColors) => oldColors.filter((color) => color.id !== id));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearPalette = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const randomPalette =
      props.palettes[Math.floor(Math.random() * props.palettes.length)].colors;
    const randomColor =
      randomPalette[Math.floor(Math.random() * randomPalette.length)];
    console.log(randomColor);
    setColors(() => [...colors, randomColor]);
  };

  const savePalette = () => {
    const newPalette = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    const isUnique = props.palettes.every(
      (palette) => palette.paletteName !== paletteName
    );

    if (isUnique && paletteName !== '') {
      if (colors.length !== 0) {
        props.savePalette(newPalette);
        props.history.push('/');
      } else {
        alert('Palette is Empty');
      }
    } else {
      alert('Chose Unique Palette Name');
    }
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
          <TextField
            variant="filled"
            id="filled-basic"
            label="Enter Palette Name"
            value={paletteName}
            onChange={() => setPaletteName(event.target.value)}
          ></TextField>
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
          <Button variant="contained" color="error" onClick={clearPalette}>
            CLEAR PALETTE
          </Button>
          <Button variant="contained" color="primary" onClick={addRandomColor}>
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
          <DragableColorList
            colors={colors}
            handleClick={handleClick}
            axis="xy"
            onSortEnd={onSortEnd}
          />
        </ColorsList>
      </Main>
    </Box>
  );
}
