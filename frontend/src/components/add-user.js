import React, { useState, useEffect } from "react";
import BackendService from "../services/backend";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddUser = (props) => {
  let editing = false;
  let initialUsername = "";
  const [initialGroups, setInitialGroups] = useState([]);

  useEffect(() => {
    retrieveGroups();
  }, []);

  const retrieveGroups = () => {
    BackendService.getAllGroups()
      .then((response) => {
        setInitialGroups(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (props.location.state && props.location.state.currentUser) {
    editing = true;
    initialUsername = props.location.state.currentUser.username;
  }

  const [username, setUsername] = useState(initialUsername);
  const [groups, setGroups] = useState(initialGroups);
  const [submitted, setSubmitted] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeGroups = (e) => {
    console.log(e);
    setGroups(Array.from(e.currentTarget.selectedOptions, (v) => v.value));
  };
  const saveUser = () => {
    var data = {
      username: username,
      group_names: groups,
    };

    if (editing) {
      BackendService.editUser(props.location.state.currentUser.id, data)
        .then((response) => {
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      BackendService.addUser(data)
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
          <h4>User {editing ? "edited" : "added"} Successfully</h4>
          <Link to={"/users/"}>Back to Users</Link>
        </div>
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>{editing ? "Edit" : "Add"} User</Form.Label>
            <Form.Control
              type="text"
              required
              value={username}
              placeholder="Enter username here"
              onChange={onChangeUsername}
            />
            <Form.Control
              as="select"
              multiple
              value={groups}
              onChange={onChangeGroups}
            >
              {initialGroups.map((group) => (
                <option key={group.name} value={group.name}>
                  {group.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="info" onClick={saveUser}>
            {editing ? "Edit" : "Add"} User
          </Button>
        </Form>
      )}
    </Container>
  );
};
export default AddUser;
