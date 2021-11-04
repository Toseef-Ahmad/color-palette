// i am using jss in this component
import React from 'react';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './styles/MiniPaletteStyles';

const MiniPalette = (props) => {
  const { classes, paletteName, colors, id, emoji, handleDelete, openDialog } =
    props;
  const deletePalette = (e) => {
    e.stopPropagation();
    // handleDelete(id);
    openDialog(id);
  };
  return (
    <>
      <div className={classes.root} onClick={props.handleClick}>
        <div className={classes.delete}>
          <DeleteIcon
            className={classes.deleteIcon}
            style={{ transition: 'all 0.3s ease-in-out' }}
            onClick={deletePalette}
          />
        </div>
        <div className={classes.color}>
          {colors.map((c) => (
            <div
              className={classes.miniColor}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
        <div className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
