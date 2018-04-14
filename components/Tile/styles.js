const generateTileStyles = function(opts) {
  const defaultStyles = {
    backgroundColor: '#343434',
    width: 100,
    height: 100
  };

  return Object.assign({}, defaultStyles, opts);
};

export {
  generateTileStyles
};
