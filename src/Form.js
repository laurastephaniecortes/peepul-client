import React, { Component } from "react";
//import { render } from "react-dom";

import Form from "react-jsonschema-form";

const schema = {
  title: "Create New Person",
  type: "object",
  required: ["Name"],
  properties: {
    Name: {type: "string", title: "Name"},
    BodyType: {type: "string", title: "Body Type"},
    Age: {type: "string", title: "Age"},
    Sex: {type: "string", title: "Sex"},
    Attractiveness: {type: "string", title: "Attractiveness"},
  }
};

const log = (type) => console.log.bind(console, type);

const onSubmit = ({formData}) => fetch('http://localhost:8081/addperson', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData)
})
export default function PeopleForm() {
  return (
  <Form schema={schema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")} />
  );

}
