function indexOfIgnoreCase(s1, s2) {
  const lowerCaseS1 = s1.toLowerCase();
  const lowerCaseS2 = s2.toLowerCase();

  return lowerCaseS1.indexOf(lowerCaseS2);
}

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
  