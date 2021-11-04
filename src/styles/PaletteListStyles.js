import sizes from './sizes';
import bg from './bg.js';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  // '.fade-exit': {
  //   opacity: 1,
  // },
  // '.fade-exit-active': {
  //   opacity: 0,
  //   transition: 'opacity 500ms ease-out',
  // },
  root: {
    // backgroundColor: 'blue',
    backgroundColor: '#353BAA',
    backgroundImage: `url("${bg.url}")`,
    // backgroundAttachment: 'fixed',
    height: 'calc(100vh)',
    overflow: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',

    // height: '100vh',
    // border: '1px solid white',
  },
  nav: {
    display: 'flex',
    width: '100%',
    marginTop: 'auto',
    justifyContent: 'space-between',
    color: 'white',
    padding: '10px 0 10px 0',
    // fontSize: 10,
    '& a': {
      width: 200,
      textAlign: 'right',
      fontSize: 20,
      color: 'white',
      textDecoration: 'none',
      alignItems: 'center',
      marginTop: 4,

      [sizes.down('xs')]: {
        fontSize: 16,
      },
    },
    '& h1': {
      width: 200,
      margin: '6px 0',
      fontSize: 17,
    },
  },
  palette: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridGap: '2%',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1%',
    },
  },
};
