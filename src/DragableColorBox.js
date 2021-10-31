import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: '25%',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(2)',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    transition: 'all .3s ease-in-out',
  },
};

const DragableColorBox = (props) => {
  return (
    <>
      <div className={props.classes.root}>
        <div className={props.classes.boxContent}>
          <span>{props.colorName}</span>
          <DeleteIcon
            className={props.classes.deleteIcon}
            onClick={() => props.handleClick(props.id)}
          />
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(DragableColorBox);
