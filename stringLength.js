const stringLength = (str) => {
  const wordCount = str.length;
  if ( wordCount < 1 || wordCount > 10) {
    throw 'String length should be between 1 and 10';
  } else {
    return wordCount;
  }
};

module.exports = stringLength;
