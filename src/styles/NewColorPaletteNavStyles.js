import sizes from './sizes';

export default {
  navBarButtons: {
    display: 'flex',
    height: 64,
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    '& button': {
      margin: 10,
    },
    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
    [sizes.down('md')]: {
      '& button': {
        padding: 5,
        marginRight: 3,
      },
    },
    [sizes.down('xs')]: {
      '& button': {
        padding: 2,
        margin: 0,
      },
    },
  },
};
