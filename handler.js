'use strict';

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  comsole.log(randomNumber);
  return randomNumber;
};
