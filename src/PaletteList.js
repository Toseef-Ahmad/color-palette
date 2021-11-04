import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { blue, red } from '@mui/material/colors';
// import './PaletteList.css';

const PaletteList = (props) => {
  const { palette, classes, deletePalette } = props;
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [inProp, setInProp] = React.useState(true);

  const openDialog = (id) => {
    setOpenDeleteDialog(true);
    setDeleteId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
  };

  const goToPalette = (id) => {
    props.history.push(`/palette/${id}`);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Palette</h1>
            <Link to="/palette/new">create new Palette</Link>
          </nav>
          {/* <div className={classes.palette}> */}
          <TransitionGroup className={classes.palette}>
            {palette.map((p) => {
              return (
                <CSSTransition key={p.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...p}
                    handleClick={() => goToPalette(p.id)}
                    handleDelete={deletePalette}
                    openDialog={openDialog}
                    id={p.id}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          {/* </div> */}
        </div>
        <Dialog open={openDeleteDialog} onClose={closeDialog}>
          <List>
            <ListItemButton
              onClick={() => {
                deletePalette(deleteId);
                closeDialog();
              }}
            >
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[500] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <DialogTitle>Delete Button</DialogTitle>
            </ListItemButton>
            <ListItemButton  onClick={() => 
              closeDialog()}
            >
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[500] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <DialogTitle>Delete Button</DialogTitle>
            </ListItemButton>
          </List>
        </Dialog>
      </div>
    </>
  );
};

export default withStyles(styles)(PaletteList);
