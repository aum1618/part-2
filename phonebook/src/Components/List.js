import React from "react";

export default function List({ list, deleteContact }) {
  return (
    <div>
      {list.map((name, index) => (
        <p key={index}>
          {name.name} {name.number}{" "}
          <button onClick={() => deleteContact(name.id,name.name)}>delete</button>
        </p>
      ))}
    </div>
  );
}
