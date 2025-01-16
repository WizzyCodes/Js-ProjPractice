const body = document.getElementsByTagName("body")[0];
// body.style.backgroundColor = "red";

const setColor = (color) => {
  body.style.backgroundColor = color;
};

// const setColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   body.style.backgroundColor = "#" + randomColor;
// };

const randomColor = () => {
  const color1 = Math.round(Math.random() * 255);
  const color2 = Math.round(Math.random() * 255);
  const color3 = Math.round(Math.random() * 255);
  //   const color4 = Math.round(Math.random() * 255);

  const color = `rgb(${color1}, ${color2}, ${color3})`;
  //   const acolor = `rgba(${color1}, ${color2}, ${color3}, ${color4 / 255})`;
  body.style.backgroundColor = color;
};

// randomColor();
