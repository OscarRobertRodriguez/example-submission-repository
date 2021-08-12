import React from "react";
import Part from "./Part";

export const Content = ({ parts }) => {
  function total() {
    return parts.map((part) => part.exercises).reduce((a, b) => a + b, 0);
  }
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p style={{ fontWeight: "bold" }}>total of {total()}</p>
    </div>
  );
};

export default Content;
