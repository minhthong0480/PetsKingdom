import axios from 'axios'

export const createPet = async (token, data) => await axios.post(`${process.env.REACT_APP_API}/pets/create-pet`, data, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
})