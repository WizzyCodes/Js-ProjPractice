const input = document.getElementById("input");
const output = document.getElementById("output");

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const check = () => {
  const inputValue = input.value;
  const reversed = reverseString(inputValue);

  if (inputValue === reversed) {
    output.innerHTML = `<p>This is a palindrome</p>`;
    alert("This is a palindrome");
    // output.value = "";
  } else {
    output.innerHTML = `<p>This is not  a palindrome</p>`;
    alert("This is not a palindrome");
    // output.value = "";
  }
  input.value = "";
  output.value = "";

  //   window.location.reload();
  //   inputValue = "";
  //   alert(reversed);
};
