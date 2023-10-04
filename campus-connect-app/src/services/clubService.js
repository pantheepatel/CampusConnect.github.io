import axios from "axios";
export const clubData_ = () => {
    return axios.get(`http://127.0.0.1:8000/club_list`); //make a request of data and return response of file
}

export const myClubData_ = () => {
    return axios.get(`http://127.0.0.1:8000/my_club_list`, {
        params: {
            admin: JSON.parse(localStorage.getItem("user_config"))["email"]
        }
    }); //make a request of data and return response of file
}

export const clubDetail = (id) => {
    console.log('into clubDetail with id : ', id)
    return axios.get(`http://127.0.0.1:8000/clubDetail/${id}/`); //make a request of data and return response of file
}