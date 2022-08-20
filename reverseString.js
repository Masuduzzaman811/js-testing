const reverseString = (str) => {
  let strArr = str.split('');
  let revArr = strArr.reverse();
  return str.split('').reverse().join('');
};

module.exports = reverseString;