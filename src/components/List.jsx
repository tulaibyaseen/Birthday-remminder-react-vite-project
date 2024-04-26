import React from "react";

const List = ({ people, setPeople }) => {
  const handleRemove = (id) => {
    const remove = people.filter((person) => person.id !== id);
    setPeople(remove);
  };

  return (
    <>
      {people.map((person) => {
        return (
          <article className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
            <button
              className="btn-remove"
              onClick={() => handleRemove(person.id)}
            >
              remove{" "}
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
