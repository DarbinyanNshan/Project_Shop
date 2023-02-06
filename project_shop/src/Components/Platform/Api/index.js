import axios from "axios";


const Api = "https://crudcrud.com/api/18672b80a7184b0a91edf5f00a3daf31/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

export const GetUser = (id) => {
    return axios.get(`${Api}list/${id}`)
}

export const GetUsers = () => {
    return axios.get(`${Api}list`)
}

export const UpdateUser = (id, data) => {
    return axios.put(`${Api}list/${id}`, data)
}


