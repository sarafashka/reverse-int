module.exports = function reverse (n) {
  let result = '';
  let str = String(Math.abs(n));
    for (i = 0; i < str.length; i ++) {
        result = `${str[i]}${result}`;
    } return Number(result);
}
