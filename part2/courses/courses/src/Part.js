import React from "react";

export const Part = ({ name, exercises }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        {name} {exercises}
      </li>
    </ul>
  );
};

export default Part;
