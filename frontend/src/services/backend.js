import axios from "axios";

class BackendService {
  getAllUsers() {
    return axios.get("http://localhost:8000/api/v1/users/");
  }
  addUser(data) {
    return axios.post("http://localhost:8000/api/v1/users/", data);
  }
  editUser(id, data) {
    return axios.patch(`http://localhost:8000/api/v1/users/${id}/`, data);
  }
  deleteUser(id) {
    return axios.delete(`http://localhost:8000/api/v1/users/${id}/`);
  }
  getAllGroups() {
    return axios.get("http://localhost:8000/api/v1/groups/");
  }
  addGroup(data) {
    return axios.post("http://localhost:8000/api/v1/groups/", data);
  }
  editGroup(id, data) {
    return axios.patch(`http://localhost:8000/api/v1/groups/${id}/`, data);
  }
  deleteGroup(id) {
    return axios.delete(`http://localhost:8000/api/v1/groups/${id}/`);
  }
}

export default new BackendService();
