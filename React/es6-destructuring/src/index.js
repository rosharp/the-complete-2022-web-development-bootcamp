// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);

/*const [tesla, teslaTopSpeed, teslaTopColour] = [
  cars[0],
  cars[0].speedStats.topSpeed,
  cars[0].coloursByPopularity[0]
];

const [honda, hondaTopSpeed, hondaTopColour] = [
  cars[1].model,
  cars[1].speedStats.topSpeed,
  cars[1].coloursByPopularity[0]
];*/

const [honda, tesla] = cars;
const [
  {
    speedStats: { topSpeed: hondaTopSpeed },
    coloursByPopularity: hondaTopColour
  },
  {
    speedStats: { topSpeed: teslaTopSpeed },
    coloursByPopularity: teslaTopColour
  }
] = [honda, tesla];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
