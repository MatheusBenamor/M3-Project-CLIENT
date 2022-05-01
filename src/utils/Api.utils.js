import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
        baseURL: "https://app-swot.herokuapp.com/"
    });
  }

//Signup
signup = async (signupInfo) => {
    try {
        const { data } = await this.api.post("/auth/signup", signupInfo)
        return data;
    } catch (error) {
        throw error.response;
    }
}

//Login
login = async (loginInfo) => {
    try {
        const { data } = await this.api.post("/auth/login", loginInfo)
        localStorage.setItem('token', data.token)
        return { data }
    } catch (error) {
        throw error
    }
}
}


export default new Api()