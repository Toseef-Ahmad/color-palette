import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DragableColorBox from './DragableColorBox';
import { ChromePicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import DragableColorList from './DragableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewColorPaletteNav from './NewColorPaletteNav';
import NewColorPaletteColorPicker from './NewColorPaletteColorPicker';
import { withStyles } from '@mui/styles';
import seedColors from './seedColors';

import {
  Main,
  ColorPickerContainer,
  DrawerHeader,
  ColorsList,
} from './styles/NewColorPaletteStyles';

const drawerWidth = 300;

const styles = {
  colorPickerContainer: {
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& button': {
      fontSize: 11,
      margin: 5,
    },
  },
};

function NewColorPalette(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState('purple');
  const [colors, setColors] = React.useState([]);
  const [colorName, setColorName] = React.useState('');
  const { classes, palettes } = props;

  React.useEffect(() => {
    setColors(() => loadInitialColors());
    console.log(colors);
  }, []);

  const loadInitialColors = () => {
    const colorSource = palettesOrSeedColors();
    return colorSource[Math.floor(Math.random() * colorSource.length)].colors;
  };

  const palettesOrSeedColors = () => {
    return palettes.length > 0 ? palettes : seedColors;
  };

  const addRandomColor = () => {
    const colorSource = palettesOrSeedColors();
    const randomPalette =
      colorSource[Math.floor(Math.random() * colorSource.length)].colors;
    const randomColor =
      randomPalette[Math.floor(Math.random() * randomPalette.length)];
    setColors(() => [...colors, { ...randomColor, id: uuidv4() }]);
  };

  const randomHelper = (rand) => {
    return Math.floor(Math.random() * rand);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const addNewColor = (newColor) => {
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

  const savePalette = ({ name, emoji }) => {
    const newPalette = {
      paletteName: name,
      id: name.toLowerCase().replace(/ /g, '-'),
      emoji: emoji,
      colors: colors,
    };
    props.savePalette(newPalette);
    props.history.push('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NewColorPaletteNav
        open={open}
        savePalette={savePalette}
        handleDrawerOpen={handleDrawerOpen}
        palettes={props.palettes}
        colors={colors}
      />
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

        <ColorPickerContainer>
          <Typography variant="h4">Design Your Paltte</Typography>
          <div className={classes.colorPickerContainer}>
            <Button variant="contained" color="error" onClick={clearPalette}>
              CLEAR PALETTE
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
            >
              RANDOM PALETTE
            </Button>
          </div>

          <NewColorPaletteColorPicker addNewColor={addNewColor} />
        </ColorPickerContainer>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ColorsList>
          <DragableColorList
            colors={colors}
            handleClick={handleClick}
            axis="xy"
            onSortEnd={onSortEnd}
            distance={20}
          />
        </ColorsList>
      </Main>
    </Box>
  );
}

export default withStyles(styles)(NewColorPalette);
