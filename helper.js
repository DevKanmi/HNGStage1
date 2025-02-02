const axios = require("axios");
const { config } = require("dotenv");
config();

const { NUMBERS_BASE_URL } = process.env;

const base_uri = NUMBERS_BASE_URL;

exports.getFact = async (number) => {
  try {
    const url = `${base_uri}/${number}/math`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

exports.isPrime = (number) => {
  if (number <= 1) return false;
  let i = 2;
  while (i < number - 1) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
};

exports.isPerfect = (number) => {
  if (number <= 1) return false;
  let sum = 0;
  let i = 1;

  while (i <= number / 2) {
    if (number % i === 0) {
      sum += i;
    }
    i++;
  }

  return sum === number;
};

exports.digit_sum = (no) => {
  const number = Math.abs(no);
  const digits = String(number).split("").map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  return no < 0 ? Number("-" + sum) : sum;
};

exports.properties = (no) => {
  const number = Math.abs(no);
  let properties = [];
  const digits = String(number).split("").map(Number);
  const base = digits.length;
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum = sum + digits[i] ** base;
  }
  if (sum === number) {
    properties.push("armstrong");
  }

  if (number % 2 === 0) {
    properties.push("even");
  } else {
    properties.push("odd");
  }
  return properties;
};
