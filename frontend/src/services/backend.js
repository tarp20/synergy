import axios from 'axios';

class BackendService{
    getAllUsers(){
        return axios.get('http://localhost:8000/api/v1/users/')
    }
    addUser(data){
        return axios.post('http://localhost:8000/api/v1/users/', data)
    }
    editUser(id, data){
        return axios.put(`http://localhost:8000/api/v1/users/${id}`, data)
    }
    deleteUser(id, data){
        return axios.delete(`http://localhost:8000/api/v1/users/${id}`, data)
    }
    getAllGroups(){
        return axios.get('http://localhost:8000/api/v1/groups/')
    }
    addGroup(data){
        return axios.post('http://localhost:8000/api/v1/groups/', data)
    }
    editGroup(id, data){
        return axios.put(`http://localhost:8000/api/v1/groups/${id}`, data)
    }
    deleteGroup(id, data){
        return axios.delete(`http://localhost:8000/api/v1/groups/${id}`, data)
    }

}


export default new BackendService();