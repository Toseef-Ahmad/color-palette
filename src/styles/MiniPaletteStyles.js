export default {
  root: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: '0.5rem',
    position: 'relative',
    border: '1px solid black',
    cursor: 'pointer',
    '&:hover svg': {
      opacity: 1,
    },
  },
  color: {
    height: '120px',
    width: '100%',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    paddingTop: '0.5rem',
    position: 'relative',
  },
  emoji: {},
  miniColor: {
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    width: '20%',
    margin: '0 auto',
    marginBottom: '-3.5px',
  },
  delete: {},
  deleteIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    zIndex: 1,
    color: 'white',
    opacity: 0,
    padding: 1,
  },
};
