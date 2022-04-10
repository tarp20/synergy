import React, { useState } from "react";
import BackendService from "../services/backend";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddGroup = (props) => {
  let editing = false;
  let initialName = "";
  let initialDescription = "";

  if (props.location.state && props.location.state.currentGroup) {
    editing = true;
    initialName = props.location.state.currentGroup.name;
    initialDescription = props.location.state.currentGroup.description;
  }

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [submitted, setSubmitted] = useState(false);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };
  const saveGroup = () => {
    var data = {
      name: name,
      description: description,
    };
    if (editing) {
      BackendService.editGroup(props.location.state.currentGroup.id, data)
        .then((response) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      BackendService.addGroup(data)
        .then((response) => {
          setSubmitted(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Container>
      {submitted ? (
        <div>
          <h3>Group {editing ? "edited" : "added"} Successfully</h3>
          <Link to={"/groups/"}>Back to Users</Link>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? "Edit" : "Add"} Group</Form.Label>
            <Form.Control
              type="text"
              required
              value={name}
              placeholder="Enter name here"
              onChange={onChangeName}
            />
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              placeholder="Enter description here"
              onChange={onChangeDescription}
            />
          </Form.Group>
          <Button variant="info" onClick={saveGroup}>
            {editing ? "Edit" : "Add"} Group
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default AddGroup;
