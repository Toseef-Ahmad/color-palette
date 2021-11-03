import sizes from './sizes';
export default {
  container: {
    display: 'flex',
    height: '40px',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: '150px',
    backgroundColor: '#eceff1',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    '& a': {
      display: 'block',
      marginTop: '5px',
      textDecoration: 'none',
      color: 'black',
      textAlign: 'center',
      position: 'absolute',
      left: '15%',
      top: '10%',
      fontFamily: 'Roboto, sans-serif',
    },
  },
  level: {
    position: 'absolute',
    left: '170px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '14px',
    [sizes.down('xs')]: {
      left: 155,
      fontSize: 13,
    },
  },
  slider: {
    width: '30%',
    padding: '10px 10px',
    position: 'absolute',
    left: '230px',
    '& .rc-slider-rail': {
      height: 7,
    },
    '& .rc-slider-track': {
      background: 'transparent',
    },
    '& .rc-slider-handle': {
      background: 'green',
      border: 'none',
      outline: 'none',
    },
    [sizes.down('xs')]: {
      left: 200,
    },
  },

  selectContainer: {
    width: '20%',
    padding: '10px 10px',
    position: 'relative',
    // left: '1100px',
    marginLeft: 'auto',
  },
};
