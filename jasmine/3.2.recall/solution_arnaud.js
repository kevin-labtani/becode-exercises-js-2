let titleize = test => {
  let checkCase = test => {
    let array = [];
    test.split(" ").forEach(el => {
      el.length > 3 ? array.push(upString(el)) : array.push(el);
    });
    return array.join(" ");
  };

  let fullCap = test => {
    let result = test.split(". ").map(check => {
      return upString(check);
    });
    return result.join(". ");
  };

  let upString = test => {
    return test[0].toUpperCase() + test.slice(1);
  };

  return fullCap(checkCase(test));
};

let everyPossiblePair = testArray => {
  let checkArray = [];
  let test = 0;
  for (let i = 0; i < testArray.length; i++) {
    test = i + 1;
    if (test > testArray.length - 1) {
      test = 0;
    }
    checkArray.push([testArray[i], testArray[test]]);
    checkArray[i].sort();
  }
};

let findAnagrams = str => {
  if (str.length === 1) return str;
  var permut = [];
  for (var i = 0; i < str.length; i++) {
    var s = str[0];
    var _new = findAnagrams(str.slice(1, str.length));
    for (var j = 0; j < _new.length; j++) permut.push(s + _new[j]);
    str = str.substr(1, str.length - 1) + s;
  }
  return permut;
};
