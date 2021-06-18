import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";
//Stateless Function Component, Returns JSX

//JSX Rules
//return Single Element
//div / section / article
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

//Destructor
function Student() {
  const students = [
    {
      id: "1",
      fname: "Narendra",
      lname: "Selot",
      job: "Developer",
      age: 23,
      company: "RadixWeb",
      college: "Parul Universtiy",
      DOB: "29/08/1998",
      address: "Vadodara",
      collegeLogo:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
    },
    {
      id: "2",
      fname: "Devisha",
      lname: "Parekh",
      job: "Data Scientist",
      age: 24,
      company: "Radix",
      college: "Parul Universtiy",
      DOB: "11/08/1997",
      address: "Kolkata",
      collegeLogo:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
    },
    {
      id: "3",
      fname: "Naina",
      lname: "Selot",
      job: "Designer",
      age: 21,
      company: "OnPrintShop",
      college: "MSU",
      DOB: "26/08/2000",
      address: "Vadodara",
      collegeLogo:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
    },
    {
      id: "4",
      fname: "Pratik",
      lname: "Kakkad",
      job: "Developer",
      age: 23,
      company: "OnPrintShop",
      college: "Parul Universtiy",
      DOB: "26/06/1998",
      address: "Ahmedabad",
      collegeLogo:
        "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
    },
  ];
  return (
    <section class="person-list">
      {students.map(function (student, index) {
        return (
          <Person key={"perIn" + index} person={student}>
            <p>--Student Details--</p>
          </Person>
        );
      })}
    </section>
  );
}
const CollegeInfo = (props) => {
  const { college, address } = props.person;
  return (
    <div>
      <p>{college}</p>
      <p>{address}</p>
    </div>
  );
};
const Person = (props) => {
  const { fname, job, age, company, collegeLogo, id } = props.person;
  const children = props.children;
  return (
    <article className="person">
      <img draggable="false" src={collegeLogo} height="100px" width="100px" />
      {children}
      <h1>Name: {fname}</h1>
      <p>
        ID: <b>{id}</b>
      </p>
      <p>Aspiring To be: {job}</p>
      <i>Age: {age}</i>
      <p>Dream Company: {company}</p>
      <CollegeInfo person={props.person} />
      <hr />
    </article>
  );
};

ReactDom.render(<Student />, document.getElementById("root"));
