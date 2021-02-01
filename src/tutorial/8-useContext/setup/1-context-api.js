import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const ContextAPIComponent = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  const toggleEngagedStatus = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.map((person) => {
        if (person.id === id) {
          return {
            ...person,
            isEngaged: !person.isEngaged,
          };
        }
        return person;
      });
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson, toggleEngagedStatus }}>
      <h3>Context API / useContext hook</h3>
      <List people={people} removePerson={removePerson} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name, isEngaged }) => {
  const contextData = useContext(PersonContext);
  const { removePerson, toggleEngagedStatus } = contextData;
  return (
    <div className="item">
      <h4 className={isEngaged ? "engaged" : "free"}>{name}</h4>
      <button onClick={() => toggleEngagedStatus(id)}>engaged</button>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPIComponent;
