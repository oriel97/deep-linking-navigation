const config = {
  screens: {
    Home: {
      path: 'home',
    },
    Help: {
      path: 'help/:id/:name/:color/:textColor',
      parse: {
        id: id => `${id}`,
        name: name => `${name}`,
        color: color => `${color}`,
        textColor: textColor => `${textColor}`,
      },
    },
    End: 'end',
    Details: 'details',
  },
};

const linking = {
  prefixes: ['https://app', 'phy://app', 'phy://', 'phy'],
  config,
};

export default linking;
