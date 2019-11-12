const vowel = ["a", "e", "i", "o", "u"];

const isVowel = str => vowel.includes(str);

const countVowel = (str, strLength) => {
  let vowelNumber = 0;
  for (let i = 0; i < strLength; i++) {
    if (isVowel(str[i])) {
      vowelNumber += 1;
    }
  }
  return vowelNumber;
};

const shouldBeMommyify = (str, strLength) => {
  return countVowel(str, strLength) / strLength > 0.3;
};

const replace = (str, strLength) => {
  let result = "";
  for (let i = 0; i < strLength; i++) {
    result += countResult(str[i], str[i - 1]);
  }
  return result;
};

const countResult = (current, previous) => {
  let str = "";
  if (isVowel(current)) {
    if (!isVowel(previous)) {
      str += "mommy";
    }
  } else {
    str += current;
  }
  return str;
};

const mommify = str => {
  const strLength = str.length;
  if (shouldBeMommyify(str, strLength)) {
    return replace(str, strLength);
  }
  return str;
};

export default mommify;
