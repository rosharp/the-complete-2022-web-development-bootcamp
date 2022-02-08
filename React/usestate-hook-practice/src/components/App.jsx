import React, { useEffect, useState } from "react";

function App(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerId = setInterval(() => tick(), 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  });
  function tick() {
    setDate(new Date());
  }
  return (
    <div className="container">
      <h1 className="clock">
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </h1>
    </div>
  );
}

export default App;
