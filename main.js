"use strict";
const textBefore = document.querySelector(".text");
console.log(textBefore);
const changeText = () => {
  let str = textBefore.textContent;
  textBefore.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
};
changeText();
