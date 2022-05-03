import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
        baseURL: "https://app-swot.herokuapp.com/"
    });

    this.api.interceptors.request.use(
        (config) => {
          const token = localStorage.getItem('token');
          if (token) {
            config.headers = {
              'Authorization': `Bearer ${token}`
            }
          }
          return config;
        },
        (error) => {
          console.log(error)
        }
      )
  
      this.api.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
          throw error;
        }
      )
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

//User Analysis
createAnalysis = async (newAnalysis) => {
    try{
        const { data } = await this.api.post("/analysis", newAnalysis)
        return data
    } catch (error){
        throw error
    }
}

//User Analysis Names
getUserAnalysisName = async (id) => {
    try{
        const { data } = await this.api.get(`/analysis/${id}`)
        return data
    } catch (error){
        throw error
    }
}
/*getUserAnalysisName = async (id) => {
    try{
        const { data } = await this.api.get(`/analysis/${id}`)
        return data
    } catch (error){
        throw error
    }
}*/

//User Profile
getUserProfile = async (id) => {
    try{
        const { data } = await this.api.get(`/user/${id}`)
        return data
    } catch (error){
        throw error
    }
}

//User Profile
getUser = async () => {
    try{
        const {data} = await this.api.get("/user")
        return data
    } catch (error){
        throw error
    }
}

updateImage = async (file) => {
    try {
      const imgData = new FormData();
      imgData.append('image', file);

      const {data} = await this.api.put('/user/image', imgData);
      return data;
    } catch (error) {
      throw error.response;
    }
  }

  getFeedbacks = async () => {
    try {
      const {data} = await this.api.get('/feedback')
      return data;
    } catch (error) {
      throw error.response;
    }
  }
}


export default new Api()