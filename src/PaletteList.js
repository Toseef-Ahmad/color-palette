import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import './PaletteList.css';

const PaletteList = (props) => {
  const { palette, classes, deletePalette } = props;
  const [inProp, setInProp] = React.useState(true);
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
                    id={p.id}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(PaletteList);
