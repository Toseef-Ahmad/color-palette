import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import sizes from './styles/sizes';

const styles = {
  root: {
    backgroundColor: (props) => props.color,
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: '26.5%',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-7px',

    '&:hover svg': {
      color: 'white',
      transform: 'scale(2)',
    },

    [sizes.down('md')]: {
      width: '50%',
      height: '10%',
    },

    [sizes.down('xs')]: {
      width: '100%',
      height: '5%',
      '&:hover svg': {
        transform: 'scale(1.2)',
      },
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: 0,
    // top: 0,
    // paddingLeft: 10,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    '& span': {
      paddingLeft: 10,
      paddingTop: 10,
    }
  },
  deleteIcon: {
    transition: 'all .3s ease-in-out',
    marginRight: 10,
    marginBottom: 10,
    [sizes.down('xs')]: {
      marginBottom: 0,
    },
  },
};

const DragableColorBox = SortableElement((props) => {
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
});

export default withStyles(styles)(DragableColorBox);
