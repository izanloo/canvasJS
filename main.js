const startPoint = {
  x: 450,
  y: 200,
};

const endPoint = {
  x: 350,
  y: 200,
};

drawLine(startPoint, endPoint);



const centerPoint = {
  x: 400,
  y: 200,
};

const eyes1 = {
    x: 450,
    y: 150,
  };
  const eyes2 = {
    x: 360,
    y: 150,
  };


drawCircle(centerPoint, 100);
drawCircle(eyes1,5);
drawCircle(eyes2,5);