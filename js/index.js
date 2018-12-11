function reverseString(str) {
  let ourArray = [];

  for(let i = 0; i < str.length; i++) {
    ourArray.unshift(str.charAt(i));
  }
  str = ourArray.join("");
  return str;
}

reverseString("string");
