import sizes from './sizes';
import bg from './bg.js';

export default {
  root: {
    // backgroundColor: 'blue',
    backgroundColor: 'blue',
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
    padding: 10,
    '& a': {
      width: 200,
      fontSize: 20,
      color: 'white',
      textDecoration: 'none',
      alignItems: 'center',
      marginTop: 4,
      [sizes.down('xs')]: {
        fontSize: 16,
      },
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
