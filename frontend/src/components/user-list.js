import React, { useState, useEffect } from "react";
import BackendService from "../services/backend";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import moment from "moment";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveUsers();
  }, []);

  const retrieveUsers = () => {
    BackendService.getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteUser = (userId) => {
    BackendService.deleteUser(userId)
      .then((response) => {
        retrieveUsers();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Link to={"/users/add"}>
        <Button
          className="btn  float-end mx-5 mb-5"
          variant="outline-secondary"
        >
          Add User
        </Button>
      </Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date Created</th>
            <th>Groups</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td class="align-middle">{user.username}</td>
                <td class="align-middle">
                  {moment(user.created).format("Do MMMM YYYY")}
                </td>
                <td class="align-middle">{user.group_names.join(", ")}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/users/" + user.id,
                      state: {
                        currentUser: user,
                      },
                    }}
                  >
                    <Button variant="outline-secondary" className="me-2">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default UserList;
