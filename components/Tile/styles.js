const defaultTileStyles = {
  backgroundColor: '#343434',
  width: 100,
  height: 100
};

const generateTileStyles = function(opts = {}) {
  return Object.assign({}, defaultTileStyles, opts);
};

export {
  defaultTileStyles,
  generateTileStyles
};
