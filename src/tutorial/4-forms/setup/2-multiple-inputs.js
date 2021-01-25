import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    staffIdNo: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age, staffIdNo } = person;
    if (firstName && email && age && staffIdNo) {
      setPeople((people) => {
        return [...people, { id: new Date().getTime().toString(), ...person }];
      });
      setPerson({
        firstName: "",
        email: "",
        age: "",
        staffIdNo: "",
      });
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="staffIdNo">staffIdNo : </label>
            <input
              type="staffIdNo"
              id="staffIdNo"
              name="staffIdNo"
              value={person.staffIdNo}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age, staffIdNo } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{age}</h4>
              <h4>{staffIdNo}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
