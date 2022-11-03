export const randomizeNumber = () => {
  let temp = [];

  for (let i = 1; i <= 45; i++) {
    temp.push(Number(i));
  }

  temp.sort(() => Math.random() - 0.5);

  return temp.slice(0, 6).sort(function (a, b) {
    return a - b;
  });
};
