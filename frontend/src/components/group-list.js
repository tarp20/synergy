import React, { useState, useEffect } from "react";
import BackendService from "../services/backend";
import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const GroupList = (props) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    console.log("Here");
    retrieveGroups();
  }, []);

  const retrieveGroups = () => {
    BackendService.getAllGroups()
      .then((response) => {
        setGroups(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteGroup = (groupId) => {
    BackendService.deleteGroup(groupId)
      .then((response) => {
        retrieveGroups();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container>
      <Link to={"/groups/add"}>
        <Button
          className="btn  float-end mx-5 mb-5"
          variant="outline-secondary"
        >
          Add Group
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={group.id}>
                <td class="align-middle">{group.name}</td>
                <td class="align-middle">{group.description}</td>
                <td>
                  <Link
                    to={{
                      pathname: "/groups/" + group.id,
                      state: {
                        currentGroup: group,
                      },
                    }}
                  >
                    <Button variant="outline-secondary" className="me-2">
                      Edit
                    </Button>
                  </Link>
                  {group.empty && (
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteGroup(group.id)}
                    >
                      Delete
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default GroupList;
