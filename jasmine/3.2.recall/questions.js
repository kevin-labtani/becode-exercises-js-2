let selectElementsStartingWithA = array => {
  return array.filter(word => word[0] === "a");
};

let selectElementsStartingWithVowel = array => {
  return array.filter(word => word[0].match(/[aeiouy]/i));
};

let removeNullElements = array => {
  return array.filter(word => word !== null);
};

let removeNullAndFalseElements = array => {
  return array.filter(word => word !== null && word !== false);
};

let reverseWordsInArray = array => {
  const revArray = array.map(element =>
    element
      .split("")
      .reverse()
      .join("")
  );
  return revArray;
};

let everyPossiblePair = array => {
  array.sort(); // sorted alphabetically

  let results = [];
  // no need to iterate over last element
  for (let i = 0; i < array.length - 1; i++) {
    // grab the second element
    for (let j = i + 1; j < array.length; j++) {
      results.push([array[i], array[j]]);
    }
  }
  return results;
};

let allElementsExceptFirstThree = array => {
  return array.slice(3);
};

let addElementToBeginning = (array, element) => {
  array.unshift(element);
  return array;
};

let sortByLastLetter = array => {
  array.sort((a, b) => {
    if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) {
      return -1;
    }
    if (b.charAt(b.length - 1) > a.charAt(a.length - 1)) {
      return 1;
    }

    return 0;
  });
  return array;
};

let getFirstHalf = string => {
  return string.substring(0, Math.round(string.length / 2));
};

let makeNegative = number => {
  return -Math.abs(number);
};

let numberOfPalindromes = array => {
  const PalArray = array.filter(
    element =>
      element ===
      element
        .split("")
        .reverse()
        .join("")
  );
  return PalArray.length;
};

let shortestWord = array => {
  const sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray[0];
};

let longestWord = array => {
  const sortedArray = array.sort((a, b) => a.length - b.length);
  return sortedArray[sortedArray.length - 1];
};

let sumNumbers = array => {
  return array.reduce((acc, curr) => (acc += curr));
};

let repeatElements = array => {
  const concatArr = array.concat(array);
  return concatArr;
};

let stringToNumber = string => {
  return parseInt(string);
};

let calculateAverage = array => {
  const sumEl = array.reduce((acc, curr) => (acc += curr));
  const avgEl = sumEl / array.length;
  return avgEl;
};

let getElementsUntilGreaterThanFive = array => {
  let newArr = [];
  while (true) {
    let shifted = array.shift();
    if (shifted >= 6) {
      return newArr;
    }
    newArr.push(shifted);
  }
};

let convertArrayToObject = array => {
  let keys = [];
  let values = [];
  for (let index = 0; index < array.length; index += 2) {
    keys.push(array[index]);
  }
  for (let index = 1; index < array.length; index += 2) {
    values.push(array[index]);
  }

  let resObj = {};
  keys.forEach((key, i) => (resObj[key] = values[i]));
  return resObj;
};

let getAllLetters = array => {
  const arrayOfArraysOfLetters = array.map(element => element.split(""));
  const arrayOfLetters = arrayOfArraysOfLetters.flat();
  const setofArrayOfLetters = new Set(arrayOfLetters);
  const dedupedArrayOfLetters = Array.from(setofArrayOfLetters);
  const sortedDedupedArrayOfLetters = dedupedArrayOfLetters.sort();
  return sortedDedupedArrayOfLetters;
};

let swapKeysAndValues = object => {
  const values = Object.keys(object);
  const keys = Object.values(object);
  let resObj = {};
  keys.forEach((key, i) => (resObj[key] = values[i]));
  return resObj;
};

let sumKeysAndValues = object => {
  const keys = Object.keys(object).map(Number);
  const values = Object.values(object);
  const sumValues = values.reduce((acc, val) => (acc += val));
  const sumKeys = keys.reduce((acc, key) => (acc += key));
  return sumValues + sumKeys;
};

let removeCapitals = string => {
  const letterArray = string.split("");
  const filteredLetterArray = letterArray.filter(letter =>
    letter.match(/[a-z ]/)
  );
  const filteredString = filteredLetterArray.join("");
  return filteredString;
};

let roundUp = number => {
  return Math.ceil(number);
};

let formatDateNicely = date => {
  return date.toLocaleDateString("fr-FR");
};

let getDomainName = string => {
  const postAtString = string.split("@")[1];
  const strippedStringArray = postAtString.split(".");
  const filteredStrippedStringArray = strippedStringArray.filter(
    el => el != "com"
  );
  const joinedFilteredStripperString = filteredStrippedStringArray.join(".");
  return joinedFilteredStripperString;
};

let titleize = string => {
  return "Write your method here";
};

let checkForSpecialCharacters = string => {
  // \W Non-wordly character: anything but \w, e.g a non-latin letter or a space.
  if (string.match(/\W/)) {
    return true;
  }
  return false;
};

let squareRoot = number => {
  return Math.sqrt(number);
};

let factorial = number => {
  const factorial = n => {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  };
  return factorial(number);
};

let findAnagrams = string => {
  return "Write your method here";
};

let convertToCelsius = number => {
  const getTempConversion = fahrenheit =>
    Math.round(((fahrenheit - 32) * 5) / 9);

  return getTempConversion(number);
};

let letterPosition = array => {
  const mappedArray = array.map(el => el.toLowerCase().charCodeAt() - 96);
  return mappedArray;
};
