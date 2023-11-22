const validSpacing = (word) => {
  if (word === undefined || word === null || word !== word.replace(/\s+/g, ' ').trim()) {
    return false;
  }

  return true;
};

module.exports = {
  validSpacing,
};
