import axios from "axios";
export const clubData_=()=>{
    return axios.get("http://127.0.0.1:8000/club_list"); //make a request of data and return response of file
}