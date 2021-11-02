import sizes from './sizes';

export default {
  container: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  color: {
    height: '90%',
  },
  colorBox: {
    display: 'inline-block',
    margin: '0 auto',
    width: '20%',
    height: '50%',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: 1,
    backgroundColor: 'black',
    [sizes.down('lg')]: {
      height: '50%',
      width: '20%',
    },
    [sizes.down('md')]: {
      height: '20%',
      width: '50%',
    },
    [sizes.down('xs')]: {
      height: '10%',
      width: '100%',
    },
  },
  goBack: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    opacity: 1,
    textDecoration: 'none',
    color: 'white',
  },
};
